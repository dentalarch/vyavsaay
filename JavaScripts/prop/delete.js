/**
 * @form Update Inventory
 * @param button
 */
function form1_delete_item(button)
{
	if(is_delete_access('form1'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var name=form.elements[0].value;
			var batch=form.elements[1].value;
			var data_id=form.elements[6].value;
			var last_updated=get_my_time();
			var data_xml="<product_instances>" +
						"<id>"+data_id+"</id>" +
						"</product_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_instances</tablename>" +
						"<link_to>form1</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Batch number "+batch+" of product "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<area_utilization>" +
						"<item_name>"+name+"</item_name>" +
						"<batch>"+batch+"</batch>" +
						"</area_utilization>";
			var other_delete2="<inventory_adjust>" +
						"<product_name>"+name+"</product_name>" +
						"<batch>"+batch+"</batch>" +
						"</inventory_adjust>";	
			
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			delete_simple(other_delete2);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Newsletter
 * @param button
 */
function form2_delete_item(button)
{
	if(is_delete_access('form2'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
				
			var data_id=form.elements[7].value;
			var data_xml="<newsletter_items>" +
						"<id>"+data_id+"</id>" +
						"</newsletter_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Assets
 * @param button
 */
function form5_delete_item(button)
{
	if(is_delete_access('form5'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var type=form.elements[1].value;
			var description=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<assets>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<type>"+type+"</type>" +
						"</assets>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>assets</tablename>" +
						"<link_to>form5</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Asset "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();	
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Staff
 * @param button
 */
function form8_delete_item(button)
{
	if(is_delete_access('form8'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[5].value;
			var acc_name=form.elements[14].value;
			var last_updated=get_my_time();
			var data_xml="<staff>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</staff>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>staff</tablename>" +
						"<link_to>form8</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Staff profile of "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var account_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"<type>staff</type>" +
						"</accounts>";
			var attribute_xml="<attributes>" +
						"<name>"+acc_name+"</name>" +
						"<type>staff</type>" +
						"</attributes>";
						
			delete_row(data_xml,activity_xml);
			delete_simple(account_xml);
			delete_simple(attribute_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Create Service Bill
 * @param button
 */
function form10_delete_item(button)
{
	if(is_delete_access('form10'))
	{
		modal115_action(function()
		{
			//console.log('deleting form10_item');
			var bill_id=document.getElementById("form10_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[8].value;
			
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form New Bill
 * @param button
 */
function form12_delete_item(button)
{
	if(is_delete_access('form12'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form12_master").elements[4].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[9].value;
					
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Tasks
 * @param button
 */
function form14_delete_item(button)
{
	if(is_delete_access('form14'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var assignee=form.elements[1].value;
			var status=form.elements[3].value;
			var data_id=form.elements[4].value;
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<assignee>"+assignee+"</assignee>" +
						"<status>"+status+"</status>" +
						"</task_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form14</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Task "+name+" assigned to "+assignee+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Enter Customer returns
 * @param button
 */
function form15_delete_item(button)
{
	if(is_delete_access('form15'))
	{
		modal115_action(function()
		{
			var return_id=document.getElementById("form15_master").elements['return_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[1].value;
			var batch=form.elements[3].value;
			var data_id=form.elements[9].value;
			var last_updated=get_my_time();
				
			var data_xml="<customer_return_items>" +
					"<id>"+data_id+"</id>" +
					"<return_id>"+return_id+"</return_id>" +
					"</customer_return_items>";	
			var discard_xml="<discarded>" +
					"<product_name>"+name+"</product_name>" +
					"<source_id>"+return_id+"</source_id>" +
					"<batch>"+batch+"</batch>" +
					"<source>sale return</source>" +
					"</discarded>";
			if(is_online())
			{
				server_delete_simple(data_xml);
				server_delete_simple(discard_xml);
				
			}
			else
			{
				local_delete_simple(data_xml);
				local_delete_simple(discard_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage customer returns
 * @param button
 */
function form16_delete_item(button)
{
	if(is_delete_access('form16'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var order_num=form.elements[0].value;
			var customer=form.elements[2].value;
			var data_id=form.elements[5].value;
			var transaction_id=form.elements[8].value;
			var edit_button=form.elements[6].value;

			var last_updated=get_my_time();
			var return_xml="<customer_returns>" +
						"<id>"+data_id+"</id>" +
						"<status>cancelled</status>" +
						"</customer_returns>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>customer_returns</tablename>" +
						"<link_to>form16</link_to>" +
						"<title>Cancelled</title>" +
						"<notes>Return for order # "+order_num+" for customer "+customer+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var transaction_xml="<transactions>" +
					"<id>"+transaction_id+"</id>" +
					"</transactions>";
	
			if(is_online())
			{
				server_update_row(return_xml,activity_xml);
				server_delete_simple(transaction_xml);
			}
			else
			{
				local_update_row(return_xml,activity_xml);
				local_delete_simple(transaction_xml);
			}	
			$(button).parent().parent().attr('style','opacity:0.5');
			$(button).parent().parent().attr('title','This bill was cancelled');
			$(button).hide();
			$(edit_button).hide();			
	
			var payment_xml="<payments>" +
					"<id></id>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"<status array='yes'>--pending--cancelled--</status>" +
					"<transaction_id></transaction_id>" +
					"</payments>";
			fetch_requested_data('',payment_xml,function(payments)
			{
				for(var x in payments)
				{
					var pt_xml="<transactions>" +
							"<id>"+payments[x].transaction_id+"</id>" +
							"</transactions>";
					var pay_xml="<payments>" +
							"<id>"+payments[x].id+"</id>" +
							"<bill_id></bill_id>" +
							"<transaction_id></transaction_id>" +
							"</payments>";
	
					if(is_online())
					{
						server_delete_simple(pay_xml);
						server_delete_simple(pt_xml);
					}
					else
					{
						local_delete_simple(pay_xml);
						local_delete_simple(pt_xml);
					}
					break;
				}
			});
			
			var items_data="<customer_return_items>" +
					"<return_id>"+data_id+"</return_id>" +
					"</customer_return_items>";
			var discard_xml="<discarded>" +
					"<source_id>"+data_id+"</source_id>" +
					"<source>sale return</source>" +
					"</discarded>";
	
			if(is_online())
			{
				server_delete_simple(items_data);
				server_delete_simple(discard_xml);
			}
			else
			{
				local_delete_simple(items_data);
				local_delete_simple(discard_xml);
			}
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Supplier returns
 * @param button
 */
function form17_delete_item(button)
{
	if(is_delete_access('form17'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[0].value;
			var supplier=form.elements[1].value;
			var total=form.elements[3].value;
			var transaction_id=form.elements[6].value;
			var last_updated=get_my_time();
			var return_xml="<supplier_returns>" +
						"<id>"+data_id+"</id>" +
						"<supplier>"+supplier+"</supplier>" +
						"<total>"+total+"</total>" +
						"</supplier_returns>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>supplier_returns</tablename>" +
						"<link_to>form17</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Return no "+data_id+" for supplier "+supplier+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var transaction_xml="<transactions>" +
					"<id>"+transaction_id+"</id>" +
					"</transactions>";
	
			if(is_online())
			{
				server_delete_row(return_xml,activity_xml);
				server_delete_simple(transaction_xml);
			}
			else
			{
				local_delete_row(return_xml,activity_xml);
				local_delete_simple(transaction_xml);
			}	
			$(button).parent().parent().remove();
	
			var payment_xml="<payments>" +
					"<id></id>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"<status array='yes'>--pending--cancelled--</status>" +
					"<transaction_id></transaction_id>" +
					"</payments>";
			fetch_requested_data('',payment_xml,function(payments)
			{
				for(var x in payments)
				{
					var pt_xml="<transactions>" +
							"<id>"+payments[x].transaction_id+"</id>" +
							"</transactions>";
					var pay_xml="<payments>" +
							"<id>"+payments[x].id+"</id>" +
							"<bill_id></bill_id>" +
							"<transaction_id></transaction_id>" +
							"</payments>";
	
					if(is_online())
					{
						server_delete_simple(pay_xml);
						server_delete_simple(pt_xml);
					}
					else
					{
						local_delete_simple(pay_xml);
						local_delete_simple(pt_xml);
					}
					break;
				}
			});
	
			
			var items_data="<supplier_return_items>" +
					"<return_id>"+data_id+"</return_id>" +
					"</supplier_return_items>";
			var discard_xml="<discarded>" +
					"<source_id>"+data_id+"</source_id>" +
					"<source>purchase return</source>" +
					"</discarded>";
			if(is_online())
			{
				server_delete_simple(items_data);
				server_delete_simple(discard_xml);
			}
			else
			{
				local_delete_simple(items_data);
				local_delete_simple(discard_xml);
			}
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Enter Supplier returns
 * @param button
 */
function form19_delete_item(button)
{
	if(is_delete_access('form19'))
	{
		modal115_action(function()
		{
			var return_id=document.getElementById("form19_master").elements[3].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var batch=form.elements[1].value;
			var data_id=form.elements[7].value;
			
			var data_xml="<supplier_return_items>" +
					"<id>"+data_id+"</id>" +
					"<return_id>"+return_id+"</return_id>" +
					"<item_name>"+name+"</item_name>" +
					"<batch>"+batch+"</batch>" +
					"</supplier_return_items>";
			var discard_xml="<discarded>" +
					"<product_name>"+name+"</product_name>" +
					"<source_id>"+return_id+"</source_id>" +
					"<batch>"+batch+"</batch>" +
					"<source>purchase return</source>" +
					"</discarded>";
			if(is_online())
			{
				server_delete_simple(data_xml);
				server_delete_simple(discard_xml);
				
			}
			else
			{
				local_delete_simple(data_xml);
				local_delete_simple(discard_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form New Supplier Bill
 * @param button
 */
function form21_delete_item(button)
{
	if(is_delete_access('form21'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form21_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[9].value;
			var last_updated=get_my_time();
			
			var data_xml="<supplier_bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</supplier_bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form New Purchase Order
 * @param button
 */
function form24_delete_item(button)
{
	if(is_delete_access('form24'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[11].value;
			var data_xml="<purchase_order_items>" +
						"<id>"+data_id+"</id>" +
						"</purchase_order_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Customers
 * @param button
 */
function form30_delete_item(button)
{
	if(is_delete_access('form30'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var acc_name=form.elements[13].value;
			var data_id=form.elements[4].value;
			var data_xml="<customers>" +
						"<id>"+data_id+"</id>" +
						"</customers>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>customers</tablename>" +
						"<link_to>form30</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Customer profile "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var account_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"<type>customer</type>" +
						"</accounts>";
			var attribute_xml="<attributes>" +
						"<name>"+acc_name+"</name>" +
						"<type>customer</type>" +
						"</attributes>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(account_xml);
				server_delete_simple(attribute_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(account_xml);
				local_delete_simple(attribute_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Offers
 * @param button
 */
function form35_delete_item(button)
{
	if(is_delete_access('form35'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var offer_name=form.elements[0].value;
			var offer_type=form.elements[1].value;
			var end_date=get_raw_time(form.elements[2].value);
			var offer_detail=form.elements[3].value;
			var status=form.elements[4].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<offers>" +
						"<id>"+data_id+"</id>" +
						"<offer_name>"+offer_name+"</offer_name>" +
						"<offer_type>"+offer_type+"</offer_type>" +
						"<end_date>"+end_date+"</end_date>" +
						"<offer_detail>"+offer_detail+"</offer_detail>" +
						"<status>"+status+"</status>" +
						"</offers>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>offers</tablename>" +
						"<link_to>form35</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Offer "+offer_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Store Placement
 * @param button
 */
function form38_delete_item(button)
{
	if(is_delete_access('form38'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product_name=form.elements[0].value;
			var batch=form.elements[1].value;
			var name=form.elements[2].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<area_utilization>" +
						"<id>"+data_id+"</id>" +
						"<item_name>"+product_name+"</item_name>" +
						"<batch>"+batch+"</batch>" +
						"<name>"+name+"</name>" +
						"</area_utilization>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>area_utilization</tablename>" +
						"<link_to>form38</link_to>" +
						"<title>Removed</title>" +
						"<notes>Item "+product_name+" from storage area "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Products
 * @param button
 */
function form39_delete_item(button)
{
	if(is_delete_access('form39'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var make=form.elements[1].value;
			var description=form.elements[2].value;
			var tax=form.elements[5].value;
			var data_id=form.elements[6].value;
			var last_updated=get_my_time();
			var data_xml="<product_master>" +
						"<id>"+data_id+"</id>" +
						"<make>"+make+"</make>" +
						"<name>"+name+"</name>" +
						"<description>"+description+"</description>" +
						"<tax>"+tax+"</tax>" +
						"</product_master>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_master</tablename>" +
						"<link_to>form39</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Product "+name+" from inventory</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<product_instances>" +
					"<product_name>"+name+"</product_name>" +
					"</product_instances>";
			var other_delete2="<documents>" +
					"<doc_type>product_master</doc_type>" +
					"<target_id>"+data_id+"</target_id>" +
					"</documents>";
			var other_delete3="<pre_requisites>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</pre_requisites>";
			var other_delete4="<attributes>" +
					"<name exact='yes'>"+name+"</name>" +
					"<type>product</type>" +
					"</attributes>";
			var other_delete5="<cross_sells>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</cross_sells>";
			var other_delete6="<reviews>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</reviews>";
	
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
				server_delete_simple(other_delete2);
				server_delete_simple(other_delete3);
				server_delete_simple(other_delete4);
				server_delete_simple(other_delete5);
				server_delete_simple(other_delete6);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
				local_delete_simple(other_delete2);
				local_delete_simple(other_delete3);
				local_delete_simple(other_delete4);
				local_delete_simple(other_delete5);
				local_delete_simple(other_delete6);
	
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Vendors
 * @param button
 */
function form40_delete_item(button)
{
	if(is_delete_access('form40'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[4].value;
			var acc_name=form.elements[13].value;
			var data_xml="<suppliers>" +
						"<id>"+data_id+"</id>" +
						"</suppliers>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>suppliers</tablename>" +
						"<link_to>form40</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Supplier profile "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var account_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"<type>supplier</type>" +
						"</accounts>";
			var attribute_xml="<attributes>" +
						"<name>"+acc_name+"</name>" +
						"<type>supplier</type>" +
						"</attributes>";
						
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(account_xml);
				server_delete_simple(attribute_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(account_xml);
				local_delete_simple(attribute_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Bills
 * @param button
 */
function form42_delete_item(button)
{
	if(is_delete_access('form42'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var bill_num=form.elements[0].value;
			var customer_name=form.elements[1].value;
			var amount=form.elements[3].value;
			var data_id=form.elements[4].value;
			var transaction_id=form.elements[7].value;
			var edit_button=form.elements[5];
			var last_updated=get_my_time();
			var bill_xml="<bills>" +
						"<id>"+data_id+"</id>" +
						"<status>cancelled</status>"+						
						"</bills>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>bills</tablename>" +
						"<link_to>form42</link_to>" +
						"<title>Cancelled</title>" +
						"<notes>Bill no "+bill_num+" for customer "+customer_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var transaction_xml="<transactions>" +
						"<id>"+transaction_id+"</id>" +
						"</transactions>";
			var points_xml="<loyalty_points>" +
						"<source>sale</source>"+
						"<source_id>"+data_id+"</source_id>" +
						"</loyalty_points>";	
			
			$(button).parent().parent().attr('style','opacity:0.5');
			$(button).parent().parent().attr('title','This bill was cancelled');
			$(button).hide();
			$(edit_button).hide();

			if(is_online())
			{
				server_update_row(bill_xml,activity_xml);
				server_delete_simple(transaction_xml);
				server_delete_simple(points_xml);
			}
			else
			{
				local_update_row(bill_xml,activity_xml);
				local_delete_simple(transaction_xml);
				local_delete_simple(points_xml);
			}	
	
			var payment_xml="<payments>" +
					"<id></id>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"<status array='yes'>--pending--cancelled--</status>" +
					"<transaction_id></transaction_id>" +
					"</payments>";
			fetch_requested_data('',payment_xml,function(payments)
			{
				for(var x in payments)
				{
					var pt_xml="<transactions>" +
							"<id>"+payments[x].transaction_id+"</id>" +
							"</transactions>";
					var pay_xml="<payments>" +
							"<id>"+payments[x].id+"</id>" +
							"<bill_id></bill_id>" +
							"<transaction_id></transaction_id>" +
							"</payments>";
	
					if(is_online())
					{
						server_delete_simple(pay_xml);
						server_delete_simple(pt_xml);
					}
					else
					{
						local_delete_simple(pay_xml);
						local_delete_simple(pt_xml);
					}
					break;
				}
			});
	
			var items_data="<bill_items>" +
					"<id></id>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"</bill_items>";
			
			if(is_online())
			{
				server_delete_simple(items_data);
			}
			else
			{
				local_delete_simple(items_data);
			}
				
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Purchase Orders
 * @param button
 */
function form43_delete_item(button)
{
	if(is_delete_access('form43'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var order_num=form.elements[0].value;
			var supplier_name=form.elements[1].value;
			var data_id=form.elements[8].value;
			var last_updated=get_my_time();
			var data_xml="<purchase_orders>" +
						"<id>"+data_id+"</id>" +
						"</purchase_orders>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>purchase_orders</tablename>" +
						"<link_to>form43</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Purchase order no "+order_num+" for supplier "+supplier_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<purchase_order_items>" +
					"<order_id>"+data_id+"</order_id>" +
					"</purchase_order_items>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}



/**
 * @form Manage Pamphlets
 * @param button
 */
function form44_delete_item(button)
{
	if(is_delete_access('form44'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[2].value;
			var last_updated=get_my_time();
			var data_xml="<newsletter>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</newsletter>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>newsletter</tablename>" +
						"<link_to>form44</link_to>" +
						"<title>Deleted</title>" +
						"<notes>NewsLetter "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<newsletter_items>" +
					"<nl_id>"+data_id+"</nl_id>" +
					"</newsletter_items>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Set Defaults
 * @param button
 */
function form46_delete_item(button)
{
	if(is_delete_access('form46'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[3].value;
			var data_id=form.elements[2].value;
			var last_updated=get_my_time();
			var data_xml="<user_preferences>" +
						"<id>"+data_id+"</id>" +
						"</user_preferences>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>user_preferences</tablename>" +
						"<link_to>form46</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Setting "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Select Reports
 * @param button
 */
function form48_delete_item(button)
{
	if(is_delete_access('form48'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var element_id=form.elements[4].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<user_preferences>" +
						"<id>"+data_id+"</id>" +
						"<type>report</type>" +
						"</user_preferences>";
			var data2_xml="<access_control>" +
						"<element_id>"+element_id+"</element_id>" +
						"</access_control>";
			delete_simple(data_xml);
			delete_simple(data2_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Select Forms
 * @param button
 */
function form49_delete_item(button)
{
	if(is_delete_access('form49'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var element_id=form.elements[4].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<user_preferences>" +
						"<id>"+data_id+"</id>" +
						"<type>form</type>" +
						"</user_preferences>";
			var data2_xml="<access_control>" +
						"<element_id>"+element_id+"</element_id>" +
						"</access_control>";
			delete_simple(data_xml);
			delete_simple(data2_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Set Accounting Defaults
 * @param button
 */
function form50_delete_item(button)
{
	if(is_delete_access('form50'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[3].value;
			var data_id=form.elements[2].value;
			var last_updated=get_my_time();
			var data_xml="<user_preferences>" +
						"<id>"+data_id+"</id>" +
						"</user_preferences>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>user_preferences</tablename>" +
						"<link_to>form50</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Setting "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Supplier Bills
 * @param button
 */
function form53_delete_item(button)
{
	if(is_delete_access('form53'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var bill_id=form.elements[0].value;
			var supplier=form.elements[1].value;
			var data_id=form.elements[5].value;
			var transaction_id=form.elements[8].value;
			var order_id=form.elements[9].value;
			var last_updated=get_my_time();
			var bill_xml="<supplier_bills>" +
						"<id>"+data_id+"</id>" +
						"<supplier>"+supplier+"</supplier>" +
						"</supplier_bills>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>supplier_bills</tablename>" +
						"<link_to>form53</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Supplier Bill no "+bill_id+" for supplier "+supplier+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var transaction_xml="<transactions>" +
					"<id>"+transaction_id+"</id>" +
					"</transactions>";
			var return_bill_xml="<supplier_returns>" +
						"<id>"+data_id+"</id>" +
						"</supplier_returns>";	
			
			delete_row(bill_xml,activity_xml);
			delete_simple(transaction_xml);
			delete_simple(return_bill_xml);
			$(button).parent().parent().remove();
	
			var payment_xml="<payments>" +
					"<id></id>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"<status array='yes'>--pending--cancelled--</status>" +
					"<transaction_id></transaction_id>" +
					"</payments>";
			fetch_requested_data('',payment_xml,function(payments)
			{
				for(var x in payments)
				{
					var pt_xml="<transactions>" +
							"<id>"+payments[x].transaction_id+"</id>" +
							"</transactions>";
					var pay_xml="<payments>" +
							"<id>"+payments[x].id+"</id>" +
							"<bill_id></bill_id>" +
							"<transaction_id></transaction_id>" +
							"</payments>";
	
					delete_simple(pay_xml);
					delete_simple(pt_xml);
					break;
				}
			});
	
			var items_data="<supplier_bill_items>" +
					"<bill_id>"+data_id+"</bill_id>" +
					"</supplier_bill_items>";
			delete_simple(items_data);
	
			var return_items_data="<supplier_return_items>" +
					"<bill_id>"+data_id+"</bill_id>" +
					"</supplier_return_items>";
			delete_simple(return_items_data);
	

			var po_data="<purchase_orders>"+
						"<id>"+order_id+"</id>" +
						"<bill_id></bill_id>" +
						"<total_quantity></total_quantity>"+
						"<quantity_received></quantity_received>"+
						"<quantity_accepted></quantity_accepted>"+
						"</purchase_orders>";
			fetch_requested_data('',po_data,function (porders) 
			{
				if(porders.length>0)
				{
					var id_object_array=[];
					if(porders[0].bill_id!="" && porders[0].bill_id!=0 && porders[0].bill_id!="null")
					{
						id_object_array=JSON.parse(porders[0].bill_id);
					}
					
					for(var k in id_object_array)
					{
						if(id_object_array[k].bill_id==data_id)
						{
							id_object_array.splice(k,1);
							k-=1;
						}
					}
					
					var quantity_accepted=0;
					var quantity_received=0;
					var quantity_qc_pending=0;
					
					for(var x in id_object_array)
					{
						quantity_received+=parseFloat(id_object_array[x].total_received);
						quantity_accepted+=parseFloat(id_object_array[x].total_accepted);
					}
					
					if(porders[0].quantity_received=="" || porders[0].quantity_received=='null')
					{
						porders[0].quantity_received=0;
					}
					
					if(parseFloat(porders[0].quantity_received)>quantity_received)
					{
						quantity_qc_pending=parseFloat(porders[0].quantity_received)-quantity_received;
						quantity_received=parseFloat(porders[0].quantity_received);
					}
					
					var status='partially received';				
					if(parseFloat(porders[0].total_quantity)<=quantity_accepted)
					{
						status='completely received';
					}

					var new_bill_id=JSON.stringify(id_object_array);
					
					var po_xml="<purchase_orders>" +
							"<id>"+order_id+"</id>" +
							"<bill_id>"+new_bill_id+"</bill_id>" +
							"<quantity_received>"+quantity_received+"</quantity_received>"+
							"<quantity_accepted>"+quantity_accepted+"</quantity_accepted>"+
							"<quantity_qc_pending>"+quantity_qc_pending+"</quantity_qc_pending>"+
							"<status>"+status+"</status>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</purchase_orders>";
					update_simple(po_xml);
				}
			});
					
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * formNo 56
 * form Cash Register
 * @param button
 */
function form56_delete_item(button)
{
	if(is_delete_access('form56'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var account=form.elements[0].value;
			var type=form.elements[1].value;
			var amount=form.elements[2].value;
			var notes=form.elements[3].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<cash_register>" +
						"<id>"+data_id+"</id>" +
						"<type>"+type+"</type>" +
						"<acc_name>"+account+"</acc_name>" +
						"<amount>"+amount+"</amount>" +
						"</cash_register>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>cash_register</tablename>" +
						"<link_to>form56</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Cash record of amount "+amount+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var transaction_xml="<transactions>" +
						"<id>"+data_id+"</id>" +
						"<amount>"+amount+"</amount>" +
						"</transactions>";
			var payment_data="<payments>" +
						"<id></id>" +
						"<acc_name exact='yes'>"+account+"</acc_name>" +
						"<type>"+type+"</type>" +
						"<bill_id exact='yes'>"+data_id+"</bill_id>" +
						"<total_amount>"+amount+"</total_amount>" +
						"</payments>";
			fetch_requested_data('',payment_data,function(payments)
			{
				for(var i in payments)
				{
					var transaction2_xml="<transactions>" +
								"<id>"+payments[i].id+"</id>" +
								"<amount>"+amount+"</amount>" +
								"</transactions>";
					var payment_xml="<payments>" +
								"<id>"+payments[i].id+"</id>" +
								"<total_amount>"+amount+"</total_amount>" +
								"</payments>";
					if(is_online())
					{
						server_delete_simple(payment_xml);
						server_delete_simple(transaction2_xml);
					}
					else
					{
						local_delete_simple(payment_xml);
						local_delete_simple(transaction2_xml);
					}	
	
					break;
				}
	
			});
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(transaction_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(transaction_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 57
 * form Manage Services
 * @param button
 */
function form57_delete_item(button)
{
	if(is_delete_access('form57'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var service=form.elements[0].value;
			var description=form.elements[1].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<services>" +
						"<id>"+data_id+"</id>" +
						"</services>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>services</tablename>" +
						"<link_to>form57</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Service "+service+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete3="<pre_requisites>" +
					"<name>"+service+"</name>" +
					"<type>service</type>" +
					"</pre_requisites>";
			var other_delete4="<attributes>" +
					"<name>"+service+"</name>" +
					"<type>service</type>" +
					"</attributes>";
			var other_delete5="<cross_sells>" +
					"<name>"+service+"</name>" +
					"<type>service</type>" +
					"</cross_sells>";
			var other_delete6="<reviews>" +
					"<name>"+service+"</name>" +
					"<type>service</type>" +
					"</reviews>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete3);
				server_delete_simple(other_delete4);
				server_delete_simple(other_delete5);
				server_delete_simple(other_delete6);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete3);
				local_delete_simple(other_delete4);
				local_delete_simple(other_delete5);
				local_delete_simple(other_delete6);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 58
 * form Manage Service pre-requisites
 * @param button
 */
function form58_delete_item(button)
{
	if(is_delete_access('form58'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var service=form.elements[0].value;
			var type=form.elements[1].value;
			var requisite=form.elements[2].value;
			var quantity=form.elements[3].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<pre_requisites>" +
						"<id>"+data_id+"</id>" +
						"<name>"+service+"</name>" +
						"<type>service</type>" +
						"<requisite_type>"+type+"</requisite_type>" +
						"<requisite_name>"+requisite+"</requisite_name>" +
						"<quantity>"+quantity+"</quantity>" +
						"</pre_requisites>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>pre_requisites</tablename>" +
						"<link_to>form58</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Pre-requisite for service "+service+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 59
 * form Manage product pre-requisites
 * @param button
 */
function form59_delete_item(button)
{
	if(is_delete_access('form59'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product=form.elements[0].value;
			var type=form.elements[1].value;
			var requisite=form.elements[2].value;
			var quantity=form.elements[3].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var table='pre_requisites';
			var data_xml="<"+table+">" +
						"<id>"+data_id+"</id>" +
						"<name>"+product+"</name>" +
						"<type>product</type>" +
						"<requisite_type>"+type+"</requisite_type>" +
						"<requisite_name>"+requisite+"</requisite_name>" +
						"<quantity>"+quantity+"</quantity>" +
						"</"+table+">";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>"+table+"</tablename>" +
						"<link_to>form59</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Pre-requisite for product "+product+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * formNo 60
 * form Product Attributes
 * @param button
 */
function form60_delete_item(button)
{
	if(is_delete_access('form60'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product=form.elements[0].value;
			var attribute=form.elements[1].value;
			var value=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<attributes>" +
						"<id>"+data_id+"</id>" +
						"<name>"+product+"</name>" +
						"<type>product</type>" +
						"<attribute>"+attribute+"</attribute>" +
						"<value>"+value+"</value>" +
						"</attributes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>attributes</tablename>" +
						"<link_to>form60</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Attribute "+attribute+" for product "+product+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 61
 * form Service Attributes
 * @param button
 */
function form61_delete_item(button)
{
	if(is_delete_access('form61'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var service=form.elements[0].value;
			var attribute=form.elements[1].value;
			var value=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<attributes>" +
						"<id>"+data_id+"</id>" +
						"<name>"+service+"</name>" +
						"<type>service</type>" +
						"<attribute>"+attribute+"</attribute>" +
						"<value>"+value+"</value>" +
						"</attributes>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>attributes</tablename>" +
						"<link_to>form61</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Attribute "+attribute+" for service "+service+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * formNo 62
 * form Product reviews
 * @param button
 */
function form62_delete_item(button)
{
	if(is_delete_access('form62'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product=form.elements[0].value;
			var reviewer=form.elements[1].value;
			var detail=form.elements[2].value;
			var rating=form.elements[3].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var table='reviews';
			var data_xml="<"+table+">" +
						"<id>"+data_id+"</id>" +
						"<name>"+product+"</name>" +
						"<type>product</type>" +
						"<reviewer>"+reviewer+"</reviewer>" +
						"<detail>"+detail+"</detail>" +
						"<rating>"+rating+"</rating>" +
						"</"+table+">";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>"+table+"</tablename>" +
						"<link_to>form62</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Review for product "+product+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 63
 * form service reviews
 * @param button
 */
function form63_delete_item(button)
{
	if(is_delete_access('form63'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var service=form.elements[0].value;
			var reviewer=form.elements[1].value;
			var detail=form.elements[2].value;
			var rating=form.elements[3].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<reviews>" +
						"<id>"+data_id+"</id>" +
						"<name>"+service+"</name>" +
						"<type>service</type>" +
						"<reviewer>"+reviewer+"</reviewer>" +
						"<detail>"+detail+"</detail>" +
						"<rating>"+rating+"</rating>" +
						"</reviews>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>reviews</tablename>" +
						"<link_to>form63</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Review for service "+service+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 64
 * form Service Cross sells
 * @param button
 */
function form64_delete_item(button)
{
	if(is_delete_access('form64'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var service=form.elements[0].value;
			var cross_type=form.elements[1].value;
			var cross_name=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<cross_sells>" +
						"<id>"+data_id+"</id>" +
						"<name>"+service+"</name>" +
						"<type>service</type>" +
						"<cross_type>"+cross_type+"</cross_type>" +
						"<cross_name>"+cross_name+"</cross_name>" +
						"</cross_sells>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>cross_sells</tablename>" +
						"<link_to>form64</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Cross selling of "+cross_name+" with service "+service+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * formNo 66
 * form Cross sells
 * @param button
 */
function form66_delete_item(button)
{
	if(is_delete_access('form66'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product=form.elements[0].value;
			var cross_type=form.elements[1].value;
			var cross_name=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var table='cross_sells';
			var data_xml="<"+table+">" +
						"<id>"+data_id+"</id>" +
						"<name>"+product+"</name>" +
						"<type>product</type>" +
						"<cross_type>"+cross_type+"</cross_type>" +
						"<cross_name>"+cross_name+"</cross_name>" +
						"</"+table+">";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>"+table+"</tablename>" +
						"<link_to>form66</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Cross selling of "+cross_name+" for product "+product+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form New Sale Order
 * @param button
 */
function form69_delete_item(button)
{
	if(is_delete_access('form69'))
	{
		modal115_action(function()
		{			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[11].value;
			var last_updated=get_my_time();
			var data_xml="<sale_order_items>" +
						"<id>"+data_id+"</id>" +
						"</sale_order_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Sale Orders
 * @param button
 */
function form70_delete_item(button)
{
	if(is_delete_access('form70'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[0].value;
			var customer_name=form.elements[1].value;
			var order_date=get_raw_time(form.elements[2].value);
			var status=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<sale_orders>" +
						"<id>"+data_id+"</id>" +
						"<customer_name>"+customer_name+"</customer_name>" +
						"<order_date>"+order_date+"</order_date>" +
						"<status>"+status+"</status>" +
						"</sale_orders>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>sale_orders</tablename>" +
						"<link_to>form70</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Sale Order no "+data_id+" for customer "+customer_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<sale_order_items>" +
					"<order_id>"+data_id+"</order_id>" +
					"</sale_order_items>";
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage accounts
 * @param button
 */
function form71_delete_item(button)
{
	var form_id=$(button).attr('form');
	var form=document.getElementById(form_id);
	var type=form.elements[1].value;
	
	if(is_delete_access('form71') && type=='financial')
	{
		modal115_action(function()
		{		
			var name=form.elements[0].value;
			var description=form.elements[2].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"<acc_name>"+name+"</acc_name>" +
						"<description>"+description+"</description>" +
						"<type>financial</type>" +
						"</accounts>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>accounts</tablename>" +
						"<link_to>form71</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Account "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form New Bill
 * @param button
 */
function form72_delete_item(button)
{
	if(is_delete_access('form72'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form72_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[9].value;
			
			var data_xml="<bill_items>" +
					"<id>"+data_id+"</id>" +
					"<bill_id>"+bill_id+"</bill_id>" +
					"</bill_items>";	
			delete_simple(data_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form manage Task types
 * @param button
 */
function form79_delete_item(button)
{
	if(is_delete_access('form79'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var task=form.elements[0].value;
			var data_id=form.elements[3].value;
			var data_xml="<task_type>" +
						"<id>"+data_id+"</id>" +
						"<name>"+task+"</name>" +
						"</task_type>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_type</tablename>" +
						"<link_to>form79</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Task type "+task+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form De-duplication mapping
 * @param button
 */
function form80_delete_item(button)
{
	if(is_delete_access('form80'))
	{
		modal115_action(function()
		{
			//console.log('deleting form80');
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var slave_id=form.elements[1].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<de_duplication>" +
						"<id>"+data_id+"</id>" +
						"<slave_id>"+slave_id+"</slave_id>" +
						"</de_duplication>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Sale Leads
 * @param button
 */
function form81_delete_item(button)
{
	if(is_delete_access('form81'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var customer=form.elements[0].value;
			var data_id=form.elements[4].value;
			var data_xml="<sale_leads>" +
						"<id>"+data_id+"</id>" +
						"<customer>"+customer+"</customer>" +
						"</sale_leads>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>sale_leads</tablename>" +
						"<link_to>form81</link_to>" +
						"<title>Delete</title>" +
						"<notes>Sale lead for customer "+customer+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Store Areas
 * @param button
 */
function form83_delete_item(button)
{
	if(is_delete_access('form83'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<store_areas>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</store_areas>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>store_areas</tablename>" +
						"<link_to>form83</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Store area "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Subscriptions
 * @param button
 */
function form84_delete_item(button)
{
	if(is_delete_access('form84'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var customer=form.elements[0].value;
			var service=form.elements[1].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<service_subscriptions>" +
						"<id>"+data_id+"</id>" +
						"<customer>"+customer+"</customer>" +
						"<service>"+service+"</service>" +
						"</service_subscriptions>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>service_subscriptions</tablename>" +
						"<link_to>form84</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Service "+service+" subscription for customer "+customer+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Products
 * @param button
 */
function form87_delete_item(button)
{
	if(is_delete_access('form87'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var make=form.elements[1].value;
			var description=form.elements[2].value;
			var tax=form.elements[3].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<product_master>" +
						"<id>"+data_id+"</id>" +
						"<make>"+make+"</make>" +
						"<name>"+name+"</name>" +
						"<description>"+description+"</description>" +
						"<tax>"+tax+"</tax>" +
						"</product_master>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_master</tablename>" +
						"<link_to>form87</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Product "+name+" from inventory</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<product_instances>" +
					"<product_name>"+name+"</product_name>" +
					"</product_instances>";
			var other_delete2="<documents>" +
					"<doc_type>product</doc_type>" +
					"<target_id>"+data_id+"</target_id>" +
					"</documents>";
			var other_delete3="<pre_requisites>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</pre_requisites>";
			var other_delete4="<attributes>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</attributes>";
			var other_delete5="<cross_sells>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</cross_sells>";
			var other_delete6="<reviews>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</reviews>";
	
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
				server_delete_simple(other_delete2);
				server_delete_simple(other_delete3);
				server_delete_simple(other_delete4);
				server_delete_simple(other_delete5);
				server_delete_simple(other_delete6);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
				local_delete_simple(other_delete2);
				local_delete_simple(other_delete3);
				local_delete_simple(other_delete4);
				local_delete_simple(other_delete5);
				local_delete_simple(other_delete6);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manufacturing Schedule
 * @formNo 88
 * @param button
 */
function form88_delete_item(button)
{
	if(is_delete_access('form88'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product=form.elements[0].value;
			var status=form.elements[2].value;
			var data_id=form.elements[5].value;
			var data_xml="<manufacturing_schedule>" +
						"<id>"+data_id+"</id>" +
						"<product>"+product+"</product>" +
						"<status>"+status+"</status>" +
						"</manufacturing_schedule>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>manufacturing_schedule</tablename>" +
						"<link_to>form88</link_to>" +
						"<title>Delete</title>" +
						"<notes>Manufacturing schedule for product "+product+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Appointments
 * @formNo 89
 * @param button
 */
function form89_delete_item(button)
{
	if(is_delete_access('form89'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var assignee=form.elements[1].value;
			var status=form.elements[4].value;
			var data_id=form.elements[5].value;
			var data_xml="<appointments>" +
						"<id>"+data_id+"</id>" +
						"<customer>"+name+"</customer>" +
						"<assignee>"+assignee+"</assignee>" +
						"<status>"+status+"</status>" +
						"</appointments>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>appointments</tablename>" +
						"<link_to>form89</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Appointment with "+name+" assigned to "+assignee+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Billing types
 * @formNo 90
 * @param button
 */
function form90_delete_item(button)
{
	if(is_delete_access('form90'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var notes=form.elements[1].value;
			var data_id=form.elements[2].value;
			var data_xml="<bill_types>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<notes>"+notes+"</notes>" +
						"</bill_types>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>bill_types</tablename>" +
						"<link_to>form90</link_to>" +
						"<title>Delete</title>" +
						"<notes>Billing type "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var sale_prices_xml="<sale_prices>" +
						"<billing_type exact='yes'>"+name+"</billing_type>" +
						"</sale_prices>";
			var num_xml="<user_preferences>" +
						"<id>"+data_id+"</id>" +
						"<name unique='yes'>"+name+"_bill_num</name>" +
						"<type>accounting</type>"+
						"</user_preferences>";
			
			delete_row(data_xml,activity_xml);
			delete_simple(sale_prices_xml);
			delete_simple(num_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create bill(multiple registers)
 * @formNo 91
 * @param button
 */
function form91_delete_item(button)
{
	if(is_delete_access('form91'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form91_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[12].value;
					
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			delete_simple(data_xml);
					
			$(button).parent().parent().remove();
			form91_get_totals();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Bills(multiple registers)
 * @formNo 92
 * @param button
 */
function form92_delete_item(button)
{
	if(is_delete_access('form92'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var bill_num=form.elements[0].value;
			var customer_name=form.elements[2].value;
			var data_id=form.elements[5].value;
			var order_id=form.elements['order_id'].value;
			var transaction_id=form.elements[8].value;
			var edit_button=form.elements[6];			
			var last_updated=get_my_time();
			var bill_xml="<bills>" +
						"<id>"+data_id+"</id>" +
						"<status>cancelled</status>" +
						"<last_updated>"+get_my_time()+"</last_updated>"+
						"</bills>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>bills</tablename>" +
						"<link_to>form92</link_to>" +
						"<title>Cancelled</title>" +
						"<notes>Bill no "+bill_num+" for customer "+customer_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var transaction_xml="<transactions>" +
						"<id>"+transaction_id+"</id>" +
						"</transactions>";
		
			update_row(bill_xml,activity_xml);
			delete_simple(transaction_xml);
			
			$(button).parent().parent().attr('style','opacity:0.5');
			$(button).parent().parent().attr('title','This bill was cancelled');
			$(button).hide();
			$(edit_button).hide();
			
			var payment_xml="<payments>" +
					"<id></id>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"<status array='yes'>--pending--cancelled--</status>" +
					"<transaction_id></transaction_id>" +
					"</payments>";
			fetch_requested_data('',payment_xml,function(payments)
			{
				for(var x in payments)
				{
					var pt_xml="<transactions>" +
							"<id>"+payments[x].transaction_id+"</id>" +
							"</transactions>";
					var pay_xml="<payments>" +
							"<id>"+payments[x].id+"</id>" +
							"</payments>";
	
					delete_simple(pay_xml);
					delete_simple(pt_xml);
					break;
				}
			});
	
			var items_data="<bill_items>" +
					"<id></id>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"</bill_items>";
			delete_simple(items_data);
			
			//////////////////////////////////////////////
			var sale_order_xml="<sale_orders>"+
						"<id>"+order_id+"</id>" +
						"<bill_id></bill_id>" +
						"<status></status>"+
						"<total_quantity></total_quantity>"+
						"</sale_orders>";
			fetch_requested_data('',sale_order_xml,function (sorders) 
			{
				if(sorders.length>0)
				{
					var id_object_array=[];
					if(sorders[0].bill_id!="" && sorders[0].bill_id!=0 && sorders[0].bill_id!="null")
					{
						id_object_array=JSON.parse(sorders[0].bill_id);
					}
					
					for(var k in id_object_array)
					{
						if(id_object_array[k].bill_id==data_id)
						{
							id_object_array.splice(k,1);
							k-=1;
						}
					}
					
					var master_total_quantity=0;
					for(var k in id_object_array)
					{
						master_total_quantity+=parseFloat(id_object_array[k].quantity);
					}
	
					var status='partially billed';				
					if(parseFloat(master_total_quantity)==parseFloat(sorders[0].total_quantity))
					{
						status='billed';
					}
	
					var new_bill_id=JSON.stringify(id_object_array);
					var so_xml="<sale_orders>" +
							"<id>"+order_id+"</id>" +
							"<bill_id>"+new_bill_id+"</bill_id>" +
							"<status>"+status+"</status>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</sale_orders>";
					update_simple(so_xml);
				}
			});	
			/////////////////////////////////////////////		  						
			
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Loans
 * @formNo 93
 * @param button
 */
function form93_delete_item(button)
{
	if(is_delete_access('form93'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var account=form.elements[0].value;
			var type=form.elements[1].value;
			var amount=form.elements[2].value;
			var data_id=form.elements[5].value;
			var adjective="to";
			if(type=='taken')
			{
				adjective="from";
			}
			var loan_xml="<loans>" +
						"<id>"+data_id+"</id>" +
						"</loans>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>loans</tablename>" +
						"<link_to>form93</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Loan of amount Rs. "+amount+" "+type+" "+adjective+" "+account+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(loan_xml,activity_xml);
			$(button).parent().parent().remove();
	
			var payment_type="paid";
			if(type=='taken')
			{
				payment_type='received';
			}
			var payment_data="<payments>" +
					"<id></id>" +
					"<acc_name exact='yes'>"+account+"</acc_name>" +
					"<type>"+payment_type+"</type>" +
					"<bill_id exact='yes'>"+data_id+"</bill_id>" +
					"<total_amount>"+amount+"</total_amount>" +
					"</payments>";
			fetch_requested_data('',payment_data,function(payments)
			{
				for(var i in payments)
				{
					var transaction2_xml="<transactions>" +
								"<id>"+payments[i].id+"</id>" +
								"<amount>"+amount+"</amount>" +
								"</transactions>";
					var payment_xml="<payments>" +
								"<id>"+payments[i].id+"</id>" +
								"<total_amount>"+amount+"</total_amount>" +
								"</payments>";
					delete_simple(payment_xml);
					delete_simple(transaction2_xml);
					
					break;
				}
			});
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * formNo 96
 * form Customer Attributes
 * @param button
 */
function form96_delete_item(button)
{
	if(is_delete_access('form96'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var customer=form.elements[0].value;
			var attribute=form.elements[1].value;
			var value=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<attributes>" +
						"<id>"+data_id+"</id>" +
						"<name>"+customer+"</name>" +
						"<type>customer</type>" +
						"<attribute>"+attribute+"</attribute>" +
						"<value>"+value+"</value>" +
						"</attributes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>attributes</tablename>" +
						"<link_to>form96</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Attribute "+attribute+" for customer "+customer+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * formNo 97
 * form Supplier Attributes
 * @param button
 */
function form97_delete_item(button)
{
	if(is_delete_access('form97'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var supplier=form.elements[0].value;
			var attribute=form.elements[1].value;
			var value=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<attributes>" +
						"<id>"+data_id+"</id>" +
						"<name>"+supplier+"</name>" +
						"<type>supplier</type>" +
						"<attribute>"+attribute+"</attribute>" +
						"<value>"+value+"</value>" +
						"</attributes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>attributes</tablename>" +
						"<link_to>form97</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Attribute "+attribute+" for supplier "+supplier+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 98
 * form Staff Attributes
 * @param button
 */
function form98_delete_item(button)
{
	if(is_delete_access('form98'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var staff=form.elements[0].value;
			var attribute=form.elements[1].value;
			var value=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<attributes>" +
						"<id>"+data_id+"</id>" +
						"<name>"+staff+"</name>" +
						"<type>staff</type>" +
						"<attribute>"+attribute+"</attribute>" +
						"<value>"+value+"</value>" +
						"</attributes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>attributes</tablename>" +
						"<link_to>form98</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Attribute "+attribute+" for staff "+staff+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Projects
 * @param button
 */
function form101_delete_item(button)
{
	if(is_delete_access('form101'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<projects>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</projects>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>projects</tablename>" +
						"<link_to>form101</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Project "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<project_team>" +
					"<project_id>"+data_id+"</project_id>" +
					"</project_team>";
			var other_delete2="<project_phases>" +
					"<project_id>"+data_id+"</project_id>" +
					"</project_phases>";
			var other_delete3="<task_instances>" +
					"<source_id>"+data_id+"</source_id>" +
					"<source>projects</source>" +
					"</task_instances>";
			var access_xml="<data_access>" +
					"<tablename>projects</tablename>" +
					"<record_id>"+data_id+"</record_id>" +
					"</data_access>";
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			delete_simple(other_delete2);
			delete_simple(other_delete3);
			delete_simple(access_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Project Team
 * @param button
 */
function form102_delete_item(button)
{
	if(is_delete_access('form102'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<project_team>" +
						"<id>"+data_id+"</id>" +
						"</project_team>";
			var access_xml="<data_access>" +
					"<tablename>project_team</tablename>" +
					"<record_id>"+data_id+"</record_id>" +
					"</data_access>";
			delete_simple(data_xml);
			delete_simple(access_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Project Phases
 * @param button
 */
function form103_delete_item(button)
{
	if(is_delete_access('form103'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<project_phases>" +
						"<id>"+data_id+"</id>" +
						"</project_phases>";
			var access_xml="<data_access>" +
					"<tablename>project_phases</tablename>" +
					"<record_id>"+data_id+"</record_id>" +
					"</data_access>";
			delete_simple(data_xml);
			delete_simple(access_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Project Tasks
 * @param button
 */
function form104_delete_item(button)
{
	if(is_delete_access('form104'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"</task_instances>";
			var access_xml="<data_access>" +
					"<tablename>task_instances</tablename>" +
					"<record_id>"+data_id+"</record_id>" +
					"</data_access>";
			delete_simple(data_xml);
			delete_simple(access_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Data Access
 * @formNo 105
 */
function form105_delete_item(button)
{
	if(is_delete_access('form105'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[6].value;
			var data_xml="<data_access>" +
						"<id>"+data_id+"</id>" +
						"</data_access>";	
			delete_simple(data_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}		
}


/**
 * @form Manage Sale Orders (multi-register)
 * @param button
 */
function form108_delete_item(button)
{
	if(is_delete_access('form108'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements['id'].value;
			var customer_name=form.elements[2].value;
			var last_updated=get_my_time();
			var data_xml="<sale_orders>" +
						"<id>"+data_id+"</id>" +
						"</sale_orders>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>sale_orders</tablename>" +
						"<link_to>form108</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Sale Order # "+data_id+" for customer "+customer_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<sale_order_items>" +
					"<order_id>"+data_id+"</order_id>" +
					"</sale_order_items>";
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
				
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 109
 * form Asset Attributes
 * @param button
 */
function form109_delete_item(button)
{
	if(is_delete_access('form109'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var asset=form.elements[0].value;
			var attribute=form.elements[1].value;
			var value=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<attributes>" +
						"<id>"+data_id+"</id>" +
						"<name>"+asset+"</name>" +
						"<type>asset</type>" +
						"<attribute>"+attribute+"</attribute>" +
						"<value>"+value+"</value>" +
						"</attributes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>attributes</tablename>" +
						"<link_to>form109</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Attribute "+attribute+" for asset "+asset+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Reports
 * @param button
 */
function form110_delete_item(button)
{
	if(is_delete_access('form110'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[2].value;
			var last_updated=get_my_time();
			var data_xml="<reports>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</reports>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>reports</tablename>" +
						"<link_to>form110</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Report "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<report_items>" +
					"<report_id>"+data_id+"</report_id>" +
					"</report_items>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Create Reports
 * @param button
 */
function form111_delete_item(button)
{
	if(is_delete_access('form111'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[6].value;
			var data_xml="<report_items>" +
						"<id>"+data_id+"</id>" +
						"</report_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Add unbilled sale items
 * @param button
 */
function form112_delete_item(button)
{
	if(is_delete_access('form112'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[10].value;
			var data_xml="<unbilled_sale_items>" +
						"<id>"+data_id+"</id>" +
						"</unbilled_sale_items>";
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage unbilled sale items
 * @param button
 */
function form113_delete_item(button)
{
	if(is_delete_access('form113'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[6].value;
			var data_xml="<unbilled_sale_items>" +
						"<id>"+data_id+"</id>" +
						"</unbilled_sale_items>";
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Add unbilled purchase items
 * @param button
 */
function form114_delete_item(button)
{
	if(is_delete_access('form114'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[9].value;
			var data_xml="<unbilled_purchase_items>" +
						"<id>"+data_id+"</id>" +
						"</unbilled_purchase_items>";
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage unbilled purchase items
 * @param button
 */
function form115_delete_item(button)
{
	if(is_delete_access('form115'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[6].value;
			var data_xml="<unbilled_purchase_items>" +
						"<id>"+data_id+"</id>" +
						"</unbilled_purchase_items>";
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Loyalty programs
 * @param button
 */
function form116_delete_item(button)
{
	if(is_delete_access('form116'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var program_name=form.elements[0].value;
			var tier=form.elements[2].value;
			var data_id=form.elements[5].value;
			var data_xml="<loyalty_programs>" +
						"<id>"+data_id+"</id>" +
						"</loyalty_programs>";
			var delete2_xml="<loyalty_customers>" +
					"<program_name>"+program_name+"</program_name>" +
					"<tier>"+tier+"</tier>" +
					"</loyalty_customers>";
			
			if(is_online())
			{
				server_delete_simple(data_xml);
				server_delete_simple(delete2_xml);
			}
			else
			{
				local_delete_simple(data_xml);
				local_delete_simple(delete2_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create bill(loyalty)
 * @formNo 118
 * @param button
 */
function form118_delete_item(button)
{
	if(is_delete_access('form118'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form118_master").elements[4].value;
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[9].value;
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Create bill(multiple registers, unbilled items)
 * @formNo 119
 * @param button
 */
function form119_delete_item(button)
{
	if(is_delete_access('form119'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form119_master").elements[6].value;		
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[11].value;
					
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 121
 * form Adjust Loyalty Points
 * @param button
 */
function form121_delete_item(button)
{
	if(is_delete_access('form121'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var program=form.elements[0].value;
			var customer=form.elements[1].value;
			var points=form.elements[2].value;
			var date=form.elements[3].value;
			var source=form.elements[4].value;
			var data_id=form.elements[5].value;
			var data_xml="<loyalty_points>" +
					"<id>"+data_id+"</id>" +
					"</loyalty_points>";	
			var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>loyalty_points</tablename>" +
					"<link_to>form121</link_to>" +
					"<title>Deleted</title>" +
					"<notes>"+points+" Loyalty points from "+customer+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form New Supplier Bill (unbilled item)
 * @param button
 */
function form122_delete_item(button)
{
	if(is_delete_access('form122'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[15].value;
			var data_xml="<supplier_bill_items>" +
						"<id>"+data_id+"</id>" +
						"</supplier_bill_items>";
			var return_xml="<supplier_return_items>" +
						"<id>"+data_id+"</id>" +
						"</supplier_return_items>";
			delete_simple(data_xml);
			delete_simple(return_xml);
				
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 123
 * form Mandatory Attributes
 * @param button
 */
function form123_delete_item(button)
{
	if(is_delete_access('form123'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var object=form.elements[0].value;
			var attribute=form.elements[1].value;
			var data_id=form.elements[4].value;
			var data_xml="<mandatory_attributes>" +
						"<id>"+data_id+"</id>" +
						"</mandatory_attributes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>mandatory_attributes</tablename>" +
						"<link_to>form123</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Mandatory attribute "+attribute+" for "+object+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 125
 * form Customer Accounts
 * @param button
 */
function form125_delete_item(button)
{
	if(is_delete_access('form125'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var customer=form.elements[0].value;
			var username=form.elements[1].value;
			var data_id=form.elements[4].value;
			var data_xml="<accounts>" +
						"<id>"+data_id+"</id>" +
						"</accounts>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>accounts</tablename>" +
						"<link_to>form125</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Account for "+username+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Issues List
 * @param button
 */
function form126_delete_item(button)
{
	if(is_delete_access('form126'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[0].value;
			var data_xml="<issues>" +
						"<id>"+data_id+"</id>" +
						"</issues>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>issues</tablename>" +
						"<link_to>form126</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Deleted issue number "+data_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<solutions>" +
						"<issue_id>"+data_id+"</issue_id>" +
						"</solutions>";
			
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Service Requests
 * @param button
 */
function form128_delete_item(button)
{
	if(is_delete_access('form128'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[0].value;
			var data_xml="<service_requests>" +
						"<id>"+data_id+"</id>" +
						"</service_requests>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>service_requests</tablename>" +
						"<link_to>form128</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Deleted SR# "+data_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var access_xml="<data_access>" +
					"<tablename>service_requests</tablename>" +
					"<record_id>"+data_id+"</record_id>" +
					"</data_access>";
			var machine_xml="<service_request_machines>" +
					"<request_id>"+data_id+"</request_id>" +
					"</service_request_machines>";
			var team_xml="<service_request_team>" +
					"<request_id>"+data_id+"</request_id>" +
					"</service_request_team>";
			var document_xml="<documents>" +
					"<target_id>"+data_id+"</target_id>" +
					"<doc_type>service request</doc_type>"+
					"</documents>";
			var task_xml="<task_instances>" +
					"<source_id>"+data_id+"</source_id>" +
					"<source>service request</source>"+
					"</task_instances>";
			var item_xml="<service_request_items>" +
					"<request_id>"+data_id+"</request_id>" +
					"</service_request_items>";
			var expense_xml="<expenses>" +
					"<source_id>"+data_id+"</source_id>" +
					"<source>service request</source>"+
					"</expenses>";
				
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(access_xml);
				server_delete_simple(machine_xml);
				server_delete_simple(team_xml);
				server_delete_simple(document_xml);
				server_delete_simple(task_xml);
				server_delete_simple(item_xml);
				server_delete_simple(expense_xml);									
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(access_xml);
				local_delete_simple(machine_xml);
				local_delete_simple(team_xml);
				local_delete_simple(document_xml);
				local_delete_simple(task_xml);
				local_delete_simple(item_xml);
				local_delete_simple(expense_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Job Order
 * @param button
 */
function form130_delete_item(button)
{
	if(is_delete_access('form130'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form130_master").elements[3].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var name=form.elements[0].value;
			var data_id=form.elements[9].value;
			
			if(isNaN(form.elements[2].value))
			{
				var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
				var task_xml="<task_instances>" +
						"<source></source>" +
						"<source_id>"+data_id+"</source_id>" +
						"</task_instances>";
				if(is_online())
				{
					server_delete_simple(data_xml);
					server_delete_simple(task_xml);				
				}
				else
				{
					local_delete_simple(data_xml);
					local_delete_simple(task_xml);
				}
			}
			else
			{
				var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
				if(is_online())
				{
					server_delete_simple(data_xml);
				}
				else
				{
					local_delete_simple(data_xml);
				}
				
			}					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Tasks
 * @param button
 */
function form131_delete_item(button)
{
	if(is_delete_access('form131'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var assignee=form.elements[1].value;
			var status=form.elements[3].value;
			var data_id=form.elements[4].value;
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"<assignee>"+assignee+"</assignee>" +
						"<status>"+status+"</status>" +
						"</task_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form131</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Task "+name+" assigned to "+assignee+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Service documents
 * @param button
 */
function form133_delete_item(button)
{
	if(is_delete_access('form133'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<documents>" +
					"<id>"+data_id+"</id>"+				
					"<doc_type>service request</doc_type>" +
					"</documents>";
	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 134
 * form Service Dashboard - machine
 * @param button
 */
function form134_delete_machine(button)
{
	if(is_delete_access('form134'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form134_master');
			var request_id=master_fields.elements[1].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[5].value;
			var data_xml="<service_request_machines>" +
						"<id>"+data_id+"</id>" +
						"</service_request_machines>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>service_request_machines</tablename>" +
						"<link_to>form134</link_to>" +
						"<title>Removed</title>" +
						"<notes>Machine from SR# "+request_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 134
 * form Service Dashboard - team
 * @param button
 */
function form134_delete_team(button)
{
	if(is_delete_access('form134'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form134_master');
			var request_id=master_fields.elements[1].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var assignee=form.elements[0].value;
			var data_id=form.elements[3].value;
			var data_xml="<service_request_team>" +
						"<id>"+data_id+"</id>" +
						"<request_id>"+request_id+"</request_id>"+
						"</service_request_team>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>service_request_team</tablename>" +
						"<link_to>form134</link_to>" +
						"<title>Removed</title>" +
						"<notes>Assignee from SR# "+request_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var access_xml="<data_access>" +
						"<record_id>"+request_id+"</record_id>" +
						"<tablename>service_requests</tablename>" +
						"<user>"+assignee+"</user>" +
						"</data_access>";
	
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(access_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(access_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 134
 * form Service Dashboard - document
 * @param button
 */
function form134_delete_document(button)
{
	if(is_delete_access('form134'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form134_master');
			var request_id=master_fields.elements[1].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[2].value;
			var data_xml="<documents>" +
						"<id>"+data_id+"</id>" +
						"<target_id>"+request_id+"</target_id>"+
						"</documents>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>documents</tablename>" +
						"<link_to>form134</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Document for SR# "+request_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 134
 * form Service Dashboard - Task
 * @param button
 */
function form134_delete_task(button)
{
	if(is_delete_access('form134'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form134_master');
			var request_id=master_fields.elements[1].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[4].value;
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"</task_instances>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form134</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Task for SR# "+request_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * formNo 135
 * form Project Dashboard - team
 * @param button
 */
function form135_delete_team(button)
{
	if(is_delete_access('form135'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form135_master');
			var project_name=master_fields.elements[1].value;
			var project_id=master_fields.elements[4].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var member=form.elements[0].value;
			var data_id=form.elements[4].value;
			var data_xml="<project_team>" +
						"<id>"+data_id+"</id>" +
						"</project_team>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>project_team</tablename>" +
						"<link_to>form135</link_to>" +
						"<title>Removed</title>" +
						"<notes>"+member+" from project team of "+project_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var access_xml="<data_access>" +
						"<record_id>"+project_id+"</record_id>" +
						"<tablename>projects</tablename>" +
						"<user>"+member+"</user>" +
						"</data_access>";
	
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(access_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(access_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 135
 * form Project Dashboard - document
 * @param button
 */
function form135_delete_document(button)
{
	if(is_delete_access('form135'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form135_master');
			var project_name=master_fields.elements[1].value;
			var project_id=master_fields.elements[4].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[2].value;
			var data_xml="<documents>" +
						"<id>"+data_id+"</id>" +
						"<target_id>"+project_id+"</target_id>"+
						"</documents>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>documents</tablename>" +
						"<link_to>form135</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Document for project "+project_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 135
 * form Project Dashboard - Task
 * @param button
 */
function form135_delete_task(button)
{
	if(is_delete_access('form135'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form135_master');
			var project_name=master_fields.elements[1].value;
			var project_id=master_fields.elements[4].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[5].value;
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"</task_instances>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form135</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Task for project "+project_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Enter Supplier Bill (wholesale)
 * @param button
 */
function form136_delete_item(button)
{
	if(is_delete_access('form136'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form136_master").elements[6].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[8].value;
			
			var data_xml="<supplier_bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</supplier_bill_items>";	
			var batch_xml="<product_instances>" +
						"<id>"+data_id+"</id>" +
						"</product_instances>";	
			delete_simple(data_xml);
			delete_simple(batch_xml);
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Project Expenses
 * @param button
 */
function form137_delete_item(button)
{
	if(is_delete_access('form137'))
	{	
		modal115_action(function()
		{	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);	
			var data_id=form.elements[5].value;
			
			var data_xml="<expenses>" +
						"<id>"+data_id+"</id>" +
						"</expenses>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Customer Profiling
 * @param button
 */
function form139_delete_item(button)
{
	if(is_delete_access('form139'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);	
			var data_id=form.elements[5].value;
			
			var data_xml="<assets>" +
						"<id>"+data_id+"</id>" +
						"</assets>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Supplier Profiling
 * @param button
 */
function form140_delete_item(button)
{
	if(is_delete_access('form140'))
	{
		modal115_action(function()
		{		
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);	
			var data_id=form.elements[5].value;
			
			var data_xml="<assets>" +
						"<id>"+data_id+"</id>" +
						"</assets>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Questionnaire
 * @param button
 */
function form142_delete_item(button)
{
	if(is_delete_access('form142'))
	{
		modal115_action(function()
		{
			var ques_id=document.getElementById("form142_master").elements['id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[7].value;
				
			var data_xml="<ques_fields>" +
					"<id>"+data_id+"</id>" +
					"<ques_id>"+ques_id+"</ques_id>" +
					"</ques_fields>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}				
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 144
 * form Project Budgeting - Expense
 * @param button
 */
function form144_delete_expense(button)
{
	if(is_delete_access('form144'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form144_master');
			var project_name=master_fields.elements['project'].value;
			var project_id=master_fields.elements['project_id'].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[4].value;
			var data_xml="<expenses>" +
						"<id>"+data_id+"</id>" +
						"</expenses>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>expenses</tablename>" +
						"<link_to>form144</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Expense for project "+project_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Store movement
 * @param button
 */
function form145_delete_item(button)
{
	if(is_delete_access('form145'))
	{	
		modal115_action(function()
		{	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[6].value;
				
			var data_xml="<store_movement>" +
					"<id>"+data_id+"</id>" +
					"</store_movement>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}				
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manufacturing
 * @formNo 146
 * @param button
 */
function form146_delete_item(button)
{
	if(is_delete_access('form146'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product=form.elements[0].value;
			var data_id=form.elements[5].value;
			var data_xml="<manufacturing_schedule>" +
						"<id>"+data_id+"</id>" +
						"</manufacturing_schedule>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>manufacturing_schedule</tablename>" +
						"<link_to>form146</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Manufacturing schedule for product "+product+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Roles
 * @formNo 147
 * @param button
 */
function form147_delete_item(button)
{
	if(is_delete_access('form147'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var role=form.elements[0].value;
			var desc=form.elements[1].value;
			var status=form.elements[2].value;		
			var data_id=form.elements[3].value;
			var data_xml="<roles>" +
						"<id>"+data_id+"</id>" +
						"</roles>";
			var mapping_xml="<user_role_mapping>"+
							"<role_name>"+role+"</role_name>"+
							"</user_role_mapping>";
			var access_xml="<access_control>"+
							"<username>"+role+"</username>"+
							"</access_control>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>roles</tablename>" +
						"<link_to>form147</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Role "+role+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(mapping_xml);
				server_delete_simple(access_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(mapping_xml);
				local_delete_simple(access_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Assign Roles
 * @formNo 149
 * @param button
 */
function form149_delete_item(button)
{
	if(is_delete_access('form149'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var role=form.elements[0].value;
			var data_id=form.elements[3].value;
			var data_xml="<user_role_mapping>" +
						"<id>"+data_id+"</id>" +
						"</user_role_mapping>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>user_role_mapping</tablename>" +
						"<link_to>form149</link_to>" +
						"<title>Deleted</title>" +
						"<notes>User mapping for "+role+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 151
 * form Service Request billing - Item
 * @param button
 */
function form151_delete_item(button)
{
	if(is_delete_access('form151'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form151_master');
			var request_id=master_fields.elements[1].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[5].value;
			var data_xml="<service_request_items>" +
						"<id>"+data_id+"</id>" +
						"</service_request_items>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>service_request_items</tablename>" +
						"<link_to>form151</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Service item for SR# "+request_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 151
 * form Service Dashboard - Expense
 * @param button
 */
function form151_delete_expense(button)
{
	if(is_delete_access('form151'))
	{
		modal115_action(function()
		{
			var master_fields=document.getElementById('form151_master');
			var request_id=master_fields.elements[1].value;
	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);		
			var data_id=form.elements[4].value;
			var data_xml="<expenses>" +
						"<id>"+data_id+"</id>" +
						"</expenses>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>expenses</tablename>" +
						"<link_to>form151</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Expense for SR# "+request_id+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Quotations
 * @formNo 152
 * @param button
 */
function form152_delete_item(button)
{
	if(is_delete_access('form152'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[0].value;
			var customer=form.elements[2].value;
			var bill_xml="<quotation>" +
						"<id>"+data_id+"</id>" +
						"<customer>"+customer+"</customer>" +
						"</quotation>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>quotation</tablename>" +
						"<link_to>form152</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Quotation id "+data_id+" for customer "+customer+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
	
			if(is_online())
			{
				server_delete_row(bill_xml,activity_xml);
			}
			else
			{
				local_delete_row(bill_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
	
			
			var items_data="<quotation_items>" +
					"<id></id>" +
					"<quotation_id exact='yes'>"+data_id+"</quotation_id>" +
					"</quotation_items>";
						
			if(is_online())
			{
				server_delete_simple(items_data);
			}
			else
			{
				local_delete_simple(items_data);
			}
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Prepare Quotation
 * @formNo 153
 * @param button
 */
function form153_delete_item(button)
{
	if(is_delete_access('form153'))
	{
		modal115_action(function()
		{
			var quot_id=document.getElementById("form153_master").elements[5].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[6].value;
					
			var data_xml="<quotation_items>" +
						"<id>"+data_id+"</id>" +
						"<quotation_id>"+quot_id+"</quotation_id>" +
						"</quotation_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Bills (DLM)
 * @formNo 154
 * @param button
 */
function form154_delete_item(button)
{
	if(is_delete_access('form154'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form154_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[4].value;
					
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			delete_simple(data_xml);
					
			$(button).parent().parent().remove();
			form154_update_serial_numbers();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Bills (DLM)
 * @formNo 154
 * @param button
 */
function form154_delete_service_item(button)
{
	if(is_delete_access('form154'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form154_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[4].value;
					
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
			form154_update_serial_numbers();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Bills (DLM)
 * @formNo 154
 * @param button
 */
function form154_delete_hiring_item(button)
{
	if(is_delete_access('form154'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form154_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[8].value;
					
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Store Placement (DLM)
 * @formNo 156
 */
function form156_delete_item(button)
{
	if(is_delete_access('form156'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var product_name=form.elements[0].value;
			var name=form.elements[1].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<area_utilization>" +
						"<id>"+data_id+"</id>" +
						"<item_name>"+product_name+"</item_name>" +
						"<name>"+name+"</name>" +
						"</area_utilization>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>area_utilization</tablename>" +
						"<link_to>form156</link_to>" +
						"<title>Removed</title>" +
						"<notes>Item "+product_name+" from storage area "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Store movement (DLM)
 * @formNo form157
 */
function form157_delete_item(button)
{
	if(is_delete_access('form157'))
	{	
		modal115_action(function()
		{	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[5].value;
				
			var data_xml="<store_movement>" +
					"<id>"+data_id+"</id>" +
					"</store_movement>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}				
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Enter Purchase Bill (DLM)
 * @formNo form158
 */
function form158_delete_item(button)
{
	if(is_delete_access('form158'))
	{
		modal115_action(function()
		{
			var master_form=document.getElementById("form158_master");
			var bill_id=master_form.elements['bill_id'].value;
			var imported=master_form.elements['imported'].checked;

			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[5].value;
			
			var data_xml="<supplier_bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</supplier_bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Checklist items
 * @formNo form161
 */
function form161_delete_item(button)
{
	if(is_delete_access('form161'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var cp=form.elements[0].value;
			var data_id=form.elements[3].value;
			
			var data_xml="<checklist_items>" +
						"<id>"+data_id+"</id>" +
						"</checklist_items>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>checklist_items</tablename>" +
						"<link_to>form161</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Checkpoint "+cp+" for products</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var mapping_xml="<checklist_mapping>"+
							"<checkpoint exact='yes'>"+cp+"</checkpoint>"+
							"</checklist_mapping>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}				
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Checklist mapping
 * @formNo form162
 */
function form162_delete_item(button)
{
	if(is_delete_access('form162'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var item=form.elements[0].value;
			var cp=form.elements[1].value;
			var data_id=form.elements[3].value;
			
			var data_xml="<checklist_mapping>" +
						"<id>"+data_id+"</id>" +
						"</checklist_mapping>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>checklist_mapping</tablename>" +
						"<link_to>form162</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Checkpoint "+cp+" for product "+item+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}				
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Storage Structure
 * @formNo form167
 */
function form167_delete_item(button)
{
	if(is_delete_access('form167'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[6].value;
			
			var data_xml="<storage_structure>" +
						"<id>"+data_id+"</id>" +
						"</storage_structure>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>storage_structure</tablename>" +
						"<link_to>form167</link_to>" +
						"<title>Removed</title>" +
						"<notes>Storage type of "+name+" from structure</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}				
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Products (Nikki)
 * @param button
 */
function form169_delete_item(button)
{
	if(is_delete_access('form169'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var description=form.elements[1].value;
			var make=form.elements[2].value;
			var tax=form.elements[5].value;
			var data_id=form.elements[6].value;
			var last_updated=get_my_time();
			var data_xml="<product_master>" +
						"<id>"+data_id+"</id>" +
						"<make>"+make+"</make>" +
						"<name>"+name+"</name>" +
						"<description>"+description+"</description>" +
						"<tax>"+tax+"</tax>" +
						"</product_master>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_master</tablename>" +
						"<link_to>form169</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Product "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<product_instances>" +
					"<product_name>"+name+"</product_name>" +
					"</product_instances>";
			var other_delete2="<documents>" +
					"<doc_type>product_master</doc_type>" +
					"<target_id>"+data_id+"</target_id>" +
					"</documents>";
			var other_delete3="<pre_requisites>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</pre_requisites>";
			var other_delete4="<attributes>" +
					"<name exact='yes'>"+name+"</name>" +
					"<type>product</type>" +
					"</attributes>";
			var other_delete5="<cross_sells>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</cross_sells>";
			var other_delete6="<reviews>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</reviews>";
	
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			delete_simple(other_delete2);
			delete_simple(other_delete3);
			delete_simple(other_delete4);
			delete_simple(other_delete5);
			delete_simple(other_delete6);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Store Areas (Nikki)
 * @param button
 */
function form170_delete_item(button)
{
	if(is_delete_access('form170'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<store_areas>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</store_areas>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>store_areas</tablename>" +
						"<link_to>form170</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Storage area "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Sale channels
 * @formNo 171
 * @param button
 */
function form171_delete_item(button)
{
	if(is_delete_access('form171'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[3].value;
			var data_xml="<sale_channels>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</sale_channels>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>sale_channels</tablename>" +
						"<link_to>form171</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Sale channel "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var sku_xml="<sku_mapping>" +
						"<channel exact='yes'>"+name+"</channel>" +
						"</sku_mapping>";
			var channel_prices_xml="<channel_prices>" +
						"<channel exact='yes'>"+name+"</channel>" +
						"</channel_prices>";
			var pickup_xml="<pickup_charges>" +
						"<channel exact='yes'>"+name+"</channel>" +
						"</pickup_charges>";
			var category_xml="<channel_category>" +
						"<channel exact='yes'>"+name+"</channel>" +
						"</channel_category>";
			var cat_sku_xml="<category_sku_mapping>" +
						"<channel exact='yes'>"+name+"</channel>" +
						"</category_sku_mapping>";
			var time_xml="<user_preferences>" +
						"<id>"+data_id+"</id>" +
						"<name unique='yes'>"+name+"_order_time_limit</name>" +
						"<type>accounting</type>"+
						"</user_preferences>";
			
			delete_row(data_xml,activity_xml);
			delete_simple(pickup_xml);
			delete_simple(sku_xml);
			delete_simple(channel_prices_xml);
			delete_simple(category_xml);
			delete_simple(cat_sku_xml);
			delete_simple(time_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Channel Pricing
 * @formNo 172
 * @param button
 */
function form172_delete_item(button)
{
	if(is_delete_access('form172'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var channel=form.elements[0].value;
			var name=form.elements[1].value;
			var data_id=form.elements[17].value;
			var data_xml="<channel_prices>" +
						"<id>"+data_id+"</id>" +
						"</channel_prices>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>channel_prices</tablename>" +
						"<link_to>form172</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Channel pricing for "+name+" for "+channel+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form SKU mappings
 * @param button
 */
function form173_delete_item(button)
{
	if(is_delete_access('form173'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var channel=form.elements[0].value;
			var system_sku=form.elements[3].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<sku_mapping>" +
						"<id>"+data_id+"</id>" +
						"</sku_mapping>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>sku_mapping</tablename>" +
						"<link_to>form173</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Mapping of "+system_sku+" for channel "+channel+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";

			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Pickup Charges
 * @param button
 */
function form174_delete_item(button)
{
	if(is_delete_access('form174'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var channel=form.elements[0].value;
			var pincode=form.elements[1].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<pickup_charges>" +
						"<id>"+data_id+"</id>" +
						"</pickup_charges>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>pickup_charges</tablename>" +
						"<link_to>form174</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Pickup charges record for pincode "+pincode+" for channel "+channel+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Channel Category
 * @param button
 */
function form175_delete_item(button)
{
	if(is_delete_access('form175'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var channel=form.elements[0].value;
			var name=form.elements[2].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<channel_category>" +
						"<id>"+data_id+"</id>" +
						"</channel_category>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>channel_category</tablename>" +
						"<link_to>form175</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Category "+name+" for channel "+channel+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Prioritization Parameters
 * @param button
 */
function form177_delete_item(button)
{
	if(is_delete_access('form177'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var type=form.elements[0].value;
			var name=form.elements[1].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<prioritization_parameters>" +
						"<id>"+data_id+"</id>" +
						"</prioritization_parameters>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>prioritization_parameters</tablename>" +
						"<link_to>form177</link_to>" +
						"<title>Deleted</title>" +
						"<notes>"+name+" parameter for prioritization of "+type+"s</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form New Purchase Order
 * @param button
 */
function form178_delete_item(button)
{
	if(is_delete_access('form178'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[8].value;
			var data_xml="<purchase_order_items>" +
						"<id>"+data_id+"</id>" +
						"</purchase_order_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Purchase Orders
 * @param button
 */
function form179_delete_item(button)
{
	if(is_delete_access('form179'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var order_num=form.elements[0].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<purchase_orders>" +
						"<id>"+data_id+"</id>" +
						"</purchase_orders>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>purchase_orders</tablename>" +
						"<link_to>form179</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Purchase order # "+order_num+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<purchase_order_items>" +
					"<order_id>"+data_id+"</order_id>" +
					"</purchase_order_items>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Sale Order (CPS)
 * @param button
 */
function form180_delete_item(button)
{
	if(is_delete_access('form180'))
	{
		modal115_action(function()
		{			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[8].value;
			var last_updated=get_my_time();
			var data_xml="<sale_order_items>" +
						"<id>"+data_id+"</id>" +
						"</sale_order_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Sale Orders (CPS)
 * @param button
 */
function form181_delete_item(button)
{
	if(is_delete_access('form181'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var order_num=form.elements[0].value;
			var customer_name=form.elements[1].value;
			var order_date=get_raw_time(form.elements[2].value);
			var status=form.elements[3].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<sale_orders>" +
						"<id>"+data_id+"</id>" +
						"</sale_orders>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>sale_orders</tablename>" +
						"<link_to>form181</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Sale Order # "+order_num+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<sale_order_items>" +
					"<order_id>"+data_id+"</order_id>" +
					"</sale_order_items>";
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Update Inventory (CPS)
 * @param button
 */
function form183_delete_item(button)
{
	if(is_delete_access('form183'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var name=form.elements[0].value;
			var batch=form.elements[1].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<product_instances>" +
						"<id>"+data_id+"</id>" +
						"</product_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_instances</tablename>" +
						"<link_to>form183</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Batch number "+batch+" of product "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<area_utilization>" +
						"<item_name>"+name+"</item_name>" +
						"<batch>"+batch+"</batch>" +
						"</area_utilization>";
			var other_delete2="<inventory_adjust>" +
						"<product_name>"+name+"</product_name>" +
						"<batch>"+batch+"</batch>" +
						"</inventory_adjust>";	

			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Production Steps
 * @param button
 */
function form184_delete_item(button)
{
	if(is_delete_access('form184'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var name=form.elements[1].value;
			var data_id=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<business_processes>" +
						"<id>"+data_id+"</id>" +
						"</business_processes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>business_processes</tablename>" +
						"<link_to>form184</link_to>" +
						"<title>Deleted</title>" +
						"<notes>"+name+" from production process steps</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Track Production
 * @param button
 */
function form185_delete_item(button)
{
	if(is_delete_access('form185'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var name=form.elements[0].value;
			var data_id=form.elements[6].value;
			var last_updated=get_my_time();
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"</task_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form185</link_to>" +
						"<title>Deleted</title>" +
						"<notes>"+name+" task</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create production plan
 * @param button
 */
function form186_delete_item(button)
{
	if(is_delete_access('form186'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<production_plan_items>" +
						"<id>"+data_id+"</id>" +
						"</production_plan_items>";	
			var task_xml="<task_instances>" +
						"<source_id exact='yes'>"+data_id+"</source_id>" +
						"</task_instances>";	
			delete_simple(data_xml);
			delete_simple(task_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Testing Steps
 * @param button
 */
function form187_delete_item(button)
{
	if(is_delete_access('form187'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var name=form.elements[1].value;
			var data_id=form.elements[6].value;
			var last_updated=get_my_time();
			var data_xml="<business_processes>" +
						"<id>"+data_id+"</id>" +
						"</business_processes>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>business_processes</tablename>" +
						"<link_to>form187</link_to>" +
						"<title>Deleted</title>" +
						"<notes>"+name+" from testing process steps</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Track Testing
 * @param button
 */
function form188_delete_item(button)
{
	if(is_delete_access('form188'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var name=form.elements[0].value;
			var data_id=form.elements[5].value;
			var data_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"</task_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>task_instances</tablename>" +
						"<link_to>form188</link_to>" +
						"<title>Deleted</title>" +
						"<notes>"+name+" task</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage production plan
 * @param button
 */
function form189_delete_item(button)
{
	if(is_delete_access('form189'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<production_plan>" +
						"<id>"+data_id+"</id>" +
						"</production_plan>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>production_plan</tablename>" +
						"<link_to>form189</link_to>" +
						"<title>Deleted</title>" +
						"<notes>"+name+" production plan</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			
			var items_xml="<production_plan_items>" +
						"<id></id>"+						
						"<plan_id exact='yes'>"+data_id+"</plan_id>" +
						"</production_plan_items>";	
			get_single_column_data(function (items) 
			{
				items.forEach(function (item) 
				{
					var item_xml="<production_plan_items>" +
						"<id>"+item.id+"</id>" +
						"</production_plan_items>";
					var task_xml="<task_instances>" +
						"<source_id exact='yes'>"+item.id+"</source_id>" +
						"</task_instances>";
					if(is_online())
					{
						server_delete_simple(item_xml);
						server_delete_simple(task_xml);
					}
					else
					{
						local_delete_simple(item_xml);
						local_delete_simple(task_xml);
					}	
				});				
			},items_xml);

			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Orders (laundry)
 * @param button
 */
function form190_delete_item(button)
{
	if(is_delete_access('form190'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var customer_name=form.elements[0].value;
			var data_id=form.elements[5].value;
			var data_xml="<sale_orders>" +
						"<id>"+data_id+"</id>" +
						"</sale_orders>";		
			var task_xml="<task_instances>" +
						"<id>"+data_id+"</id>" +
						"</task_instances>";
			if(is_online())
			{
				server_delete_simple(data_xml);
				server_delete_simple(task_xml);
			}
			else
			{
				local_delete_simple(data_xml);
				local_delete_simple(task_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Values List
 * @param button
 */
function form191_delete_item(button)
{
	if(is_delete_access('form191'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[4].value;
			var data_xml="<values_list>" +
						"<id>"+data_id+"</id>" +
						"</values_list>";		
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Enter Purchase Bill (Laundry)
 * @formNo form192
 */
function form192_delete_item(button)
{
	if(is_delete_access('form192'))
	{
		modal115_action(function()
		{
			var master_form=document.getElementById("form192_master");
			var bill_id=master_form.elements[5].value;
					
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[6].value;
			
			var data_xml="<supplier_bill_items>" +
						"<id>"+data_id+"</id>" +
						"<bill_id>"+bill_id+"</bill_id>" +
						"</supplier_bill_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form LetterHead
 * @param button
 */
function form195_delete_item(button)
{
	if(is_delete_access('form195'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[3].value;
			var data_xml="<letterheads>" +
						"<id>"+data_id+"</id>" +
						"</letterheads>";		
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 197
 * form Supplier Item Mapping
 * @param button
 */
function form197_delete_item(button)
{
	if(is_delete_access('form197'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[2].value;
			var last_updated=get_my_time();
			var data_xml="<supplier_item_mapping>" +
						"<id>"+data_id+"</id>" +
						"</supplier_item_mapping>";
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Logistics Incoming Items
 * @param button
 */
function form199_delete_item(button)
{
	if(is_update_access('form199'))
	{
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var awb_num=form.elements[0].value;
		var status='picked';
		var id=form.elements[2].value;
		var last_updated=get_my_time();
		if(id!="")
		{		
			var data_xml="<logistics_orders>" +
						"<id>"+id+"</id>" +
						//"<awb_num>"+awb_num+"</awb_num>" +
						"<status>"+status+"</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</logistics_orders>";
			var activity_xml="<activity>" +
						"<data_id>"+id+"</data_id>" +
						"<tablename>logistics_orders</tablename>" +
						"<link_to>form198</link_to>" +
						"<title>Unmarked</title>" +
						"<notes>AWB # "+awb_num+" from received</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			update_row(data_xml,activity_xml);
		}	
		$(button).parent().parent().remove();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 200
 * form Create DRS
 * @param button
 */
function form200_delete_item(button)
{
	if(is_delete_access('form200'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[9].value;
			var last_updated=get_my_time();
			var data_xml="<logistics_orders>" +
						"<id>"+data_id+"</id>" +
						"<status>received</status>" +
						"<drs_num></drs_num>"+
						"<drs_time></drs_time>"+
						"<drs_id></drs_id>"+
						"<delivery_person></delivery_person>"+
						"<last_updated>"+last_updated+"</last_updated>" +
						"</logistics_orders>";
			update_simple(data_xml);
			$(button).parent().parent().remove();
			form200_update_serial_numbers();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage DRS
 * @param button
 */
function form201_delete_item(button)
{
	if(is_delete_access('form201'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var drs_num=form.elements[0].value;
			var data_id=form.elements[4].value;
			var data_xml="<drs>" +
						"<id>"+data_id+"</id>" +
						"</drs>";	
			var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>drs</tablename>" +
					"<link_to>form201</link_to>" +
					"<title>Delete</title>" +
					"<notes>DRS # "+drs_num+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
			
			var drs_items_xml="<logistics_orders>"+
							"<id></id>"+
							"<status exact='yes'>out for delivery</status>"+
							"<drs_num exact='yes'>"+drs_num+"</drs_num>"+
							"</logistics_orders>";			
			get_single_column_data(function(drs_items)
			{
				var data_xml="<logistics_orders>";
				var counter=1;
				var last_updated=get_my_time();
				
				drs_items.forEach(function(drs_item)
				{
					if((counter%500)===0)
					{
						data_xml+="</logistics_orders><separator></separator><logistics_orders>";
					}
						
					counter+=1;
				
					data_xml+="<row>" +
							"<id>"+drs_item+"</id>" +
							"<drs_num></drs_num>" +
							"<status>received</status>"+
							"<last_updated>"+last_updated+"</last_updated>" +
							"</row>";
				});
				data_xml+="</logistics_orders>";
				//console.log(data_xml);
				update_batch(data_xml);
				
			},drs_items_xml);
			
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Logistics Orders
 * @param button
 */
function form203_delete_item(button)
{
	if(is_delete_access('form203'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var awb_num=form.elements[0].value;
			var data_id=form.elements[2].value;
			var last_updated=get_my_time();
			var data_xml="<logistics_orders>" +
						"<id>"+data_id+"</id>" +
						"</logistics_orders>";	
			var sku_xml="<logistics_sku_mapping>" +
						"<awb_num>"+awb_num+"</awb_num>" +
						"</logistics_sku_mapping>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>logistics_orders</tablename>" +
						"<link_to>form203</link_to>" +
						"<title>Deleted</title>" +
						"<notes>AWB # "+awb_num+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(sku_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(sku_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Exchanges
 * @param button
 */
function form202_delete_item(button)
{
	if(is_update_access('form202'))
	{
		var master_form=document.getElementById("form202_master");		
		var target=master_form.elements['target'].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var awb_num=form.elements[0].value;
		var status='received';
		var id=form.elements[3].value;
		var last_updated=get_my_time();
		if(id!="")
		{
			var data_xml="<logistics_orders>" +
						"<id>"+id+"</id>" +
						//"<awb_num>"+awb_num+"</awb_num>" +
						"<status>"+status+"</status>" +
						"<current_location></current_location>"+
						"<last_updated>"+last_updated+"</last_updated>" +
						"</logistics_orders>";
			var activity_xml="<activity>" +
						"<data_id>"+id+"</data_id>" +
						"<tablename>logistics_orders</tablename>" +
						"<link_to>form198</link_to>" +
						"<title>Cancelled Transfer</title>" +
						"<notes>AWB # "+awb_num+" to "+target+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			update_row(data_xml,activity_xml);
		}	
		$(button).parent().parent().remove();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Logistics Pending Orders
 * @param button
 */
function form204_delete_item(button)
{
	if(is_update_access('form204'))
	{
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var awb_num=form.elements[0].value;
		var status='out for delivery';
		var id=form.elements[2].value;
		var last_updated=get_my_time();
		if(id!="")
		{		
			var data_xml="<logistics_orders>" +
						"<id>"+id+"</id>" +
						//"<awb_num>"+awb_num+"</awb_num>" +
						"<status>"+status+"</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</logistics_orders>";
			var activity_xml="<activity>" +
						"<data_id>"+id+"</data_id>" +
						"<tablename>logistics_orders</tablename>" +
						"<link_to>form198</link_to>" +
						"<title>Unmarked</title>" +
						"<notes>AWB # "+awb_num+" from pending</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			update_row(data_xml,activity_xml);
		}		
		$(button).parent().parent().remove();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Logistics delivered Orders
 * @param button
 */
function form205_delete_item(button)
{
	if(is_update_access('form205'))
	{
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var awb_num=form.elements[0].value;
		var status='out for delivery';
		var id=form.elements[2].value;
		var last_updated=get_my_time();
		if(id!="")
		{
			var data_xml="<logistics_orders>" +
						"<id>"+id+"</id>" +
						//"<awb_num>"+awb_num+"</awb_num>" +
						"<status>"+status+"</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</logistics_orders>";
			var activity_xml="<activity>" +
						"<data_id>"+id+"</data_id>" +
						"<tablename>logistics_orders</tablename>" +
						"<link_to>form198</link_to>" +
						"<title>Unmarked</title>" +
						"<notes>AWB # "+awb_num+" from undelivered</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			update_row(data_xml,activity_xml);
		}
		$(button).parent().parent().remove();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Logistics Pending Orders
 * @param button
 */
function form206_delete_item(button)
{
	if(is_update_access('form206'))
	{
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var awb_num=form.elements[0].value;
		var status='out for delivery';
		var id=form.elements[2].value;
		var last_updated=get_my_time();
		if(id!="")
		{		
			var data_xml="<logistics_orders>" +
						"<id>"+id+"</id>" +
						//"<awb_num>"+awb_num+"</awb_num>" +
						"<status>"+status+"</status>" +
						"<last_updated>"+last_updated+"</last_updated>" +
						"</logistics_orders>";
			var activity_xml="<activity>" +
						"<data_id>"+id+"</data_id>" +
						"<tablename>logistics_orders</tablename>" +
						"<link_to>form198</link_to>" +
						"<title>Unmarked</title>" +
						"<notes>AWB # "+awb_num+" from delivered</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			update_row(data_xml,activity_xml);
		}	
		$(button).parent().parent().remove();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Update Inventory (aurilion)
 * @param button
 */
function form207_delete_item(button)
{
	if(is_delete_access('form207'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var name=form.elements[0].value;
			var batch=form.elements[1].value;
			var data_id=form.elements[8].value;
			var last_updated=get_my_time();
			var data_xml="<product_instances>" +
						"<id>"+data_id+"</id>" +
						"</product_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_instances</tablename>" +
						"<link_to>form207</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Batch number "+batch+" of product "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<area_utilization>" +
						"<item_name>"+name+"</item_name>" +
						"<batch>"+batch+"</batch>" +
						"</area_utilization>";
			
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Treatment plans
 * @param button
 */
function form208_delete_item(button)
{
	if(is_delete_access('form208'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var plan_num=form.elements[0].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<treatment_plans>" +
						"<id>"+data_id+"</id>" +
						"</treatment_plans>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>treatment_plans</tablename>" +
						"<link_to>form208</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Treatment plan # "+plan_num+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			
			var items_xml="<treatment_plan_items>" +
						"<id></id>"+						
						"<plan_id exact='yes'>"+data_id+"</plan_id>" +
						"</treatment_plan_items>";	
			
			delete_row(data_xml,activity_xml);
			delete_simple(items_xml);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create production plan
 * @param button
 */
function form209_delete_item(button)
{
	if(is_delete_access('form209'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<treatment_plan_items>" +
						"<id>"+data_id+"</id>" +
						"</treatment_plan_items>";	
			delete_simple(data_xml);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Sale Leads
 * @param button
 */
function form213_delete_item(button)
{
	if(is_delete_access('form213'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var customer=form.elements[0].value;
			var data_id=form.elements[4].value;
			var data_xml="<sale_leads>" +
						"<id>"+data_id+"</id>" +
						"<customer>"+customer+"</customer>" +
						"</sale_leads>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>sale_leads</tablename>" +
						"<link_to>form213</link_to>" +
						"<title>Delete</title>" +
						"<notes>Sale lead for customer "+customer+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 215
 * form Create Manifest
 * @param button
 */
function form215_delete_item(button)
{
	if(is_delete_access('form215'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<bills>" +
						"<id>"+data_id+"</id>" +
						"<manifest_num></manifest_num>"+
						"<manifest_id></manifest_id>"+
						"<status></status>"+
						"<last_updated>"+last_updated+"</last_updated>" +
						"</bills>";
			update_simple(data_xml);
			$(button).parent().parent().remove();
			form215_update_serial_numbers();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 217
 * form SKU Mapping (Supplier)
 * @param button
 */
function form217_delete_item(button)
{
	if(is_delete_access('form217'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<supplier_item_mapping>" +
						"<id>"+data_id+"</id>" +
						"</supplier_item_mapping>";
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 219
 * form Create COD DRS
 * @param button
 */
function form219_delete_item(button)
{
	if(is_delete_access('form219'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[10].value;
			var last_updated=get_my_time();
			var data_xml="<logistics_orders>" +
						"<id>"+data_id+"</id>" +
						"<status>received</status>" +
						"<drs_num></drs_num>"+
						"<drs_time></drs_time>"+
						"<drs_id></drs_id>"+
						"<delivery_person></delivery_person>"+
						"<last_updated>"+last_updated+"</last_updated>" +
						"</logistics_orders>";
			update_simple(data_xml);
			$(button).parent().parent().remove();
			form219_update_serial_numbers();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Projects (CPS)
 * @param button
 */
function form220_delete_item(button)
{
	if(is_delete_access('form220'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<projects>" +
						"<id>"+data_id+"</id>" +
						"<name>"+name+"</name>" +
						"</projects>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>projects</tablename>" +
						"<link_to>form220</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Project "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<project_team>" +
					"<project_id>"+data_id+"</project_id>" +
					"</project_team>";
			var other_delete2="<project_phases>" +
					"<project_id>"+data_id+"</project_id>" +
					"</project_phases>";
			var other_delete3="<task_instances>" +
					"<source_id>"+data_id+"</source_id>" +
					"<source>projects</source>" +
					"</task_instances>";
			var access_xml="<data_access>" +
					"<tablename>projects</tablename>" +
					"<record_id>"+data_id+"</record_id>" +
					"</data_access>";
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			delete_simple(other_delete2);
			delete_simple(other_delete3);
			delete_simple(access_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Time sheet
 * @param button
 */
function form221_delete_item(button)
{
	if(is_delete_access('form221'))
	{	
		modal115_action(function()
		{	
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);	
			var data_id=form.elements[4].value;
			
			var data_xml="<timesheet>" +
						"<id>"+data_id+"</id>" +
						"</timesheet>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}
					
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Purchase Orders (Aurilion)
 * @param button
 */
function form223_delete_item(button)
{
	if(is_delete_access('form223'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var order_num=form.elements[0].value;
			var supplier_name=form.elements[1].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<purchase_orders>" +
						"<id>"+data_id+"</id>" +
						"</purchase_orders>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>purchase_orders</tablename>" +
						"<link_to>form223</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Purchase order no "+order_num+" for supplier "+supplier_name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<purchase_order_items>" +
					"<order_id>"+data_id+"</order_id>" +
					"</purchase_order_items>";
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form New Purchase Order (Aurilion)
 * @param button
 */
function form222_delete_item(button)
{
	if(is_delete_access('form222'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[8].value;
			var data_xml="<purchase_order_items>" +
						"<id>"+data_id+"</id>" +
						"</purchase_order_items>";	
			if(is_online())
			{
				server_delete_simple(data_xml);
			}
			else
			{
				local_delete_simple(data_xml);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Testing
 * @param button
 */
function form224_delete_item(button)
{
	if(is_delete_access('form224'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[5].value;
			var data_xml="<testing_process>" +
						"<id>"+data_id+"</id>" +
						"</testing_process>";	
			var data2_xml="<testing_results>" +
						"<test_id>"+data_id+"</test_id>" +
						"</testing_results>";	
			delete_simple(data_xml);
			delete_simple(data2_xml);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form New Bill
 * @param button
 */
function form225_delete_item(button)
{
	if(is_delete_access('form225'))
	{
		modal115_action(function()
		{
			var bill_id=document.getElementById("form225_master").elements['bill_id'].value;
			
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var data_id=form.elements[9].value;
			
			var data_xml="<bill_items>" +
					"<id>"+data_id+"</id>" +
					"<bill_id>"+bill_id+"</bill_id>" +
					"</bill_items>";	
			delete_simple(data_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Delivery Run
 * @param button
 */
function form226_delete_item(button)
{
	if(is_delete_access('form226'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var data_id=form.elements[5].value;
			var data_xml="<delivery_run>" +
						"<id>"+data_id+"</id>" +
						"</delivery_run>";	
			delete_simple(data_xml);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 228
 * form Demo
 * @param button
 */
function form228_delete_item(button)
{
	if(is_delete_access('form228'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var item=form.elements[0].value;
			var data_id=form.elements[6].value;
			var last_updated=get_my_time();
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"</bill_items>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>bill_items</tablename>" +
						"<link_to>form228</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Demo entry for "+item+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var data2_xml="<bill_items>" +
						"<issue_id>"+data_id+"</issue_id>" +
						"</bill_items>";	
						
			delete_row(data_xml,activity_xml);
			delete_simple(data2_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 229
 * form Hire
 * @param button
 */
function form229_delete_item(button)
{
	if(is_delete_access('form229'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var item=form.elements[0].value;
			var data_id=form.elements[6].value;
			var last_updated=get_my_time();
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"</bill_items>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>bill_items</tablename>" +
						"<link_to>form229</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Hire entry for "+item+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var data2_xml="<bill_items>" +
						"<issue_id>"+data_id+"</issue_id>" +
						"</bill_items>";	
						
			delete_row(data_xml,activity_xml);
			delete_simple(data2_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * formNo 230
 * form In-out
 * @param button
 */
function form230_delete_item(button)
{
	if(is_delete_access('form230'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var item=form.elements[0].value;
			var issue_type=form.elements[2].value;
			var data_id=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<bill_items>" +
						"<id>"+data_id+"</id>" +
						"</bill_items>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>bill_items</tablename>" +
						"<link_to>form230</link_to>" +
						"<title>Deleted</title>" +
						"<notes>"+issue_type+" entry for "+item+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Prescriptions
 * @param button
 */
function form231_delete_item(button)
{
	if(is_delete_access('form231'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<prescription_items>" +
						"<id>"+data_id+"</id>" +
						"</prescription_items>";	
			delete_simple(data_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Prescriptions
 * @param button
 */
function form232_delete_item(button)
{
	if(is_delete_access('form232'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var pres_num=form.elements[0].value;
			var patient=form.elements[2].value;
			var data_id=form.elements[5].value;
			var last_updated=get_my_time();
			var data_xml="<prescriptions>" +
						"<id>"+data_id+"</id>" +
						"</prescriptions>";
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>prescriptions</tablename>" +
						"<link_to>form232</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Prescription # "+pres_num+" for "+patient+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			delete_row(data_xml,activity_xml);
			
			var items_xml="<prescription_items>" +
						"<id></id>"+						
						"<p_id exact='yes'>"+data_id+"</p_id>" +
						"</prescription_items>";	
			delete_simple(items_xml);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Products (without tax)
 * @param button
 */
function form234_delete_item(button)
{
	if(is_delete_access('form234'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[0].value;
			var make=form.elements[1].value;
			var description=form.elements[2].value;
			var data_id=form.elements[3].value;
			var last_updated=get_my_time();
			var data_xml="<product_master>" +
						"<id>"+data_id+"</id>" +
						"</product_master>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_master</tablename>" +
						"<link_to>form234</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Product "+name+" from inventory</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<product_instances>" +
					"<product_name>"+name+"</product_name>" +
					"</product_instances>";
			var other_delete2="<documents>" +
					"<doc_type>product</doc_type>" +
					"<target_id>"+data_id+"</target_id>" +
					"</documents>";
			var other_delete3="<pre_requisites>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</pre_requisites>";
			var other_delete4="<attributes>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</attributes>";
			var other_delete5="<cross_sells>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</cross_sells>";
			var other_delete6="<reviews>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</reviews>";
	
			if(is_online())
			{
				server_delete_row(data_xml,activity_xml);
				server_delete_simple(other_delete);
				server_delete_simple(other_delete2);
				server_delete_simple(other_delete3);
				server_delete_simple(other_delete4);
				server_delete_simple(other_delete5);
				server_delete_simple(other_delete6);
			}
			else
			{
				local_delete_row(data_xml,activity_xml);
				local_delete_simple(other_delete);
				local_delete_simple(other_delete2);
				local_delete_simple(other_delete3);
				local_delete_simple(other_delete4);
				local_delete_simple(other_delete5);
				local_delete_simple(other_delete6);
			}	
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Products (grid)
 * @param button
 */
function form235_delete_item(button)
{
	if(is_delete_access('form235'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			
			var name=form.elements[3].value;
			var make=form.elements[4].value;
			var description=form.elements[2].value;
			var tax=form.elements[5].value;
			var data_id=form.elements[7].value;
			var last_updated=get_my_time();
			var data_xml="<product_master>" +
						"<id>"+data_id+"</id>" +
						"</product_master>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_master</tablename>" +
						"<link_to>form235</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Product "+name+" from inventory</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<product_instances>" +
					"<product_name>"+name+"</product_name>" +
					"</product_instances>";
			var other_delete2="<documents>" +
					"<doc_type>product_master</doc_type>" +
					"<target_id>"+data_id+"</target_id>" +
					"</documents>";
			var other_delete3="<pre_requisites>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</pre_requisites>";
			var other_delete4="<attributes>" +
					"<name exact='yes'>"+name+"</name>" +
					"<type>product</type>" +
					"</attributes>";
			var other_delete5="<cross_sells>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</cross_sells>";
			var other_delete6="<reviews>" +
					"<name>"+name+"</name>" +
					"<type>product</type>" +
					"</reviews>";
	
			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			delete_simple(other_delete2);
			delete_simple(other_delete3);
			delete_simple(other_delete4);
			delete_simple(other_delete5);
			delete_simple(other_delete6);
			
			$(button).parent().parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage manifests
 * @param button
 */
function form236_delete_item(button)
{
	if(is_delete_access('form236'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var drs_num=form.elements[0].value;
			var data_id=form.elements[3].value;
			var data_xml="<drs>" +
						"<id>"+data_id+"</id>" +
						"</drs>";	
			var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>drs</tablename>" +
					"<link_to>form236</link_to>" +
					"<title>Delete</title>" +
					"<notes>Manifest # "+drs_num+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
			
			var drs_items_xml="<bills>"+
							"<id></id>"+
							"<manifest_num exact='yes'>"+drs_num+"</manifest_num>"+
							"</bills>";			
			get_single_column_data(function(drs_items)
			{
				var data_xml="<bills>";
				var counter=1;
				var last_updated=get_my_time();
				
				drs_items.forEach(function(drs_item)
				{
					if((counter%500)===0)
					{
						data_xml+="</bills><separator></separator><bills>";
					}
						
					counter+=1;
				
					data_xml+="<row>" +
							"<id>"+drs_item+"</id>" +
							"<manifest_num></manifest_num>" +
							"<manifest_id></manifest_id>" +
							"<last_updated>"+last_updated+"</last_updated>" +
							"</row>";
				});
				data_xml+="</bills>";
				//console.log(data_xml);
				update_batch(data_xml);
				
			},drs_items_xml);
			
			delete_row(data_xml,activity_xml);
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Raw Material Inventory
 * @param button
 */
function form238_delete_item(button)
{
	if(is_delete_access('form238'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);
			var name=form.elements[0].value;
			var batch=form.elements[1].value;
			var data_id=form.elements[4].value;
			var last_updated=get_my_time();
			var data_xml="<product_instances>" +
						"<id>"+data_id+"</id>" +
						"</product_instances>";	
			var activity_xml="<activity>" +
						"<data_id>"+data_id+"</data_id>" +
						"<tablename>product_instances</tablename>" +
						"<link_to>form238</link_to>" +
						"<title>Deleted</title>" +
						"<notes>Batch number "+batch+" of product "+name+"</notes>" +
						"<updated_by>"+get_name()+"</updated_by>" +
						"</activity>";
			var other_delete="<area_utilization>" +
						"<item_name>"+name+"</item_name>" +
						"<batch>"+batch+"</batch>" +
						"</area_utilization>";
			var other_delete2="<inventory_adjust>" +
						"<product_name>"+name+"</product_name>" +
						"<batch>"+batch+"</batch>" +
						"</inventory_adjust>";	

			delete_row(data_xml,activity_xml);
			delete_simple(other_delete);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage material requirements
 * @param button
 */
function form239_delete_item(button)
{
	if(is_delete_access('form239'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var item_name=form.elements[0].value;
			var data_id=form.elements[2].value;
			var data_xml="<manage_pre_requisites>" +
						"<id>"+data_id+"</id>" +
						"</manage_pre_requisites>";
			var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>manage_pre_requisites</tablename>" +
					"<link_to>form239</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Raw material requirements for "+item_name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";

			var pre_requisites_xml="<pre_requisites>"+
							"<name exact='yes'>"+item_name+"</name>"+
							"</pre_requisites>";
			
			delete_row(data_xml,activity_xml);
			delete_simple(pre_requisites_xml);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Assign material requirements
 * @param button
 */
function form240_delete_item(button)
{
	if(is_delete_access('form240'))
	{
		modal115_action(function()
		{
			var form_id=$(button).attr('form');
			var form=document.getElementById(form_id);

			var data_id=form.elements[2].value;
			
			var pre_requisites_xml="<pre_requisites>"+
							"<id>"+data_id+"</id>"+
							"</pre_requisites>";
			delete_simple(pre_requisites_xml);
			
			$(button).parent().parent().remove();
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}
