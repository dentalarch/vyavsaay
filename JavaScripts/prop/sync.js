/**
 * This function is called to switch the application mode to offline
 * @param username username to create a unique local database
 */
function switch_to_online()
{
	if(is_read_access('sync_mode'))
	{	
		show_loader();
		sync_local_to_server(function()
		{
			sync_server_to_local(function()
			{
				set_session_online();
			});
		});
	}
	else
	{
		$("#modal_access_denied").dialog("open");
	}
}

/**
 * This function is called to switch the application mode to offline
 * @param username username to create a unique local database
 */
function switch_to_offline()
{
	if(is_read_access('sync_mode'))
	{
		var domain=get_domain();
		show_loader();
		create_local_db(domain,function(e)
		{
			sync_server_to_local(function()
			{
				sync_local_to_server(function()
				{
					set_session_offline();
				});
			});
		});
	}
	else
	{
		$("#modal_access_denied").dialog("open");
	}
}

/**
 * 
 */
function sync_local_and_server()
{
	if(is_read_access('sync'))
	{
		show_loader();
		sync_local_to_server(function()
		{
			sync_server_to_local(function()
			{
				hide_menu_items();
				hide_loader();
			});
		});
	}
	else
	{
		$("#modal_access_denied").dialog("open");
	}
}

/**
 * This function syncs the database on server to local db
 * @param func
 */
function sync_server_to_local(func)
{
	show_loader();
	start_table="";
	start_offset=0;
	
	//console.log(number_active_ajax);
	
	get_last_sync_time(function(last_sync_time)
	{
		sync_server_to_local_ajax(start_table,start_offset,last_sync_time);
	});
	
	var sync_download_complete=setInterval(function()
	{
  	   //console.log(number_active_ajax);
  	   if(number_active_ajax===0)
  	   {
  		   	clearInterval(sync_download_complete);
  		   	update_last_sync_time(function()
			{
				func();
			});
  	   }
     },1000);
	
};

function sync_server_to_local_ajax(start_table,start_offset,last_sync_time)
{
	var domain=get_domain();
	var username=get_username();
	var re_access=get_session_var('re');
	var db_name="re_local_" + domain;
	
	ajax_with_custom_func("./ajax/sync_download.php","domain="+domain+"&username="+username+"&re="+re_access+"&start_table="+start_table+"&start_offset="+start_offset+"&last_sync_time="+last_sync_time,function(e)
	{
		var response=e.responseXML;
		console.log(e.responseText);
		
		var end_table=response.childNodes[0].childNodes[1].childNodes[0].innerHTML;
		var end_offset=response.childNodes[0].childNodes[1].childNodes[1].innerHTML;
		//console.log(end_table);
		if(end_table!="end_syncing")
		{
			sync_server_to_local_ajax(end_table,end_offset,last_sync_time);
		}
		
		sklad.open(db_name,{version:2},function(err,database)
		{
			var tables=response.childNodes[0].childNodes[0].childNodes;
			for(var i=0;i<tables.length; i++)
			{
				tableName=tables[i].nodeName;
				if(tableName!="" && tableName!="#text")
				{	
					var num_rows=tables[i].childElementCount;
					for(var k=0;k<num_rows;k++)
					{
						var el=tables[i].childNodes[0].childElementCount;
						var row=new Object();
						for(var j=0;j<el;j++)
						{
							var nname=tables[i].childNodes[k].childNodes[j].nodeName;
							row[nname]=tables[i].childNodes[k].childNodes[j].innerHTML;
						}
						database.upsert(tableName,row,function(err,insertedkey)
						{
						});
						
						if(tableName==='activities')
						{
							if(row['type']==='delete')
							{
								var del_table=row['tablename'];
								var del_id=row['data_id'];
								database.delete(del_table,del_id,function(err)
								{
								});
							}
						}
					}			
				}
			}
		});
	});
}


/**
 * This function syncs up the local db to the server db
 * @param func
 */
function sync_local_to_server(func)
{
	var domain=get_domain();
	var username=get_username();
	var cr_access=get_session_var('cr');
	var up_access=get_session_var('up');
	var del_access=get_session_var('del');
	show_loader();
	console.log("syncing started");
	
	get_data_from_log_table(function(log_data)
	{
		get_last_sync_time(function(last_sync_time)
		{
			console.log(log_data);
			var log_data_array=log_data.split("<separator></separator>");
			log_data_array.forEach(function(log_data_chunk)
			{
				log_data_chunk="<activities>"+log_data_chunk+"</activities>";
				console.log(log_data_chunk);
				ajax_with_custom_func("./ajax/sync_upload.php","domain="+domain+"&username="+username+"&cr="+cr_access+"&up="+up_access+"&del="+del_access+"&data="+log_data_chunk+"&last_sync="+last_sync_time,function(e)
				{
					var response=e.responseXML;
					console.log(e.responseText);
					set_activities_to_synced(response);
				});
			});
			var sync_complete=setInterval(function(){
         	   console.log(number_active_ajax);
         	   if(number_active_ajax===0)
         	   {
         		   clearInterval(sync_complete);
         		   func();
         	   }
            },1000);		
		});
	});
};

/**
 * This function prepares an xml string from the unsynced data in activities log
 * @param func Function to be executed after successful access
 */
function get_data_from_log_table(func)
{
	var domain=get_domain();
	var db_name="re_local_"+domain;
	
	sklad.open(db_name,{version:2},function(err,database)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			database.get('activities',{
				index:'status',
				range:IDBKeyRange.only('unsynced')
			},function(err,records)
			{
				if(err)
				{
					console.log(err);
				}				
				var log_data="";
				var counter=0;
				for(var row in records)
				{
					if(counter===100)
					{
						log_data+="<separator></separator>";
						counter=0;
					}
					var row_data=records[row];
					log_data+="<row>";
					for(var field in row_data)
					{
						log_data+="<"+field+">";
							log_data+=row_data[field];
						log_data+="</"+field+">";
					}
					log_data+="</row>";
					
					counter+=1;
				}
				console.log(log_data);
				func(log_data);
			});	
		}
	});
}


/**
 * This function updates the status for the synced activity logs
 * @param response Ids of the synced logs
 * @param func Function to be executed on successful update
 */
function set_activities_to_synced(response)
{
	var domain=get_domain();
	var db_name="re_local_"+domain;
	
	sklad.open(db_name,{version:2},function(err,database)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			//console.log(response.childNodes[0]);
			var table='activities';
			var ids=response.childNodes[0].getElementsByTagName('id');
			for(var id=0; id<ids.length; id++)
			{
				//console.log(ids[id].innerHTML);
				database.get(table,{
					range:IDBKeyRange.only(ids[id].innerHTML)
				},function(err,records)
				{
					if(err)
					{
						console.log(err);
					}
					for(var row in records)
					{
						var row_data=records[row];
						row_data['status']='synced';
						row_data['data_xml']='';
						database.upsert(table,row_data,function(err,insertedkey)
						{
							if(err)
							{
								console.log(err);
							}
						});
					}
				});				
			}
		}
	});
}

/**
 * This function gets the last sync time from the user_prefernces table
 * @param func Function to be executed after successul access
 */
function get_last_sync_time(func)
{
	var domain=get_domain();
	var db_name="re_local_"+domain;
	
	sklad.open(db_name,{version:2},function(err,database)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{			
			database.get('user_preferences',{
				index:'name',
				range:IDBKeyRange.only('last_sync_time')
			},function(err,records)
			{
				var last_sync_time="";
				if(err)
				{
					console.log(err);
					last_sync_time="0";
				}
				else
				{
					for(var row in records)
					{
						var row_data=records[row];
						last_sync_time=row_data['value'];
					}
				}
				//console.log("this is the last sync time :"+last_sync_time);
				func(last_sync_time);	
			});	
		}
	});
}


/**
 * This function sets the new last_sync_time
 * @param func Function to be executed on successful update
 */
function update_last_sync_time(func)
{
	var domain=get_domain();
	var db_name="re_local_"+domain;
	
	sklad.open(db_name,{version:2},function(err,database)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			var time=get_my_time();
			
			var row_data={id:'700',name:'last_sync_time',value:time,type:'other',display_name:'Last Sync Time',status:'active'};
			//{value:row_data,key:row_data.id}
			database.upsert('user_preferences',row_data,function(err,insertedkey)
			{
				if(err)
				{
					console.log(err);
				}
			});	
			func();
		}
	});	
}

/**
 * This function sets the session variable to online and write it to db
 * @returns
 */
function set_session_online()
{
	var offline_data="<user_preferences>" +
		"<id></id>" +
		"<name>offline</name>" +
		"</user_preferences>";

	get_single_column_data(function(data_ids)
	{
		data_ids.forEach(function(data_id)
		{
			sessionStorage.setItem('offline','online');
			var data_xml="<user_preferences>" +
				"<id>"+data_id+"</id>" +
				"<name>offline</name>" +
				"<value>online</value>" +
				"<status>active</status>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</user_preferences>";	
			var activity_xml="<activity>" +
				"<data_id>"+data_id+"</data_id>" +
				"<tablename>user_preferences</tablename>" +
				"<link_to>home</link_to>" +
				"<title>Changed</title>" +
				"<notes>Set mode of operation to Online</notes>" +
				"<user_display>yes</user_display>" +
				"<updated_by>"+get_name()+"</updated_by>" +
				"</activity>";
			//server_update_row(data_xml,activity_xml);
			local_update_simple(data_xml,activity_xml);
			hide_menu_items();
			hide_loader();
		});
	},offline_data);
}

/**
 * This function sets the session variable to offline and write it to db
 * @returns
 */
function set_session_offline()
{
	var offline_data="<user_preferences>" +
			"<id></id>" +
			"<name>offline</name>" +
			"</user_preferences>";

	get_single_column_data(function(data_ids)
	{
		data_ids.forEach(function(data_id)
		{
			sessionStorage.setItem('offline','offline');
			var data_xml="<user_preferences>" +
				"<id>"+data_id+"</id>" +
				"<name>offline</name>" +
				"<value>offline</value>" +
				"<status>active</status>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</user_preferences>";	
			var activity_xml="<activity>" +
				"<data_id>"+data_id+"</data_id>" +
				"<tablename>user_preferences</tablename>" +
				"<link_to>home</link_to>" +
				"<title>Changed</title>" +
				"<notes>Set mode of operation to Offline</notes>" +
				"<user_display>yes</user_display>" +
				"<updated_by>"+get_name()+"</updated_by>" +
				"</activity>";
			//server_update_simple(data_xml);
			local_update_row(data_xml,activity_xml);
			hide_menu_items();
			hide_loader();
		});
	},offline_data);
}
