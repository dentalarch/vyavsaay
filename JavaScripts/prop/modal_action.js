/**
 * @modalNo 8
 * @modal Add new Offer
 * @param button
 */
function modal8_action()
{
	var form=document.getElementById('modal8_form');
		
	var offer_name=form.elements[1];
	var end_date=form.elements[2];
	var offer_type=form.elements[3];
	var product_name=form.elements[4];
	var batch=form.elements[5];
	var all_batch=form.elements[6];
	var service=form.elements[7];
	var criteria_type=form.elements[8];
	var criteria_amount=form.elements[9];
	var criteria_quantity=form.elements[10];
	var result_type=form.elements[11];
	var discount_percent=form.elements[12];
	var discount_amount=form.elements[13];
	var quantity_percent=form.elements[14];
	var quantity_amount=form.elements[15];
	var free_product_name=form.elements[16];
	var free_quantity=form.elements[17];
	var free_service_name=form.elements[18];
	
	var product_data="<product_master>" +
		"<name></name>" +
		"</product_master>";
	set_my_value_list(product_data,product_name);
	set_my_value_list(product_data,free_product_name);
	var service_data="<services>" +
		"<name></name>" +
		"</services>";
	set_my_value_list(service_data,service);
	set_my_value_list(service_data,free_service_name);
	
	$(all_batch).off('click');
	$(all_batch).on('click',function(event)
	{
		if(all_batch.checked)
		{
			batch.value='all';
			$(batch).attr('readonly','readonly');
		}
		else
		{
			batch.value='';
			$(batch).removeAttr('readonly');
		}
	});
	
	$(offer_type).off('blur');
	$(offer_type).on('blur',function(event)
	{
		$(product_name).parent().hide();
		$(batch).parent().hide();
		$(all_batch).parent().hide();
		$(service).parent().hide();
		$(criteria_type).parent().hide();
		$(criteria_amount).parent().hide();
		$(criteria_quantity).parent().hide();
		
		if(offer_type.value=='product')
		{
			$(product_name).off('blur');
			$(product_name).on('blur',function(event)
			{
				var batch_data="<product_instances>" +
						"<batch></batch>" +
						"<product_name exact='yes'>"+product_name.value+"</product_name>" +
						"</product_instances>";
				set_my_value_list(batch_data,batch);
			});
						
			$(product_name).parent().show();
			$(batch).parent().show();
			$(all_batch).parent().show();
			$(criteria_type).parent().show();
			$(product_name).focus();
		}
		else if(offer_type.value=='service')
		{			
			$(service).parent().show();
			$(criteria_type).parent().show();
			$(service).focus();
		}
		else if(offer_type.value=='bill')
		{
			criteria_type.value='min amount crossed';
			$(criteria_amount).parent().show();
			$(criteria_amount).focus();
		}
	});
	
	$(criteria_type).off('blur');
	$(criteria_type).on('blur',function(event)
	{
		$(criteria_amount).parent().hide();
		$(criteria_quantity).parent().hide();
		if(criteria_type.value=='min amount crossed')
		{
			$(criteria_amount).parent().show();
			$(criteria_amount).focus();
		}
		else if(criteria_type.value=='min quantity crossed')
		{
			$(criteria_quantity).parent().show();
			$(criteria_quantity).focus();
		}
	});
	
	$(result_type).off('blur');
	$(result_type).on('blur',function(event)
	{
		$(discount_percent).parent().hide();
		$(discount_amount).parent().hide();
		$(quantity_percent).parent().hide();
		$(quantity_amount).parent().hide();
		$(free_product_name).parent().hide();
		$(free_quantity).parent().hide();
		$(free_service_name).parent().hide();
		
		if(result_type.value=='discount')
		{
			$(discount_percent).parent().show();
			$(discount_amount).parent().show();
			$(discount_percent).focus();
		}
		else if(result_type.value=='quantity addition')
		{
			$(quantity_percent).parent().show();
			$(quantity_amount).parent().show();
			$(quantity_percent).focus();
		}
		else if(result_type.value=='product free')
		{
			$(free_product_name).parent().show();
			$(free_quantity).parent().show();
			$(free_product_name).focus();
		}
		else if(result_type.value=='service free')
		{
			$(free_service_name).parent().show();
			$(free_service_name).focus();
		}
	});
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form35'))
		{
			var offer_name_value=offer_name.value;
			var end_date_value=get_raw_time(end_date.value);
			var type_value=offer_type.value;
			var product_value=product_name.value;
			var batch_value=batch.value;
			var service_value=service.value;
			var criteria_type_value=criteria_type.value;
			var criteria_amount_value=criteria_amount.value;
			var criteria_quantity_value=criteria_quantity.value;
			var result_type_value=result_type.value;
			var discount_percent_value=discount_percent.value;
			var discount_amount_value=discount_amount.value;
			var quantity_percent_value=quantity_percent.value;
			var quantity_amount_value=quantity_amount.value;
			var free_product_name_value=free_product_name.value;
			var free_quantity_value=free_quantity.value;
			var free_service_name_value=free_service_name.value;
			var status_value='active';
			var data_id=get_new_key();
			var last_updated=get_my_time();
			
			var offer_detail_value="Get ";
			if(result_type_value=='discount')
			{
				if(discount_percent_value=="")
					offer_detail_value+="a discount of Rs: "+discount_amount_value;
				else
					offer_detail_value+="a discount of "+discount_percent_value+"%";
			}
			else if(result_type_value=='quantity addition')
			{
				if(quantity_percent_value=="")
					offer_detail_value+="additional "+quantity_amount_value+" free pieces";
				else
					offer_detail_value+="additional "+quantity_percent_value+"% free";
			}	
			else if(result_type_value=='free product')
			{
				offer_detail_value+=free_quantity_value+" pieces of "+free_product_name_value;
			}
			else if(result_type_value=='free service')
			{
				offer_detail_value+="free service "+free_service_name_value;
			}
			
			if(type_value=='bill')
			{
				offer_detail_value+=" on bill amount of more than Rs: "+criteria_amount_value;
			}
			else if(type_value=='product')
			{
				offer_detail_value+=" on purchase of ";
				if(criteria_type_value=="min amount crossed")
					offer_detail_value+="worth Rs: "+criteria_amount_value+" or more";
				else if(criteria_type_value=="min quantity crossed")
					offer_detail_value+=+criteria_quantity_value+" piece or more";
				offer_detail_value+=" of "+product_value;
			}	
			else if(type_value=='service')
			{
				offer_detail_value+=" on availing "+service_value+ " service ";
				if(criteria_type_value=="min amount crossed")
					offer_detail_value+="worth Rs: "+criteria_amount_value+" or more";
				else if(criteria_type_value=="min quantity crossed")
					offer_detail_value+=+criteria_quantity_value+" times or more";
			}
			
			var data_xml="<offers>" +
						"<id>"+data_id+"</id>" +
						"<offer_name unique='yes'>"+offer_name_value+"</offer_name>" +
						"<offer_type>"+type_value+"</offer_type>" +
						"<product_name>"+product_value+"</product_name>" +
						"<batch>"+batch_value+"</batch>" +
						"<service>"+service_value+"</service>" +
						"<criteria_type>"+criteria_type_value+"</criteria_type>" +
						"<criteria_amount>"+criteria_amount_value+"</criteria_amount>" +
						"<criteria_quantity>"+criteria_quantity_value+"</criteria_quantity>" +
						"<result_type>"+result_type_value+"</result_type>" +
						"<discount_percent>"+discount_percent_value+"</discount_percent>" +
						"<discount_amount>"+discount_amount_value+"</discount_amount>" +
						"<quantity_add_percent>"+quantity_percent_value+"</quantity_add_percent>" +
						"<quantity_add_amount>"+quantity_amount_value+"</quantity_add_amount>" +
						"<free_product_name>"+free_product_name_value+"</free_product_name>" +
						"<free_product_quantity>"+free_quantity_value+"</free_product_quantity>" +
						"<free_service_name>"+free_service_name_value+"</free_service_name>" +
						"<end_date>"+end_date_value+"</end_date>" +
						"<offer_detail>"+offer_detail_value+"</offer_detail>" +
						"<status>"+status_value+"</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</offers>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>offers</tablename>" +
						"<link_to>form35</link_to>" +
						"<title>Saved</title>" +
						"<notes>Offer "+offer_name_value+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal8").dialog("close");
	});
	
	set_static_value_list('offers','criteria_type',criteria_type);
	set_static_value_list('offers','result_type',result_type);
	set_static_value_list('offers','offer_type',offer_type);
	$(end_date).datepicker();
	
	$(product_name).parent().hide();
	$(batch).parent().hide();
	$(all_batch).parent().hide();
	$(service).parent().hide();
	$(criteria_type).parent().hide();
	$(criteria_amount).parent().hide();
	$(criteria_quantity).parent().hide();
	$(discount_percent).parent().hide();
	$(discount_amount).parent().hide();
	$(quantity_percent).parent().hide();
	$(quantity_amount).parent().hide();
	$(free_product_name).parent().hide();
	$(free_quantity).parent().hide();
	$(free_service_name).parent().hide();
	
	$("#modal8").dialog("open");
	
}

/**
 * @modalNo 9
 * @modal Add asset valuations
 * @param button
 */
function modal9_action(button)
{
	var form=document.getElementById('modal9_form');
	
	var form_id=$(button).attr('form');
	var father_form=document.getElementById(form_id);
	var fname=father_form.elements[0];
	var ftype=father_form.elements[1];
	var fdescription=father_form.elements[2];
	var fdate_inc=father_form.elements[6];
	var fownership_type=father_form.elements[7];
	var fownership_contract=father_form.elements[8];
	var fmake=father_form.elements[9];
	var fmaintained_by=father_form.elements[10];
	var fmaintenance_contract=father_form.elements[11];
	var fmaintenance_contact=father_form.elements[12];
	var fmaintenance_activities=father_form.elements[13];
	var finitial_value=father_form.elements[14];
	var fcurrent_value=father_form.elements[15];
	var fasset_location=father_form.elements[16];
	
	form.elements[1].value=fname.value;
	form.elements[2].value=ftype.value;
	form.elements[3].value=fdescription.value;
	form.elements[4].value=fdate_inc.value;
	form.elements[5].value=fmake.value;
	form.elements[6].value=fownership_type.value;
	form.elements[7].value=fownership_contract.value;
	form.elements[8].value=fmaintained_by.value;
	form.elements[9].value=fmaintenance_contract.value;
	form.elements[10].value=fmaintenance_contact.value;
	form.elements[11].value=fmaintenance_activities.value;
	form.elements[12].value=finitial_value.value;
	form.elements[13].value=fcurrent_value.value;
	form.elements[14].value=fasset_location.value;
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		fname.value=form.elements[1].value;
		ftype.value=form.elements[2].value;
		fdescription.value=form.elements[3].value;
		fdate_inc.value=form.elements[4].value;
		fmake.value=form.elements[5].value;
		fownership_type.value=form.elements[6].value;
		fownership_contract.value=form.elements[7].value;
		fmaintained_by.value=form.elements[8].value;
		fmaintenance_contract.value=form.elements[9].value;
		fmaintenance_contact.value=form.elements[10].value;
		fmaintenance_activities.value=form.elements[11].value;
		finitial_value.value=form.elements[12].value;
		fcurrent_value.value=form.elements[13].value;
		fasset_location.value=form.elements[14].value;		
	
		$("#modal9").dialog("close");
	});
	
	$("#modal9").dialog("open");
}

/**
 * @modalNo 10
 * @modal Add new asset
 * @param button
 */
function modal10_action()
{
	var form=document.getElementById('modal10_form');
	var fname=form.elements[1];
	var ftype=form.elements[2];
	var fdescription=form.elements[3];
	var fdate=form.elements[4];
	var fmake=form.elements[5];
	var fown_type=form.elements[6];
	var fown_contract=form.elements[7];
	var fmaintained_by=form.elements[8];
	var fmain_contract=form.elements[9];
	var fmain_contact=form.elements[10];
	var fmain_activities=form.elements[11];
	var finitial_value=form.elements[12];
	var fcurrent_value=form.elements[13];
	var fasset_location=form.elements[14];
	
	set_static_value_list('assets','type',ftype);
	
	$(fdate).datepicker();
	fdate.value=get_my_date();
	
	set_static_value_list('assets','ownership_type',fown_type);
	set_static_value_list('assets','maintained_by',fmaintained_by);
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		var name=fname.value;
		var type=ftype.value;
		var description=fdescription.value;
		var data_id=get_new_key();
		var date_inc=get_raw_time(fdate.value);
		var ownership_type=fown_type.value;
		var ownership_contract=fown_contract.value;
		var make=fmake.value;
		var maintained_by=fmaintained_by.value;
		var maintenance_contract=fmain_contract.value;
		var maintenance_contact=fmain_contact.value;
		var maintenance_activities=fmain_activities.value;
		var initial_value=finitial_value.value;
		var current_value=fcurrent_value.value;
		var asset_location=fasset_location.value;
		var last_updated=get_my_time();
		var data_xml="<assets>" +
					"<id>"+data_id+"</id>" +
					"<name unique='yes'>"+name+"</name>" +
					"<date_inc>"+date_inc+"</date_inc>" +
					"<type>"+type+"</type>" +
					"<description>"+description+"</description>" +
					"<ownership_type>"+ownership_type+"</ownership_type>" +
					"<ownership_contract>"+ownership_contract+"</ownership_contract>" +
					"<make>"+make+"</make>" +
					"<maintained_by>"+maintained_by+"</maintained_by>" +
					"<maintenance_contract>"+maintenance_contract+"</maintenance_contract>" +
					"<maintenance_contact>"+maintenance_contact+"</maintenance_contact>" +
					"<maintenance_activities>"+maintenance_activities+"</maintenance_activities>" +
					"<initial_value>"+initial_value+"</initial_value>" +
					"<current_value>"+current_value+"</current_value>" +
					"<asset_location>"+asset_location+"</asset_location>" +
					"<last_updated>"+last_updated+"</last_updated>" +
					"</assets>";
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>assets</tablename>" +
					"<link_to>form5</link_to>" +
					"<title>Updated</title>" +
					"<notes>Asset "+name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		if(is_online())
		{
			server_create_row(data_xml,activity_xml);
		}
		else
		{
			local_create_row(data_xml,activity_xml);
		}	
		$("#modal10").dialog("close");
	});
	
	$("#modal10").dialog("open");
}


/**
 * @modalNo 11
 * @modal Add new customer
 * @param button
 */
function modal11_action()
{
	var form=document.getElementById('modal11_form');
	
	var fname=form.elements[1];
	var fphone=form.elements[2];
	var femail=form.elements[3];
	var faddress=form.elements[4];
	var fpincode=form.elements[5];
	var fcity=form.elements[6];
	var fstate=form.elements[7];
	var fcountry=form.elements[8];
	var fnotes=form.elements[9];
		
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form30'))
		{
			var name=fname.value;
			var phone=fphone.value;
			var email=femail.value;
			var address=faddress.value;
			var pincode=fpincode.value;
			var city=fcity.value;
			var state=fstate.value;
			var country=fcountry.value;
			var notes=fnotes.value;
			var data_id=get_new_key();
			var address_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<customers>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<phone>"+phone+"</phone>" +
						"<email>"+email+"</email>" +
						"<notes>"+notes+"</notes>" +
						"<acc_name unique='yes'>"+name+" ("+phone+")</acc_name>" +
						"<status>active</status>" +
						"<address>"+address+"</address>" +
						"<pincode>"+pincode+"</pincode>" +
						"<city>"+city+"</city>" +
						"<state>"+state+"</state>" +
						"<country>"+country+"</country>" +
						"<address_status>pending analysis</address_status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</customers>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>customers</tablename>" +
						"<link_to>form30</link_to>" +
						"<title>Added</title>" +
						"<notes>New customer "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var account_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"<description>"+notes+"</description>" +
						"<acc_name unique='yes'>"+name+" ("+phone+")</acc_name>" +
						"<type>customer</type>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</accounts>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
				server_create_simple(account_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
				local_create_simple(account_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal11").dialog("close");
	});
	
	$("#modal11").dialog("open");
}


/**
 * @modalNo 12
 * @modal Add new account
 * @param button
 */
function modal12_action()
{
	var form=document.getElementById('modal12_form');
	
	var fname=form.elements[1];
	var fdescription=form.elements[2];
	var fdata_id=get_new_key();
		
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		var name=fname.value;
		var type='financial';
		var description=fdescription.value;
		var data_id=get_new_key();
		var last_updated=get_my_time();
		var data_xml="<accounts>" +
					"<id>"+data_id+"</id>" +
					"<acc_name unique='yes'>"+name+"</acc_name>" +
					"<type>"+type+"</type>" +
					"<description>"+description+"</description>" +
					"<last_updated>"+last_updated+"</last_updated>" +
					"</accounts>";
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>accounts</tablename>" +
					"<link_to>form71</link_to>" +
					"<title>Added</title>" +
					"<notes>New account "+name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		if(is_online())
		{
			server_create_row(data_xml,activity_xml);
		}
		else
		{
			local_create_row(data_xml,activity_xml);
		}	
		$("#modal12").dialog("close");
	});
	
	$("#modal12").dialog("open");
}

/**
 * @modalNo 13
 * @modal Add new supplier
 * @param button
 */
function modal13_action()
{
	var form=document.getElementById('modal13_form');
	
	var fname=form.elements[1];
	var fphone=form.elements[2];
	var femail=form.elements[3];
	var faddress=form.elements[4];
	var fpincode=form.elements[5];
	var fcity=form.elements[6];
	var fstate=form.elements[7];
	var fcountry=form.elements[8];
	var fnotes=form.elements[9];
		
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form40'))
		{
			var name=fname.value;
			var phone=fphone.value;
			var email=femail.value;
			var address=faddress.value;
			var pincode=fpincode.value;
			var city=fcity.value;
			var state=fstate.value;
			var country=fcountry.value;
			var notes=fnotes.value;
			var data_id=get_new_key();
			var address_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<suppliers>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<phone>"+phone+"</phone>" +
						"<email>"+email+"</email>" +
						"<notes>"+notes+"</notes>" +
						"<acc_name unique='yes'>"+name+" ("+phone+")</acc_name>" +
						"<address>"+address+"</address>" +
						"<pincode>"+pincode+"</pincode>" +
						"<city>"+city+"</city>" +
						"<state>"+state+"</state>" +
						"<country>"+country+"</country>" +
						"<address_status>pending analysis</address_status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</suppliers>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>suppliers</tablename>" +
						"<link_to>form40</link_to>" +
						"<title>Added</title>" +
						"<notes>Supplier "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var account_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"<description>"+notes+"</description>" +
						"<acc_name unique='yes'>"+name+" ("+phone+")</acc_name>" +
						"<type>supplier</type>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</accounts>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
				server_create_simple(account_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
				local_create_simple(account_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal13").dialog("close");
	});
	
	$("#modal13").dialog("open");
}


/**
 * @modalNo 14
 * @modal Add new product
 * @param button
 */
function modal14_action()
{
	var form=document.getElementById('modal14_form');
	
	var fname=form.elements[1];
	var fmake=form.elements[2];
	var fdescription=form.elements[3];
	var fpictureinfo=form.elements[4];
	var fpicture=form.elements[5];
	var fbarcode=form.elements[7];
	var auto_generate=form.elements[8];
	
	$(auto_generate).off('click');
	$(auto_generate).on('click',function(event)
	{
		if(auto_generate.checked)
		{
			fbarcode.value=get_my_time();
		}
		else
		{
			fbarcode.value="";
		}
	});
	
	var make_data="<product_master>" +
		"<make></make>" +
		"</product_master>";
	set_my_filter(make_data,fmake);
	
	fpicture.addEventListener('change',function(evt)
	{
		select_picture(evt,fpictureinfo,function(dataURL)
		{
			fpictureinfo.innerHTML="<div class='figure'><img src='"+dataURL+"'/></div>";			
		});
	},false);
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form39'))
		{
			var name=form.elements[1].value;
			var make=form.elements[2].value;
			var description=form.elements[3].value;
			var tax=form.elements[6].value;
			var data_id=get_new_key();
			var pic_id=get_new_key();
			var url=$(fpictureinfo).find('div').find('img').attr('src');
			var barcode=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<product_master>" +
						"<id>"+data_id+"</id>" +
						"<make>"+make+"</make>" +
						"<name>"+name+"</name>" +
						"<description>"+description+"</description>" +
						"<tax>"+tax+"</tax>" +
						"<bar_code unique='yes'>"+barcode+"</bar_code>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</product_master>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_master</tablename>" +
						"<link_to>form39</link_to>" +
						"<title>Added</title>" +
						"<notes>Product "+name+" to inventory</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	

			if(url!="")
			{
				var pic_xml="<documents>" +
							"<id>"+pic_id+"</id>" +
							"<url>"+url+"</url>" +
							"<doc_type>product_master</doc_type>" +
							"<target_id>"+data_id+"</target_id>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</documents>";
				if(is_online())
				{
					server_create_simple(pic_xml);
				}
				else
				{
					local_create_simple(pic_xml);
				}	
			}
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal14").dialog("close");
	});
	
	$("#modal14").dialog("open");
}


/**
 * @modalNo 15
 * @modal Add Feedback
 * @param button
 */
function modal15_action()
{
	var form=document.getElementById('modal15_form');
	
	var fprovider=form.elements[1];
	var fdetail=form.elements[2];
	var ftype=form.elements[3];
	var frating=form.elements[4];
	var fdate=form.elements[5];
	var fdata_id=get_new_key();
	
	var accounts_data="<accounts>" +
		"<acc_name></acc_name>" +
		"</accounts>";
	
	set_my_value_list(accounts_data,fprovider);
	set_static_value_list('feedback','type',ftype);
	set_static_value_list('feedback','rating',frating);
	$(fdate).datepicker();
	fdate.value=get_my_date();
		
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		var provider=fprovider.value;
		var detail=fdetail.value;
		var type=ftype.value;
		var rating=frating.value;
		var date=get_raw_time(fdate.value);
		var data_id=fdata_id;
		var last_updated=get_my_time();
		var table='feedback';
		var data_xml="<"+table+">" +
					"<id>"+data_id+"</id>" +
					"<provider>"+provider+"</provider>" +
					"<type>"+type+"</type>" +
					"<detail>"+detail+"</detail>" +
					"<rating>"+rating+"</rating>" +
					"<date>"+date+"</date>" +
					"<last_updated>"+last_updated+"</last_updated>" +
					"</"+table+">";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>"+table+"</tablename>" +
					"<link_to>report42</link_to>" +
					"<title>Added</title>" +
					"<notes>Feedback from "+provider+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		if(is_online())
		{
			server_create_row(data_xml,activity_xml);
		}
		else
		{
			local_create_row(data_xml,activity_xml);
		}	
		
		$("#modal15").dialog("close");
	});
	
	$("#modal15").dialog("open");
}


/**
 * @modalNo 16
 * @modal Add new staff
 * @param button
 */
function modal16_action()
{
	var form=document.getElementById('modal16_form');
	
	var fname=form.elements[1];
	var fphone=form.elements[2];
	var femail=form.elements[3];
	var faddress=form.elements[4];
	var fpincode=form.elements[5];
	var fcity=form.elements[6];
	var fstate=form.elements[7];
	var fcountry=form.elements[8];
	var fdata_id=get_new_key();

	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form8'))
		{
			var name=fname.value;
			var phone=fphone.value;
			var email=femail.value;
			var address=faddress.value;
			var pincode=fpincode.value;
			var city=fcity.value;
			var state=fstate.value;
			var country=fcountry.value;
			var data_id=get_new_key();
			var address_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<staff>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<phone>"+phone+"</phone>" +
						"<email>"+email+"</email>" +
						"<acc_name unique='yes'>"+name+" ("+phone+")</acc_name>" +
						"<address>"+address+"</address>" +
						"<pincode>"+pincode+"</pincode>" +
						"<city>"+city+"</city>" +
						"<state>"+state+"</state>" +
						"<country>"+country+"</country>" +
						"<address_status>pending analysis</address_status>" +
						"<status>active</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</staff>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>staff</tablename>" +
						"<link_to>form8</link_to>" +
						"<title>Added</title>" +
						"<notes>Staff "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var account_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"<description>account for staff "+name+"</description>" +
						"<acc_name unique='yes'>"+name+" ("+phone+")</acc_name>" +
						"<type>staff</type>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</accounts>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
				server_create_simple(account_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
				local_create_simple(account_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal16").dialog("close");
	});
	
	$("#modal16").dialog("open");
}


/**
 * @modalNo 17
 * @modal Update staff details
 * @param button
 */
function modal17_action(button)
{
	var form=document.getElementById('modal17_form');
	
	var form_id=$(button).attr('form');
	var father_form=document.getElementById(form_id);
	var faddress_detail=father_form.elements[3];
	var fdata_id=father_form.elements[5];
	
	var faddress=father_form.elements[8];
	var fpincode=father_form.elements[9];
	var fcity=father_form.elements[10];
	var fstate=father_form.elements[11];
	var fcountry=father_form.elements[12];
	var faddress_status=father_form.elements[13];
	
	form.elements[1].value=faddress.value;
	form.elements[2].value=fpincode.value;
	form.elements[3].value=fcity.value;
	form.elements[4].value=fstate.value;
	form.elements[5].value=fcountry.value;
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		var address=form.elements[1].value;
		var pincode=form.elements[2].value;
		var city=form.elements[3].value;
		var state=form.elements[4].value;
		var country=form.elements[5].value;
		
		faddress_detail.value=address+", "+pincode+", "+city+", "+state+", "+country;
		faddress.value=address;
		fpincode.value=pincode;
		fcity.value=city;
		fstate.value=state;
		fcountry.value=country;
		faddress_status.value='pending analysis';
		
		$("#modal17").dialog("close");
		$(father_form).submit();
	});
	
	$("#modal17").dialog("open");
}

/**
 * @modalNo 18
 * @modal Add new task type
 * @param button
 */
function modal18_action()
{
	console.log('opening modal18');
	var form=document.getElementById('modal18_form');
	
	var fname=form.elements[1];
	var fdescription=form.elements[2];
	var fest_hours=form.elements[3];
	
	fname.value='';
	fdescription.value='';
	fest_hours.value='';
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		console.log("submitting form");
		event.preventDefault();
		var name=form.elements[1].value;
		var description=form.elements[2].value;
		var est_hours=form.elements[3].value;
		var data_id=get_new_key();
		var last_updated=get_my_time();
		var data_xml="<task_type>" +
					"<id>"+data_id+"</id>" +
					"<name unique='yes'>"+name+"</name>" +
					"<description>"+description+"</description>" +
					"<est_hours>"+est_hours+"</est_hours>" +
					"<last_updated>"+last_updated+"</last_updated>" +
					"</task_type>";
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>task_type</tablename>" +
					"<link_to>form79</link_to>" +
					"<title>Added</title>" +
					"<notes>Task type "+name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		if(is_online())
		{
			server_create_row(data_xml,activity_xml);
		}
		else
		{
			local_create_row(data_xml,activity_xml);
		}
		
		$("#modal18").dialog("close");
		//$("#modal18").dialog("destroy");
	});
	
	$("#modal18").dialog("open");
}

/**
 * @modalNo 19
 * @modal Copy product
 * @param button
 */
function modal19_action(button)
{
	var form=document.getElementById('modal19_form');
	
	var fname=form.elements[1];
	var fmake=form.elements[2];
	var fdescription=form.elements[3];
	var fpictureinfo=form.elements[4];
	var fpicture=form.elements[5];
	var ftax=form.elements[6];
	
	var fbarcode=form.elements[7];
	var auto_generate=form.elements[8];
	
	$(auto_generate).off('click');
	$(auto_generate).on('click',function(event)
	{
		if(auto_generate.checked)
		{
			fbarcode.value=get_my_time();
		}
		else
		{
			fbarcode.value="";
		}
	});		

	/////---------initializing all the values-------///////////
	var form_id=$(button).attr('form');
	var copy_form=document.getElementById(form_id);
	var copy_name=copy_form.elements[0].value;
	
	var copy_master_data="<product_master>" +
			"<id></id>" +
			"<name exact='yes'>"+copy_name+"</name>" +
			"<description></description>" +
			"<make></make>" +
			"<tax></tax>" +
			"</product_master>";
	
	fetch_requested_data('form39',copy_master_data,function(results)
	{
		results.forEach(function(result)
		{
			fmake.value=result.make;
			ftax.value=result.tax;
			fdescription.value=result.description;
			
			var picture_column="<documents>" +
					"<id></id>" +
					"<url></url>" +
					"<doc_type>product_master</doc_type>" +
					"<target_id exact='yes'>"+result.id+"</target_id>" +
					"</documents>";
			fetch_requested_data('form39',picture_column,function(pic_results)
			{
				var pic_results_url="";
				for (var j in pic_results)
				{
					pic_results_url=pic_results[j].url;
				}
				updated_url=pic_results_url.replace(/ /g,"+");
				fpictureinfo.innerHTML="<div class='figure'><img src='"+updated_url+"'/></div>";
			});
		});
	});
		
	////---------initialization complete------///////////////
	
	
	////-----setting editable dropdowns etc----------/////////////
	var make_data="<product_master>" +
		"<make></make>" +
		"</product_master>";
	set_my_filter(make_data,fmake);
	
	fpicture.addEventListener('change',function(evt)
	{
		select_picture(evt,fpictureinfo,function(dataURL)
		{
			fpictureinfo.innerHTML="<div class='figure'><img src='"+dataURL+"'/></div>";			
		});
	},false);
	
	///////-------------set editable finished-------/////////////

	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form39'))
		{
			var name=form.elements[1].value;
			var make=form.elements[2].value;
			var description=form.elements[3].value;
			var tax=form.elements[6].value;
			var data_id=get_new_key();
			var pic_id=get_new_key();
			var url=$(fpictureinfo).find('div').find('img').attr('src');
			var barcode=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<product_master>" +
						"<id>"+data_id+"</id>" +
						"<make>"+make+"</make>" +
						"<name>"+name+"</name>" +
						"<description>"+description+"</description>" +
						"<tax>"+tax+"</tax>" +
						"<bar_code unique='yes'>"+barcode+"</bar_code>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</product_master>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_master</tablename>" +
						"<link_to>form39</link_to>" +
						"<title>Added</title>" +
						"<notes>Product "+name+" to inventory</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	

			if(url!="")
			{
				var pic_xml="<documents>" +
							"<id>"+pic_id+"</id>" +
							"<url>"+url+"</url>" +
							"<doc_type>product_master</doc_type>" +
							"<target_id>"+data_id+"</target_id>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</documents>";
				if(is_online())
				{
					server_create_simple(pic_xml,pic_activity_xml);
				}
				else
				{
					local_create_simple(pic_xml,pic_activity_xml);
				}	
			}

			var copy_attributes_data="<attributes>" +
					"<name exact='yes'>"+copy_name+"</name>" +
					"<type>product</type>" +
					"<attribute></attribute>" +
					"<value></value>" +
					"</attributes>";
			fetch_requested_data('form39',copy_attributes_data,function(attributes)
			{
				attributes.forEach(function(attribute)
				{
					if(attribute!="")
					{
						var data_xml="<attributes>" +
								"<id>"+get_new_key()+"</id>" +
								"<name>"+name+"</name>" +
								"<type>product</type>" +
								"<attribute>"+attribute.attribute+"</attribute>" +
								"<value>"+attribute.value+"</value>" +
								"<last_updated>"+last_updated+"</last_updated>" +
								"</attributes>";
						if(is_online())
						{
							server_create_simple(data_xml);
						}
						else
						{
							local_create_simple(data_xml);
						}
					}
				});
			});
			
			var copy_requisite_data="<pre_requisites>" +
					"<name exact='yes'>"+copy_name+"</name>" +
					"<type>product</type>" +
					"<requisite_type></requisite_type>" +
					"<requisite_name></requisite_name>" +
					"<quantity></quantity>" +
					"</pre_requisites>";
			fetch_requested_data('',copy_requisite_data,function(requisites)
			{
				requisites.forEach(function(requisite)
				{
					if(requisite!="")
					{
						var data_xml="<pre_requisites>" +
								"<id>"+get_new_key()+"</id>" +
								"<name>"+name+"</name>" +
								"<type>product</type>" +
								"<requisite_type>"+requisite.requisite_type+"</requisite_type>" +
								"<requisite_name>"+requisite.requisite_name+"</requisite_name>" +
								"<quantity>"+requisite.quantity+"</quantity>" +
								"<last_updated>"+last_updated+"</last_updated>" +
								"</pre_requisites>";
						if(is_online())
						{
							server_create_simple(data_xml);
						}
						else
						{
							local_create_simple(data_xml);
						}
					}
				});
			});
			
			var copy_cross_data="<cross_sells>" +
					"<name exact='yes'>"+copy_name+"</name>" +
					"<type>product</type>" +
					"<cross_type></cross_type>" +
					"<cross_name></cross_name>" +
					"</cross_sells>";
			fetch_requested_data('',copy_cross_data,function(cross_sells)
			{
				cross_sells.forEach(function(cross_sell)
				{
					if(cross_sell!="")
					{
						var data_xml="<cross_sells>" +
							"<id>"+get_new_key()+"</id>" +
							"<name>"+name+"</name>" +
							"<type>product</type>" +
							"<cross_type>"+cross_sell.cross_type+"</cross_type>" +
							"<cross_name>"+cross_sell.cross_type+"</cross_name>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</cross_sells>";
				
						if(is_online())
						{
							server_create_simple(data_xml);
						}
						else
						{
							local_create_simple(data_xml);
						}
					}
				});
			});	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal19").dialog("close");
	});
	
	$("#modal19").dialog("open");
}

/**
 * @modalNo 20
 * @modal Add new service
 * @param button
 */
function modal20_action()
{
	var form=document.getElementById('modal20_form');
	
	var fname=form.elements[1];
	var fdescription=form.elements[2];
			
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form57') || is_update_access('form57'))
		{
			var name=form.elements[1].value;					
			var description=form.elements[2].value;
			var tax=form.elements[3].value;
			var price=form.elements[4].value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<services>" +
						"<id>"+data_id+"</id>" +
						"<name unique='yes'>"+name+"</name>" +
						"<price>"+price+"</price>" +
						"<description>"+description+"</description>" +
						"<tax>"+tax+"</tax>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</services>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>services</tablename>" +
						"<link_to>form57</link_to>" +
						"<title>Added</title>" +
						"<notes>New service "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal20").dialog("close");
	});
	
	$("#modal20").dialog("open");
}


/**
 * @modalNo 21
 * @modal Copy service
 * @param button
 */
function modal21_action()
{
	var form=document.getElementById('modal21_form');
	
	var fname=form.elements[1];
	var fdescription=form.elements[2];
	
	//////////----initializing form----------////////////
	
	var form_id=$(button).attr('form');
	var copy_form=document.getElementById(form_id);
	var copy_name=copy_form.elements[0].value;
	
	var copy_master_data="<services>" +
			"<id></id>" +
			"<name exact='yes'>"+copy_name+"</name>" +
			"<description></description>" +
			"<price></price>" +
			"<taxable></taxable>" +
			"<tax></tax>" +
			"</services>";
	fetch_requested_data('form57',copy_master_data,function(results)
	{
		results.forEach(function(result)
		{
			form.elements[2].value=result.description;
			form.elements[3].value=result.tax;
			form.elements[4].value=result.price;
		});
	});
	
	////////------end of initialization-----------///////////
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form57'))
		{
			var name=form.elements[1].value;
			var description=form.elements[2].value;
			var tax=form.elements[3].value;
			var price=form.elements[4].value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<services>" +
						"<id>"+data_id+"</id>" +
						"<name unique='yes'>"+name+"</name>" +
						"<price>"+price+"</price>" +
						"<description>"+description+"</description>" +
						"<taxable>"+taxable+"</taxable>" +
						"<tax>"+tax+"</tax>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</services>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>services</tablename>" +
						"<link_to>form57</link_to>" +
						"<title>Added</title>" +
						"<notes>New service "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	

			var copy_attributes_data="<attributes>" +
					"<name exact='yes'>"+copy_name+"</name>" +
					"<type>service</type>" +
					"<attribute></attribute>" +
					"<value></value>" +
					"</attributes>";
			fetch_requested_data('',copy_attributes_data,function(attributes)
			{
				attributes.forEach(function(attribute)
				{
					if(attribute!="")
					{
						var data_xml="<attributes>" +
								"<id>"+get_new_key()+"</id>" +
								"<name>"+name+"</name>" +
								"<type>service</type>" +
								"<attribute>"+attribute.attribute+"</attribute>" +
								"<value>"+attribute.value+"</value>" +
								"<last_updated>"+last_updated+"</last_updated>" +
								"</attributes>";
						if(is_online())
						{
							server_create_simple(data_xml);
						}
						else
						{
							local_create_simple(data_xml);
						}
					}
				});
			});

			var copy_requisite_data="<pre_requisites>" +
					"<name exact='yes'>"+copy_name+"</name>" +
					"<type>service</type>" +
					"<requisite_type></requisite_type>" +
					"<requisite_name></requisite_name>" +
					"<quantity></quantity>" +
					"</pre_requisites>";
			fetch_requested_data('',copy_requisite_data,function(requisites)
			{
				requisites.forEach(function(requisite)
				{
					if(requisite!="")
					{
						var data_xml="<pre_requisites>" +
								"<id>"+get_new_key()+"</id>" +
								"<name>"+name+"</name>" +
								"<type>service</type>" +
								"<requisite_type>"+requisite.requisite_type+"</requisite_type>" +
								"<requisite_name>"+requisite.requisite_name+"</requisite_name>" +
								"<quantity>"+requisite.quantity+"</quantity>" +
								"<last_updated>"+last_updated+"</last_updated>" +
								"</pre_requisites>";
						if(is_online())
						{
							server_create_simple(data_xml);
						}
						else
						{
							local_create_simple(data_xml);
						}
					}
				});
			});
			
			var copy_cross_data="<cross_sells>" +
					"<name exact='yes'>"+copy_name+"</name>" +
					"<type>service</type>" +
					"<cross_type></cross_type>" +
					"<cross_name></cross_name>" +
					"</cross_sells>";
			fetch_requested_data('',copy_cross_data,function(cross_sells)
			{
				cross_sells.forEach(function(cross_sell)
				{
					if(cross_sell!="")
					{
						var data_xml="<cross_sells>" +
							"<id>"+get_new_key()+"</id>" +
							"<name>"+name+"</name>" +
							"<type>service</type>" +
							"<cross_type>"+cross_sell.cross_type+"</cross_type>" +
							"<cross_name>"+cross_sell.cross_type+"</cross_name>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</cross_sells>";
				
						if(is_online())
						{
							server_create_simple(data_xml);
						}
						else
						{
							local_create_simple(data_xml);
						}
					}
				});
			});			
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal21").dialog("close");
	});
	$("#modal21").dialog("open");
}

/**
 * @modalNo 22
 * @modal Add new batch
 */
function modal22_action()
{
	var form=document.getElementById('modal22_form');
	
	var fname=form.elements[1];
	var fbatch=form.elements[2];
	var fmanufacture=form.elements[3];
	var fexpiry=form.elements[4];
	var fmrp=form.elements[5];
	var fcost=form.elements[6];
	var fsale_price=form.elements[7];
	
	$(fexpiry).datepicker();
	$(fmanufacture).datepicker();
	
	var name_data="<product_master>" +
			"<name></name>" +
			"</product_master>";
	set_my_value_list(name_data,fname);
	
	$(fname).off('blur');
	$(fname).on('blur',function(event)
	{
		var batch_data="<product_instances>" +
				"<batch></batch>" +
				"<product_name exact='yes'>"+fname.value+"</product_name>" +
				"</product_instances>";
		get_single_column_data(function(batches)
		{
			$(fbatch).off('blur');
			$(fbatch).on('blur',function(event)
			{
				var found = $.inArray($(this).val(), batches) > -1;
				if(found)
				{
		            $(this).val('');
		        }
			});
		},batch_data);
	});		
	
	////adding sale price fields for all billing types///////
	var billing_type_data="<bill_types>" +
			"<name></name>" +
			"<status>active</status>" +
			"</bill_types>";
	get_single_column_data(function(bill_types)
	{
		var billing_label=document.getElementById('modal22_billings');
		$(billing_label).html("");
		bill_types.forEach(function(bill_type)
		{
			var bill_label=document.createElement('label');
			bill_label.innerHTML=bill_type+" sale price (Rs.) <input type='number' id='"+bill_type+"' step='any' required>";
			billing_label.appendChild(bill_label);
			var line_break=document.createElement('br');
			billing_label.appendChild(line_break);
		});
	},billing_type_data);
	////////////////////////////////////////////////
	
	////auto setting sale price fields/////////
	$(fsale_price).off('blur');
	$(fsale_price).on('blur',function(event)
	{
		var sale_price=fsale_price.value;
		$("#modal22_billings").find('input').each(function()
		{
			if($(this).val()=="")
			{
				$(this).val(sale_price);
			}
		});
	});		
	////////////////////
	
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form1'))
		{
			var name=fname.value;
			var batch=fbatch.value;
			var manu_date=get_raw_time(fmanufacture.value);
			var expiry=get_raw_time(fexpiry.value);
			var cost=fcost.value;
			var mrp=fmrp.value;
			var sale_price=fsale_price.value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<product_instances>" +
						"<id>"+data_id+"</id>" +
						"<product_name>"+name+"</product_name>" +
						"<batch>"+batch+"</batch>" +
						"<expiry>"+expiry+"</expiry>" +
						"<manufacture_date>"+manu_date+"</manufacture_date>" +
						"<mrp>"+mrp+"</mrp>" +
						"<cost_price>"+cost+"</cost_price>" +
						"<sale_price>"+sale_price+"</sale_price>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</product_instances>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_instances</tablename>" +
						"<link_to>form1</link_to>" +
						"<title>Added</title>" +
						"<notes>New batch "+batch+" for product "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}
			
			$("#modal22_billings").find('input').each(function()
			{
				var id=get_new_key()+""+Math.floor(Math.random()*1000);
				var price=$(this).val();
				var bill_type=$(this).attr('id');
				var sale_price_xml="<sale_prices>" +
						"<id>"+id+"</id>" +
						"<product_name>"+name+"</product_name>" +
						"<batch>"+batch+"</batch>" +
						"<sale_price>"+price+"</sale_price>" +
						"<pi_id>"+data_id+"</pi_id>" +
						"<billing_type>"+bill_type+"</billing_type>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</sale_prices>";
				if(is_online())
				{
					server_create_simple(sale_price_xml);
				}
				else
				{
					local_create_simple(sale_price_xml);
				}
			});
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal22").dialog("close");
	});
	
	$("#modal22").dialog("open");
}


/**
 * @modal Data import
 * @param t_func function to generate import template
 * @param i_func function to import the generated data_array
 */
function modal23_action(t_func,i_func)
{
	var form=document.getElementById('modal23_form');
	
	var template_button=form.elements[1];
	var new_records=form.elements[2];
	var update_records=form.elements[3];
	var select_file=form.elements[4];
	var selected_file=form.elements[5];
	var import_button=form.elements[6];

	$(template_button).off("click");
	$(template_button).on("click",function(event)
	{
		t_func();
	});
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		show_progress();
		var file=select_file.files[0];
        var fileType = /csv/gi;

        selected_file.value = "Uploading!! Please don't refresh";
    	var reader = new FileReader();
        reader.onload = function(e)
        {
        	progress_value=5;
        	var content=reader.result;
        	var data_array=csv_string_to_obj_array(content);

        	progress_value=10;
           
           //console.log(data_array);
        	if(new_records.checked)
        	{
        		i_func(data_array,'create_new');
        	}
        	else if(update_records.checked)
        	{
        		i_func(data_array,'update_records');
        	}
           
        	progress_value=15;
        	
        	var ajax_complete=setInterval(function()
        	{
        		if(number_active_ajax===0)
        		{
        			progress_value=15+(1-(localdb_open_requests/(2*data_array.length)))*85;
        		}
        		else if(localdb_open_requests===0)
        		{
        			progress_value=15+(1-((500*number_active_ajax)/(2*data_array.length)))*85;
        		}
        		
        		if(number_active_ajax===0 && localdb_open_requests===0)
        		{
        			hide_progress();
        			selected_file.value = "Upload complete";
        			$(select_file).val('');
        			$("#modal23").dialog("close");
        			clearInterval(ajax_complete);
        		}
        	},1000);
        }
        reader.readAsText(file);    
    });
	
	$("#modal23").dialog("open");
}

/**
 * @modal Update customer address
 * @param button
 */
function modal24_action(button)
{
	var form=document.getElementById('modal24_form');
	
	var form_id=$(button).attr('form');
	var father_form=document.getElementById(form_id);
	var faddress_detail=father_form.elements[3];
	var faddress=father_form.elements[8];
	var fpincode=father_form.elements[9];
	var fcity=father_form.elements[10];
	var fstate=father_form.elements[11];
	var fcountry=father_form.elements[12];
	var faddress_status=father_form.elements[13];
		
	form.elements[1].value=faddress.value;
	form.elements[2].value=fpincode.value;
	form.elements[3].value=fcity.value;
	form.elements[4].value=fstate.value;
	form.elements[5].value=fcountry.value;
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		var address=form.elements[1].value;
		var pincode=form.elements[2].value;
		var city=form.elements[3].value;
		var state=form.elements[4].value;
		var country=form.elements[5].value;
		
		var address_detail=address+", "+pincode+", "+city+", "+state+", "+country;
		faddress_detail.value=address_detail;
		faddress.value=address;
		fpincode.value=pincode;
		fcity.value=city;
		fstate.value=state;
		fcountry.value=country;
		faddress_status.value="pending analysis";
	
		$("#modal24").dialog("close");
		$(father_form).submit();
	});
	
	$("#modal24").dialog("open");
}


/**
 * @modal Update supplier address
 * @param button
 */
function modal25_action(button)
{
	var form=document.getElementById('modal25_form');
	
	var form_id=$(button).attr('form');
	var father_form=document.getElementById(form_id);
	var faddress_detail=father_form.elements[3];
	var faddress=father_form.elements[8];
	var fpincode=father_form.elements[9];
	var fcity=father_form.elements[10];
	var fstate=father_form.elements[11];
	var fcountry=father_form.elements[12];
	var faddress_status=father_form.elements[13];
	
	form.elements[1].value=faddress.value;
	form.elements[2].value=fpincode.value;
	form.elements[3].value=fcity.value;
	form.elements[4].value=fstate.value;
	form.elements[5].value=fcountry.value;
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		var address=form.elements[1].value;
		var pincode=form.elements[2].value;
		var city=form.elements[3].value;
		var state=form.elements[4].value;
		var country=form.elements[5].value;
		
		var address_detail=address+", "+pincode+", "+city+", "+state+", "+country;
		faddress_detail.value=address_detail;
		faddress.value=address;
		fpincode.value=pincode;
		fcity.value=city;
		fstate.value=state;
		fcountry.value=country;
		faddress_status.value="pending analysis";
	
		$("#modal25").dialog("close");
		$(father_form).submit();
	});
	
	$("#modal25").dialog("open");
}

/**
 * @modalNo 26
 * @modal Payment Details
 */
function modal26_action(payment_id)
{
	var form=document.getElementById('modal26_form');
	
	var fcustomer=form.elements[1];
	var ftotal=form.elements[2];
	var fpaid=form.elements[3];
	var fdue_date=form.elements[4];
	var fmode=form.elements[5];
	var fstatus=form.elements[6];
	
	$(fdue_date).datepicker();
	
	var customer_data="<accounts>" +
			"<acc_name></acc_name>" +
			"</accounts>";
	set_my_value_list(customer_data,fcustomer);
	set_static_value_list('payments','status',fstatus);
	set_static_value_list('payments','mode',fmode);
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form42'))
		{
			var customer=fcustomer.value;
			var total=ftotal.value;
			var paid=fpaid.value;
			var due_date=get_raw_time(fdue_date.value);
			var mode=fmode.value;
			var status=fstatus.value;
			var last_updated=get_my_time();
			var data_xml="<payments>" +
						"<id>"+payment_id+"</id>" +
						"<acc_name>"+customer+"</acc_name>" +
						"<type>received</type>" +
						"<total_amount>"+total+"</total_amount>" +
						"<paid_amount>"+paid+"</paid_amount>" +
						"<status>"+status+"</status>" +
						"<due_date>"+due_date+"</due_date>" +
						"<mode>"+mode+"</mode>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</payments>";
			var activity_xml="<activity>" +
						"<data_id>"+payment_id+"</data_id>" +
						"<tablename>payments</tablename>" +
						"<link_to>form11</link_to>" +
						"<title>Updated</title>" +
						"<notes>Payment of "+paid+" from "+customer+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			
			if(is_online())
			{
				server_update_row(data_xml,activity_xml);
			}
			else
			{
				local_update_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal26").dialog("close");
	});
	
	var payments_data="<payments>" +
			"<id>"+payment_id+"</id>" +
			"<acc_name></acc_name>" +
			"<type>received</type>" +
			"<total_amount></total_amount>" +
			"<paid_amount></paid_amount>" +
			"<status></status>" +
			"<due_date></due_date>" +
			"<mode></mode>" +
			"</payments>";
	fetch_requested_data('',payments_data,function(payments)
	{
		for(var k in payments)
		{
			fcustomer.value=payments[k].acc_name;
			ftotal.value=payments[k].total_amount;
			fpaid.value=payments[k].paid_amount;
			fdue_date.value=get_my_past_date(payments[k].due_date);
			fmode.value=payments[k].mode;
			fstatus.value=payments[k].status;
			break;
		}
		$("#modal26").dialog("open");
	});		
	
}


/**
 * @modalNo 27
 * @modal Order product
 * @param button
 */
function modal27_action(product_name)
{
	var form=document.getElementById('modal27_form');
	
	var fname=form.elements[1];
	var fmake=form.elements[2];
	var fprice=form.elements[3];
	var fquantity=form.elements[4];
	var fsupplier=form.elements[5];
	var data_id=get_new_key();
	
	fmake.value="";
	fprice.value="";
	fquantity.value="";
	fsupplier.value="";
	fname.value=product_name;
	
	var supplier_data="<suppliers>" +
		"<acc_name></acc_name>" +
		"</suppliers>";
	set_my_value_list(supplier_data,fsupplier);

	var make_data="<product_master>" +
		"<make></make>" +
		"<name exact='yes'>"+product_name+"</name>" +
		"</product_master>";
	set_my_value(make_data,fmake);
	
	var price_data="<product_instances>" +
		"<cost_price></cost_price>" +
		"<product_name exact='yes'>"+product_name+"</product_name>" +
		"</product_instances>";
	set_my_value(price_data,fprice);

	/// logic for last supplier
	var last_purchase_data="<purchase_order_items>" +
			"<id></id>" +
			"<quantity></quantity>" +
			"<order_id></order_id>" +
			"<product_name exact='yes'>"+product_name+"</product_name>" +
			"<last_updated sort='desc'></last_updated>" +
			"</purchase_order_items>";
	fetch_requested_data('',last_purchase_data,function(last_purchases)
	{
		var order_id="";
		for(var k in last_purchases)
		{
			order_id=last_purchases[k].order_id;
			
			var last_order_data="<purchase_orders>" +
					"<supplier></supplier>" +
					"<id exact='yes'>"+order_id+"</id>" +
					"<status></status>" +
					"</purchase_orders>";
			fetch_requested_data('',last_order_data,function(last_orders)
			{
				for(var j in last_orders)
				{
					if(last_orders[j].status=='draft')
					{
						fquantity.value=last_purchases[k].quantity;
						data_id=last_purchases[k].id;
					}
					fsupplier.value=last_orders[j].supplier;
					break;
				}
			});
			break;
		}
	});
	
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form43'))
		{
			var name=fname.value;
			var make=fmake.value;
			var price=fprice.value;
			var quantity=fquantity.value;
			var supplier=fsupplier.value;
			var last_updated=get_my_time();
		
			var purchase_order_data="<purchase_orders>" +
					"<id></id>" +
					"<supplier exact='yes'>"+supplier+"</supplier>" +
					"<status>draft</status>" +
					"</purchase_orders>";
			fetch_requested_data('',purchase_order_data,function(purchase_orders)
			{
				var order_id="";
				for(var i in purchase_orders)
				{
					order_id=purchase_orders[i].id;
					break;
				}
				if(purchase_orders.length===0)
				{
					order_id=get_new_key();
					var data_xml="<purchase_orders>" +
								"<id>"+order_id+"</id>" +
								"<order_date>"+get_my_time()+"</order_date>" +
								"<supplier>"+supplier+"</supplier>" +
								"<status>draft</status>" +
								"<last_updated>"+last_updated+"</last_updated>" +
								"</purchase_orders>";
					var activity_xml="<activity>" +
								"<data_id>"+order_id+"</data_id>" +
								"<tablename>purchase_orders</tablename>" +
								"<link_to>form43</link_to>" +
								"<title>Created</title>" +
								"<notes>Purchase order for supplier "+supplier+" for purchase</notes>" +
								"<updated_by>"+get_name()+"</updated_by>" +
								"</activity>";
					if(is_online())
					{
						server_create_row(data_xml,activity_xml);
					}
					else
					{
						local_create_row(data_xml,activity_xml);
					}	
				}
				var data_xml="<purchase_order_items>" +
							"<id>"+data_id+"</id>" +
							"<product_name>"+name+"</product_name>" +
							"<make>"+make+"</make>" +
							"<price>"+price+"</price>" +
							"<quantity>"+quantity+"</quantity>" +
							"<order_id>"+order_id+"</order_id>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</purchase_order_items>";
				var activity_xml="<activity>" +
							"<data_id>"+data_id+"</data_id>" +
							"<tablename>purchase_order_items</tablename>" +
							"<link_to>form43</link_to>" +
							"<title>Ordered</title>" +
							"<notes>Product "+name+" for purchase</notes>" +
							"<updated_by>"+get_name()+"</updated_by>" +
							"</activity>";
				if(is_online())
				{
					server_create_row(data_xml,activity_xml);
					server_update_row(data_xml,activity_xml);
				}
				else
				{
					local_create_row(data_xml,activity_xml);
					local_update_row(data_xml,activity_xml);
				}	
			});
			
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal27").dialog("close");
	});
	
	$("#modal27").dialog("open");
}

/**
 * @modalNo 28
 * @modal Payment Details
 */
function modal28_action(payment_id)
{
	var form=document.getElementById('modal28_form');
	
	var fsupplier=form.elements[1];
	var ftotal=form.elements[2];
	var fpaid=form.elements[3];
	var fdue_date=form.elements[4];
	var fmode=form.elements[5];
	var fstatus=form.elements[6];
	
	$(fdue_date).datepicker();
	
	set_static_value_list('payments','status',fstatus);
	set_static_value_list('payments','mode',fmode);
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form53'))
		{
			var supplier=fsupplier.value;
			var total=ftotal.value;
			var paid=fpaid.value;
			var due_date=get_raw_time(fdue_date.value);
			var mode=fmode.value;
			var status=fstatus.value;
			var last_updated=get_my_time();
			var data_xml="<payments>" +
						"<id>"+payment_id+"</id>" +
						"<acc_name>"+supplier+"</acc_name>" +
						"<type>paid</type>" +
						"<total_amount>"+total+"</total_amount>" +
						"<paid_amount>"+paid+"</paid_amount>" +
						"<status>"+status+"</status>" +
						"<due_date>"+due_date+"</due_date>" +
						"<mode>"+mode+"</mode>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</payments>";
			var activity_xml="<activity>" +
						"<data_id>"+payment_id+"</data_id>" +
						"<tablename>payments</tablename>" +
						"<link_to>form11</link_to>" +
						"<title>Updated</title>" +
						"<notes>Payment of "+paid+" to "+supplier+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			
			if(is_online())
			{
				server_update_row(data_xml,activity_xml);
			}
			else
			{
				local_update_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal28").dialog("close");
	});
	
	var payments_data="<payments>" +
			"<id exact='yes'>"+payment_id+"</id>" +
			"<acc_name></acc_name>" +
			"<type>paid</type>" +
			"<total_amount></total_amount>" +
			"<paid_amount></paid_amount>" +
			"<status></status>" +
			"<due_date></due_date>" +
			"<mode></mode>" +
			"</payments>";
	fetch_requested_data('',payments_data,function(payments)
	{
		for(var k in payments)
		{
			fsupplier.value=payments[k].acc_name;
			ftotal.value=payments[k].total_amount;
			fpaid.value=payments[k].paid_amount;
			fdue_date.value=get_my_past_date(payments[k].due_date);
			fmode.value=payments[k].mode;
			fstatus.value=payments[k].status;
			break;
		}
		$("#modal28").dialog("open");
	});		
	
}

/**
 * @modal Update secondary payment details
 * @param button
 */
function modal29_action(button)
{
	var form=document.getElementById('modal29_form');
	
	var form_id=$(button).attr('form');
	var father_form=document.getElementById(form_id);
	var fdetail=father_form.elements[5];
	var fmode=father_form.elements[7];
	var fdate=father_form.elements[8];
	var fdue_date=father_form.elements[9];
	var fbill_id=father_form.elements[10];
	var fnotes=father_form.elements[11];
		
	form.elements[1].value=fbill_id.value;
	var date=form.elements[2];
	date.value=get_my_past_date(fdate.value);
	var mode=form.elements[3];
	mode.value=fmode.value;
	var due_date=form.elements[4];
	due_date.value=get_my_past_date(fdue_date.value);
	form.elements[5].value=fnotes.value;
	
	$(date).datepicker();
	$(due_date).datepicker();
	set_static_value_list('payments','mode',mode);
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		var detail_string="Bill Id: " +form.elements[1].value+
				"\nMode of payment: " +form.elements[3].value+
				"\nDue Date: "+form.elements[4].value+
				"\nDate closed: "+form.elements[2].value+
				"\nClosing Notes: "+form.elements[5].value;

		fdetail.value=detail_string;
		fmode.value=form.elements[3].value;
		fdue_date.value=get_raw_time(form.elements[4].value);
		fbill_id.value=form.elements[1].value;
		fnotes.value=form.elements[5].value;
	
		$("#modal29").dialog("close");
		$(father_form).submit();
	});
	
	$("#modal29").dialog("open");
}

/**
 * @modal Add user
 * @modalNo 30
 */
function modal30_action()
{
	var form=document.getElementById("modal30_form");
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form51'))
		{	
			var login_id=form.elements[1].value;
			var name=form.elements[2].value;
			var password=form.elements[3].value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var salt='$2a$10$'+get_domain()+'1234567891234567891234';
			var salt_22=salt.substring(0, 29);
			
			var bcrypt = new bCrypt();
			bcrypt.hashpw(password, salt_22, function(newhash)
			{
				var data_xml="<user_profiles>" +
							"<id>"+data_id+"</id>" +
							"<username unique='yes'>"+login_id+"</username>" +
							"<name>"+name+"</name>" +
							"<password>"+newhash+"</password>" +
							"<status>active</status>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</user_profiles>";
				var activity_xml="<activity>" +
							"<data_id>"+data_id+"</data_id>" +
							"<tablename>user_profiles</tablename>" +
							"<link_to>form51</link_to>" +
							"<title>Added</title>" +
							"<notes>User account for "+login_id+"</notes>" +
							"<updated_by>"+get_name()+"</updated_by>" +
							"</activity>";
				if(is_online())
				{
					server_create_row(data_xml,activity_xml);
				}
				else
				{
					local_create_row(data_xml,activity_xml);
				}
				$("#modal30").dialog("close");
				
			}, function(){});
		}
		else
		{
			$("#modal2").dialog("open");
		}
	});
	
	$("#modal30").dialog("open");
}


/**
 * @modal Delete user
 * @modalNo 31
 */
function modal31_action()
{
	var form=document.getElementById("modal31_form");
	var flogin_id=form.elements[1];
	
	var login_data="<user_profiles>" +
			"<username></username>" +
			"</user_profiles>";
	set_my_value_list(login_data,flogin_id);
	
	flogin_id.value="";
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_delete_access('form51'))
		{	
			var login_id=form.elements[1].value;
			var last_updated=get_my_time();
			var data_xml="<user_profiles>" +
						"<username>"+login_id+"</username>" +
						"</user_profiles>";
			var other_delete="<access_control>" +
						"<username>"+login_id+"</username>" +
						"</access_control>";
			if(is_online())
			{
				server_delete_simple(data_xml);
				server_delete_simple(other_delete);
			}
			else
			{
				local_delete_simple(data_xml);
				local_delete_simple(other_delete);
			}
			$("#modal31").dialog("close");
		}
		else
		{
			$("#modal2").dialog("open");
		}
	});
	$("#modal31").dialog("open");
}

/**
 * @modal Add Task
 * @modalNo 32
 */
function modal32_action(date_initiated)
{
	var form=document.getElementById("modal32_form");
	var task_filter=form.elements[1];
	var staff_filter=form.elements[2];
	var due_filter=form.elements[3];
	var status_filter=form.elements[4];
	var hours_filter=form.elements[5];
	
	var task_data="<task_type>" +
			"<name></name>" +
			"</task_type>";
	set_my_value_list(task_data,task_filter);
	var staff_data="<staff>" +
			"<acc_name></acc_name>" +
			"</staff>";
	set_my_value_list(staff_data,staff_filter);
	$(due_filter).datetimepicker();
	set_static_value_list('task_instances','status',status_filter);
	
	$(task_filter).off('blur');
	$(task_filter).on('blur',function(event)
	{
		var hours_data="<task_type>" +
				"<est_hours></est_hours>" +
				"<name exact='yes'>"+task_filter.value+"</name>" +
				"</task_type>";
		set_my_value(hours_data,hours_filter);
	});
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form14'))
		{
			var name=form.elements[1].value;
			var assignee=form.elements[2].value;
			var t_due=get_raw_time(form.elements[3].value);
			var t_initiated=get_raw_time(date_initiated);
			var status=form.elements[4].value;
			var hours=form.elements[5].value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<assignee>"+assignee+"</assignee>" +
						"<t_initiated>"+t_initiated+"</t_initiated>" +
						"<t_due>"+t_due+"</t_due>" +
						"<status>"+status+"</status>" +
						"<task_hours>"+hours+"</task_hours>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</task_instances>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form14</link_to>" +
						"<title>Added</title>" +
						"<notes>Task "+name+" assigned to "+assignee+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal32").dialog("close");
	});
	
	$("#modal32").dialog("open");
}

/**
 * @modal Update Task
 * @modalNo 33
 */
function modal33_action(id)
{
	var form=document.getElementById("modal33_form");
	var task_filter=form.elements[1];
	var staff_filter=form.elements[2];
	var due_filter=form.elements[3];
	var status_filter=form.elements[4];
	
	var staff_data="<staff>" +
			"<acc_name></acc_name>" +
			"</staff>";
	set_my_value_list(staff_data,staff_filter);
	$(due_filter).datetimepicker();
	set_static_value_list('task_instances','status',status_filter);
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form14'))
		{
			var name=form.elements[1].value;
			var assignee=form.elements[2].value;
			var t_due=get_raw_time(form.elements[3].value);
			var status=form.elements[4].value;
			var data_id=id;
			var last_updated=get_my_time();
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<assignee>"+assignee+"</assignee>" +
						"<t_due>"+t_due+"</t_due>" +
						"<status>"+status+"</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</task_instances>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form14</link_to>" +
						"<title>Updated</title>" +
						"<notes>Task "+name+" assigned to "+assignee+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_update_row(data_xml,activity_xml);
			}
			else
			{
				local_update_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal33").dialog("close");		
	});
	
	var tasks_data="<task_instances>" +
			"<id>"+id+"</id>" +
			"<name></name>" +
			"<description></description>" +
			"<assignee></assignee>" +
			"<t_due></t_due>" +
			"<t_initiated></t_initiated>" +
			"<task_hours></task_hours>" +
			"<status></status>" +
			"</task_instances>";
	fetch_requested_data('form14',tasks_data,function(results)
	{
		for(var i in results)
		{
			task_filter.value=results[i].name;
			staff_filter.value=results[i].assignee;
			due_filter.value=get_my_datetime(results[i].t_due);
			status_filter.value=results[i].status;
			
			break;
		}
		$("#modal33").dialog("open");
	});
}

/**
 * @modal Whatsapp contact
 * @modalNo 34
 */
function modal34_action()
{
	var form=document.getElementById("modal34_form");
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		var name=form.elements[1].value;
		var contact=form.elements[2].value;
		var post_data="name="+name+"&contact="+contact;
		
		ajax_with_custom_func("./ajax/whatsapp.php",post_data,function(e)
		{
			console.log(e.responseText);
			$("#modal34").dialog("close");
		});		
	});
	$("#modal34").dialog("open");
}

/**
 * @modal Add Store Area
 * @modalNo 35
 */
function modal35_action()
{
	var form=document.getElementById("modal35_form");
	var area_type_filter=form.elements[2];
	var loc_type_filter=form.elements[6];
	
	set_static_value_list('store_areas','area_type',area_type_filter);
	set_static_value_list('store_areas','loc_type',loc_type_filter);
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form83'))
		{
			var name=form.elements[1].value;
			var area_type=form.elements[2].value;
			var length=form.elements[3].value;
			var width=form.elements[4].value;
			var height=form.elements[5].value;
			var loc_type=form.elements[6].value;
			var locy=form.elements[7].value;
			var locx=form.elements[8].value;
			var locz=form.elements[9].value;
			var faceEast="no";
			if(form.elements[10].checked)
				faceEast='yes';
			var faceWest="no";
			if(form.elements[11].checked)
				faceWest='yes';
			var faceSouth="no";
			if(form.elements[12].checked)
				faceSouth='yes';
			var faceNorth="no";
			if(form.elements[13].checked)
				faceNorth='yes';
			var storey=form.elements[14].value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<store_areas>" +
						"<id>"+data_id+"</id>" +
						"<name unique='yes'>"+name+"</name>" +
						"<area_type>"+area_type+"</area_type>" +
						"<length>"+length+"</length>" +
						"<width>"+width+"</width>" +
						"<height>"+height+"</height>" +
						"<loc_type>"+loc_type+"</loc_type>" +
						"<locx>"+locx+"</locx>" +
						"<locy>"+locy+"</locy>" +
						"<locz>"+locz+"</locz>" +
						"<faceEast>"+faceEast+"</faceEast>" +
						"<faceWest>"+faceWest+"</faceWest>" +
						"<faceNorth>"+faceNorth+"</faceNorth>" +
						"<faceSouth>"+faceSouth+"</faceSouth>" +
						"<storey>"+storey+"</storey>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</store_areas>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>store_areas</tablename>" +
						"<link_to>form83</link_to>" +
						"<title>Added</title>" +
						"<notes>Store area "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal35").dialog("close");		
	});
	
	$("#modal35").dialog("open");
}

/**
 * @modal Add Appointment
 * @modalNo 36
 */
function modal36_action(schedule_date)
{
	var form=document.getElementById("modal36_form");
	var customer_filter=form.elements[1];
	var staff_filter=form.elements[2];
	var schedule_filter=form.elements[3];
	var hours_filter=form.elements[4];
	var status_filter=form.elements[6];
	
	var customer_data="<customers>" +
			"<acc_name></acc_name>" +
			"</customers>";
	set_my_value_list(customer_data,customer_filter);
	
	var staff_data="<staff>" +
			"<acc_name></acc_name>" +
			"</staff>";
	set_my_value_list(staff_data,staff_filter);
	
	$(schedule_filter).datetimepicker();
	schedule_filter.value=schedule_date;
	set_static_value_list('appointments','status',status_filter);
		
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form89'))
		{
			var name=form.elements[1].value;
			var assignee=form.elements[2].value;
			var schedule=get_raw_time(form.elements[3].value);
			var hours=form.elements[4].value;
			var notes=form.elements[5].value;
			var status=form.elements[6].value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<appointments>" +
						"<id>"+data_id+"</id>" +
						"<customer>"+name+"</customer>" +
						"<assignee>"+assignee+"</assignee>" +
						"<schedule>"+schedule+"</schedule>" +
						"<status>"+status+"</status>" +
						"<hours>"+hours+"</hours>" +
						"<notes>"+notes+"</notes>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</appointments>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>appointments</tablename>" +
						"<link_to>form89</link_to>" +
						"<title>Added</title>" +
						"<notes>Appointment with "+name+" assigned to "+assignee+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal36").dialog("close");
	});
	
	$("#modal36").dialog("open");
}

/**
 * @modal Update Appointment
 * @modalNo 37
 */
function modal37_action(id)
{
	var form=document.getElementById("modal37_form");
	var customer_filter=form.elements[1];
	var staff_filter=form.elements[2];
	var notes_filter=form.elements[3];
	var status_filter=form.elements[4];
	
	var customer_data="<customers>" +
		"<acc_name></acc_name>" +
		"</customers>";
	set_my_value_list(customer_data,customer_filter);

	var staff_data="<staff>" +
			"<acc_name></acc_name>" +
			"</staff>";
	set_my_value_list(staff_data,staff_filter);
	set_static_value_list('appointments','status',status_filter);
	
	
	var apps_data="<appointments>" +
			"<id>"+id+"</id>" +
			"<customer></customer>" +
			"<assignee></assignee>" +
			"<notes></notes>" +
			"<status></status>" +
			"</appointments>";
	fetch_requested_data('form89',apps_data,function(results)
	{
		for(var i in results)
		{
			customer_filter.value=results[i].customer;
			staff_filter.value=results[i].assignee;
			notes_filter.value=results[i].notes;
			status_filter.value=results[i].status;
			
			break;
		}
		$("#modal37").dialog("open");
	});
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form89'))
		{
			var name=form.elements[1].value;
			var assignee=form.elements[2].value;
			var notes=form.elements[3].value;
			var status=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<appointments>" +
						"<id>"+id+"</id>" +
						"<customer>"+name+"</customer>" +
						"<assignee>"+assignee+"</assignee>" +
						"<notes>"+notes+"</notes>" +
						"<status>"+status+"</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</appointments>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>appointments</tablename>" +
						"<link_to>form89</link_to>" +
						"<title>Updated</title>" +
						"<notes>Appointment with "+name+" assigned to "+assignee+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_update_row(data_xml,activity_xml);
			}
			else
			{
				local_update_row(data_xml,activity_xml);
			}	
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal37").dialog("close");		
	});
}

/**
 * @modalNo 38
 * @modal Update sale price
 */
function modal38_action(father_id)
{
	var father_form=document.getElementById("form1_"+father_id);
	var form=document.getElementById('modal38_form');	
	var fsale_price=form.elements[1];
	var billing_label=document.getElementById('modal38_billings');
	$(billing_label).html("");
		
	fsale_price.value=father_form.elements[3].value;
	////adding sale price fields for all billing types///////
	var billing_type_data="<sale_prices>" +
			"<id></id>" +
			"<sale_price></sale_price>" +
			"<billing_type></billing_type>" +
			"<pi_id exact='yes'>"+father_id+"</pi_id>" +
			"</sale_prices>";
	fetch_requested_data('',billing_type_data,function(sale_prices)
	{
		sale_prices.forEach(function(sale_price)
		{
			var bill_label=document.createElement('label');
			bill_label.innerHTML=sale_price.billing_type+" sale price (Rs.) <input type='number' id='"+sale_price.id+"' value='"+sale_price.sale_price+"' step='any' required>";
			billing_label.appendChild(bill_label);
			var line_break=document.createElement('br');
			billing_label.appendChild(line_break);
		});
	});
	////////////////////////////////////////////////
	
	////auto setting sale price fields/////////
	$(fsale_price).off('blur');
	$(fsale_price).on('blur',function(event)
	{
		var sale_price=fsale_price.value;
		$("#modal38_billings").find('input').each(function()
		{
			if($(this).val()=="")
			{
				$(this).val(sale_price);
			}
		});
	});		
	////////////////////
	
	
	$(form).off("submit");
	$(form).on("submit",function(event)
	{
		event.preventDefault();
		if(is_create_access('form1'))
		{
			var sale_price=fsale_price.value;
			var last_updated=get_my_time();
			var data_xml="<product_instances>" +
						"<id>"+father_id+"</id>" +
						"<sale_price>"+sale_price+"</sale_price>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</product_instances>";
			if(is_online())
			{
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
			
			$("#modal38_billings").find('input').each(function()
			{
				var price=$(this).val();
				var id=$(this).attr('id');
				var sale_price_xml="<sale_prices>" +
						"<id>"+id+"</id>" +
						"<sale_price>"+price+"</sale_price>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</sale_prices>";
				if(is_online())
				{
					server_update_simple(sale_price_xml);
				}
				else
				{
					local_update_simple(sale_price_xml);
				}
			});
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal38").dialog("close");
	});
	
	$("#modal38").dialog("open");
}

/**
 * @modal Add Loan
 * @modalNo 39
 */
function modal39_action(schedule_date)
{
	var form=document.getElementById("modal39_form");
	var type_filter=form.elements[1];
	var account_filter=form.elements[2];
	var amount_filter=form.elements[3];
	var date_filter=form.elements[4];
	var repayment_filter=form.elements[5];
	var rate_filter=form.elements[6];
	var iperiod_filter=form.elements[7];
	var itype_filter=form.elements[8];
	var emi_filter=form.elements[9];
	var emi_period_filter=form.elements[10];
	var num_emi_filter=form.elements[11];
	
	var account_data="<accounts>" +
			"<acc_name></acc_name>" +
			"</accounts>";
	set_my_value_list(account_data,account_filter);
	set_static_value_list('loans','type',type_filter);
	set_static_value_list('loans','repayment_method',repayment_filter);
	set_static_value_list('loans','interest_type',itype_filter);

	$(rate_filter).parent().hide();
	$(iperiod_filter).parent().hide();
	$(itype_filter).parent().hide();
	$(emi_filter).parent().hide();
	$(emi_period_filter).parent().hide();
	$(num_emi_filter).parent().hide();

	$(repayment_filter).off('blur');
	$(repayment_filter).on('blur',function(event)
	{
		if(repayment_filter.value=='instalments')
		{
			$(emi_filter).parent().show();
			$(emi_period_filter).parent().show();
			$(num_emi_filter).parent().show();
			$(rate_filter).parent().hide();
			$(iperiod_filter).parent().hide();
			$(itype_filter).parent().hide();
		}
		else
		{
			$(rate_filter).parent().show();
			$(iperiod_filter).parent().show();
			$(itype_filter).parent().show();
			$(emi_filter).parent().hide();
			$(emi_period_filter).parent().hide();
			$(num_emi_filter).parent().hide();
		}
	});
	
	$(date_filter).datepicker();
	date_filter.value=get_my_date();
		
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form93'))
		{
			var type=form.elements[1].value;
			var account=form.elements[2].value;
			var amount=form.elements[3].value;
			var date=get_raw_time(form.elements[4].value);
			var repayment=form.elements[5].value;
			var rate=form.elements[6].value;
			var period=form.elements[7].value;
			var itype=form.elements[8].value;
			var next_date=date+(parseFloat(period)*86400000);
			var emi=form.elements[9].value;
			var emi_period=form.elements[10].value;
			var num_emi=form.elements[11].value;
			var next_emi_date=date+(parseFloat(emi_period)*86400000);
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var adjective="to";
			var receiver=account;
			var giver="loan";
			var ptype='paid';
			var due_time=get_debit_period();
			if(type=='taken')
			{
				adjective="from";
				giver=account;
				receiver="loan";
				ptype='received';
			}
			var data_xml="<loans>" +
						"<id>"+data_id+"</id>" +
						"<type>"+type+"</type>" +
						"<account>"+account+"</account>" +
						"<loan_amount>"+amount+"</loan_amount>" +
						"<date_initiated>"+date+"</date_initiated>" +
						"<repayment_method>"+repayment+"</repayment_method>" +
						"<interest_paid>0</interest_paid>" +
						"<interest_rate>"+rate+"</interest_rate>" +
						"<interest_period>"+period+"</interest_period>" +
						"<next_interest_date>"+next_date+"</next_interest_date>" +
						"<interest_type>"+itype+"</interest_type>" +
						"<emi>"+emi+"</emi>" +
						"<emi_period>"+emi_period+"</emi_period>" +
						"<pending_emi>"+num_emi+"</pending_emi>" +
						"<next_emi_date>"+next_emi_date+"</next_emi_date>" +
						"<status>open</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</loans>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>loans</tablename>" +
						"<link_to>form93</link_to>" +
						"<title>Added</title>" +
						"<notes>Loan of amount Rs. "+amount+" "+type+" "+adjective+" "+account+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var payment_id=get_new_key()+""+Math.floor(Math.random()*1000);
			var transaction2_xml="<transactions>" +
						"<id>"+payment_id+"</id>" +
						"<trans_date>"+get_my_time()+"</trans_date>" +
						"<amount>"+amount+"</amount>" +
						"<receiver>"+receiver+"</receiver>" +
						"<giver>"+giver+"</giver>" +
						"<tax>0</tax>" +
						"<last_updated>"+get_my_time()+"</last_updated>" +
						"</transactions>";
			var payment_xml="<payments>" +
						"<id>"+payment_id+"</id>" +
						"<acc_name>"+account+"</acc_name>" +
						"<type>"+ptype+"</type>" +
						"<total_amount>"+amount+"</total_amount>" +
						"<paid_amount>"+amount+"</paid_amount>" +
						"<status>closed</status>" +
						"<date>"+get_my_time()+"</date>" +
						"<due_date>"+get_my_time()+"</due_date>" +
						"<mode></mode>" +
						"<transaction_id>"+payment_id+"</transaction_id>" +
						"<bill_id>"+data_id+"</bill_id>" +
						"<last_updated>"+get_my_time()+"</last_updated>" +
						"</payments>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
				server_create_simple(transaction2_xml);
				server_create_simple_func(payment_xml,function()
				{
					console.log(payment_id);
					if(type=='taken')
						modal26_action(payment_id);
					else
						modal28_action(payment_id);
				});
			}
			else
			{
				local_create_row(data_xml,activity_xml);
				local_create_simple(transaction2_xml);
				local_create_simple_func(payment_xml,function()
				{
					if(type=='taken')
						modal26_action(payment_id);
					else
						modal28_action(payment_id);
				});
			}
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal39").dialog("close");
	});
	
	$("#modal39").dialog("open");
}


/**
 * @modal Discard Item
 * @modalNo 40
 */
function modal40_action(product,batch)
{
	var form=document.getElementById("modal40_form");
	var item_filter=form.elements[1];
	var batch_filter=form.elements[2];
	var quantity_filter=form.elements[3];
	
	item_filter.value=product;
	batch_filter.value=batch;
	
	var item_data="<product_master>" +
			"<name></name>" +
			"</product_master>";
	set_my_value_list(item_data,item_filter);
	
	$(item_filter).off('blur');
	$(item_filter).on('blur',function(event)
	{
		var batch_data="<product_instances>" +
			"<batch></batch>" +
			"<product_name exact='yes'>"+item_filter.value+"</product_name>" +
			"</product_instances>";
		set_my_value_list(batch_data,batch_filter);
	});
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		if(is_create_access('form94'))
		{
			var item=form.elements[1].value;
			var batch=form.elements[2].value;
			var quantity=form.elements[3].value;
			var data_id=get_new_key();
			var last_updated=get_my_time();
			var data_xml="<discarded>" +
						"<id>"+data_id+"</id>" +
						"<product_name>"+item+"</product_name>" +
						"<batch>"+batch+"</batch>" +
						"<quantity>"+quantity+"</quantity>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</discarded>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>discarded</tablename>" +
						"<link_to>form94</link_to>" +
						"<title>Added</title>" +
						"<notes>Batch number "+batch+" of product "+name+" to discarded list</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_create_row(data_xml,activity_xml);
			}
			else
			{
				local_create_row(data_xml,activity_xml);
			}
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal40").dialog("close");
	});
	
	$("#modal40").dialog("open");
}

/**
 * @modal Close Payments
 * @modalNo 41
 */
function modal41_action(button)
{
	var form_id=$(button).attr('form');
	var father_form=document.getElementById(form_id);
	
	var form=document.getElementById("modal41_form");
	
	var account_name=father_form.elements[1].value;
	var balance_display=father_form.elements[3].value;
	var balance=father_form.elements[8].value;
	
	form.elements[1].value=account_name;
	form.elements[2].value=balance_display;
	form.elements[3].setAttribute('max',balance);
	
	$(form).off('submit');
	$(form).on('submit',function(event)
	{
		event.preventDefault();
		
		var counter_payment=parseFloat(form.elements[3].value);
		console.log(counter_payment);
		var user_notes=form.elements[4].value;
		
		if(is_create_access('form11'))
		{
			var accounts_data="<payments>" +
					"<id></id>" +
					"<acc_name exact='yes'>"+account_name+"</acc_name>" +
					"<type></type>" +
					"<date sort='asc'></date>" +
					"<total_amount></total_amount>" +
					"<paid_amount></paid_amount>" +
					"<notes></notes>" +
					"<status>pending</status>" +
					"</payments>";
			
			fetch_requested_data('',accounts_data,function(accounts)
			{
				console.log(accounts);
				var total_received=0;
				var total_paid=0;
				for(var i=0;i<accounts.length;i++)
				{
					if(accounts[i].type=='paid')
					{
						total_paid=parseFloat(accounts[i].total_amount)-parseFloat(accounts[i].paid_amount);
					}
					else
					{
						total_received=parseFloat(accounts[i].total_amount)-parseFloat(accounts[i].paid_amount);
					}
				}
				
				if(total_received<total_paid)
				{
					total_received+=counter_payment;
				}
				else
				{
					total_paid+=counter_payment;
				}

				accounts.forEach(function(account)
				{
					if(total_received<total_paid)
					{
						if(account.type=='received')
						{
							var notes=account.notes+"\nClosed by balancing against other payables";
							var received_xml="<payments>" +
								"<id>"+account.id+"</id>" +
								"<paid_amount>"+account.total_amount+"</paid_amount>" +
								"<status>closed</status>" +
								"<notes>"+notes+"</notes>" +
								"<last_updated>"+get_my_time()+"</last_updated>" +
								"</payments>";
							if(is_online())
							{
								server_update_simple(received_xml);
							}
							else
							{
								local_update_simple(received_xml);
							}
						}
						else
						{
							var pending_amount=parseFloat(account.total_amount)-parseFloat(account.paid_amount);
							if(pending_amount<=total_received)
							{
								var notes=account.notes+"\n"+user_notes;
								var paid_xml="<payments>" +
									"<id>"+account.id+"</id>" +
									"<paid_amount>"+account.total_amount+"</paid_amount>" +
									"<status>closed</status>" +
									"<notes>"+notes+"</notes>" +
									"<last_updated>"+get_my_time()+"</last_updated>" +
									"</payments>";
								if(is_online())
								{
									server_update_simple(paid_xml);
								}
								else
								{
									local_update_simple(paid_xml);
								}
		
								total_received-=pending_amount;
								total_paid-=pending_amount;
							}
							else
							{
								var paid_amount=parseFloat(account.paid_amount)+total_received;
								//console.log(paid_amount);
								var notes=account.notes+"\n Rs."+total_received+" balanced against other receivables and "+user_notes;
								var paid_xml="<payments>" +
									"<id>"+account.id+"</id>" +
									"<paid_amount>"+paid_amount+"</paid_amount>" +
									"<status>pending</status>" +
									"<notes>"+notes+"</notes>" +
									"<last_updated>"+get_my_time()+"</last_updated>" +
									"</payments>";
								if(is_online())
								{
									server_update_simple(paid_xml);
								}
								else
								{
									local_update_simple(paid_xml);
								}
		
								total_received=0;
								total_paid=0;
							}
						}
					}
					else
					{
						if(account.type=='paid')
						{
							var notes=account.notes+"\nClosed by balancing other receivables";
							var paid_xml="<payments>" +
								"<id>"+account.id+"</id>" +
								"<paid_amount>"+account.total_amount+"</paid_amount>" +
								"<status>closed</status>" +
								"<notes>"+notes+"</notes>" +
								"<last_updated>"+get_my_time()+"</last_updated>" +
								"</payments>";
							if(is_online())
							{
								server_update_simple(paid_xml);
							}
							else
							{
								local_update_simple(paid_xml);
							}
						}
						else
						{
							var pending_amount=parseFloat(account.total_amount)-parseFloat(account.paid_amount);
							
							if(pending_amount<=total_paid)
							{
								var notes=account.notes+"\n"+user_notes;
								var received_xml="<payments>" +
									"<id>"+account.id+"</id>" +
									"<paid_amount>"+account.total_amount+"</paid_amount>" +
									"<status>closed</status>" +
									"<notes>"+notes+"</notes>" +
									"<last_updated>"+get_my_time()+"</last_updated>" +
									"</payments>";
								if(is_online())
								{
									server_update_simple(received_xml);
								}
								else
								{
									local_update_simple(received_xml);
								}
								
								total_received-=pending_amount;
								total_paid-=pending_amount;
							}
							else
							{
								var paid_amount=parseFloat(account.paid_amount)+total_paid;
								var notes=account.notes+"\n Rs."+total_paid+" balanced against other payables "+user_notes;
								var received_xml="<payments>" +
									"<id>"+account.id+"</id>" +
									"<paid_amount>"+paid_amount+"</paid_amount>" +
									"<status>pending</status>" +
									"<notes>"+notes+"</notes>" +
									"<last_updated>"+get_my_time()+"</last_updated>" +
									"</payments>";
								if(is_online())
								{
									server_update_simple(received_xml);
								}
								else
								{
									local_update_simple(received_xml);
								}
								total_received=0;
								total_paid=0;
							}
						}
					}
				});
			});
		}
		else
		{
			$("#modal2").dialog("open");
		}
		$("#modal41").dialog("close");
	});
	
	$("#modal41").dialog("open");
}


/**
 * @modal Sending Mails
 * @modalNo 50
 */
function modal50_action()
{
	show_loader();
	var form=document.getElementById("form78_master");
	var pamphlet_name=form.elements[1].value;
	var pamphlet_id=form.elements[2].value;
	//console.log(pamphlet_id);
	var pamphlet_items_data="<pamphlet_items>" +
				"<item_name></item_name>" +
				"<offer></offer>" +
				"<pamphlet_id>"+pamphlet_id+"</pamphlet_id>" +
				"</pamphlet_items>";
			
	fetch_requested_data('',pamphlet_items_data,function(results)
	{
		var email_data_string="Exciting offers from: " +get_session_var('title')+
		"\nTo avail visit us at: "+get_session_var('address')+"\n";
		
		for(var i in results)
		{
			email_data_string+="\n"+
					"Item: "+results[i].item_name+
					" Offer: "+results[i].offer;
		}	
		
		var email_id_string="";
		
		$("[id^='row_form78_']").each(function(index)
		{
			var form_id=$(this).attr('id');
			var form=document.getElementById(form_id);
			
			if(form.elements[2].checked)
			{
				email_id_string+=form.elements[1].value+";";
			}
		});
		
		email_data_string=encodeURIComponent(email_data_string);
		var mail_string="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su="+encodeURIComponent(pamphlet_name)+"&to="+get_session_var('email')+"&bcc="+email_id_string+"&body="+email_data_string;
		hide_loader();
		window.open(mail_string,'_blank');
	});		
}

/**
 * @modal Merge records
 * @modalNo 51
 */
function modal51_action(object)
{
	if(is_create_access('form80'))
	{
		$("#modal51").dialog("open");
		
		var de_duplication_data="<de_duplication>" +
					"<id></id>" +
					"<object exact='yes'>"+object+"</object>"+
					"<tablename></tablename>"+
					"<keycolumn></keycolumn>"+
					"<slave_id></slave_id>"+
				    "<slave_value></slave_value>"+
				    "<master_id></master_id>"+
				    "<master_value></master_value>"+
				    "<references_value></references_value>"+
				    "<references_id></references_id>"+
				    "<status>pending</status>"+
				    "</de_duplication>";
				
		fetch_requested_data('',de_duplication_data,function(results)
		{
			results.forEach(function(result)
			{
				if(result.slave_id!==result.master_id)
				{
					//////deleting the slave record from master table
					var slave_xml="<"+result.tablename+">" +
							"<id>"+result.slave_id+"</id>" +
							"</"+result.tablename+">";
					
					if(is_online())
					{
						server_delete_simple(slave_xml);
					}
					else
					{
						local_delete_simple(slave_xml);
					}
					
					//////replacing slave values with master values
					var refs_array=result.references_value.split(";");
					refs_array.forEach(function(refs)
					{
						var refs_split=refs.split("--");
						var tablename=refs_split[0];
						var column=refs_split[1];
						
						if(tablename!=="" && tablename!==null)
						{	
							var refs_data="<"+tablename+">" +
									"<id></id>" +
									"<"+column+" exact='yes'>"+result.slave_value+"</"+column+">" +
									"</"+tablename+">";
							fetch_requested_data('',refs_data,function(ref_results)
							{
								ref_results.forEach(function(ref_result)
								{
									var refs_xml="<"+tablename+">" +
											"<id>"+ref_result.id+"</id>" +
											"<"+column+">"+result.master_value+"</"+column+">" +
											"<last_updated>"+get_my_time()+"</last_updated>" +
											"</"+tablename+">";
									if(is_online())
									{
										server_update_simple(refs_xml);
									}
									else
									{
										local_update_simple(refs_xml);
									}
								});
							});
						}
					});
					
					////replacing slave ids with master ids
					var ref_ids_array=result.references_id.split(";");
					ref_ids_array.forEach(function(ref_ids)
					{
						var ref_ids_split=ref_ids.split("--");
						var tablename=ref_ids_split[0];
						var column=ref_ids_split[1];
						
						if(tablename!=="" && tablename!==null)
						{
							var ref_ids_data="<"+tablename+">" +
									"<id></id>" +
									"<"+column+" exact='yes'>"+result.slave_id+"</"+column+">" +
									"</"+tablename+">";
							fetch_requested_data('',ref_ids_data,function(ref_id_results)
							{
								ref_id_results.forEach(function(ref_id_result)
								{
									var ref_ids_xml="<"+tablename+">" +
											"<id>"+ref_id_result.id+"</id>" +
											"<"+column+">"+result.master_id+"</"+column+">" +
											"<last_updated>"+get_my_time()+"</last_updated>" +
											"</"+tablename+">";
									if(is_online())
									{
										server_update_simple(ref_ids_xml);
									}
									else
									{
										local_update_simple(ref_ids_xml);
									}
								});
							});
						}
					});
					
				}
				
				/////marking the record as closed in de-duplication table
				var de_duplication_xml="<de_duplication>" +
						"<id>"+result.id+"</id>" +
						"<status>closed</status>" +
						"<last_updated>"+get_my_time()+"</last_updated>" +
						"</de_duplication>";
				if(is_online())
				{
					server_update_simple(de_duplication_xml);
				}
				else
				{
					local_update_simple(de_duplication_xml);
				}
			});
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


