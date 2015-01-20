/**
 * @form Update Inventory
 * @param button
 */
function form1_delete_item(button)
{
	if(is_delete_access('form1'))
	{
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		var name=form.elements[0].value;
		var batch=form.elements[1].value;
		var cost_price=form.elements[2].value;
		var expiry=get_raw_time(form.elements[4].value);
		var data_id=form.elements[7].value;
		var last_updated=get_my_time();
		var data_xml="<product_instances>" +
					"<id>"+data_id+"</id>" +
					"<product_name>"+name+"</product_name>" +
					"<batch>"+batch+"</batch>" +
					"<expiry>"+expiry+"</expiry>" +
					"<cost_price>"+cost_price+"</cost_price>" +
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
		
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
			server_delete_simple(other_delete);
			server_delete_simple(other_delete2);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
			local_delete_simple(other_delete);
			local_delete_simple(other_delete2);
		}	
		$(button).parent().parent().remove();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Pamphlets
 * @param button
 */
function form2_delete_item(button)
{
	if(is_delete_access('form2'))
	{
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[3].value;
		var data_xml="<pamphlet_items>" +
					"<id>"+data_id+"</id>" +
					"</pamphlet_items>";	
		if(is_online())
		{
			server_delete_simple(data_xml);
		}
		else
		{
			local_delete_simple(data_xml);
		}	
		$(button).parent().parent().remove();
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var data_id=form.elements[5].value;
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
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
			server_delete_simple(account_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
			local_delete_simple(account_xml);
		}	
		$(button).parent().parent().remove();
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
		//console.log('deleting form10_item');
		var bill_id=document.getElementById("form10_master").elements[3].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		var name=form.elements[0].value;
		var staff=form.elements[1].value;
		var notes=form.elements[2].value;
		var price=form.elements[3].value;
		var total=form.elements[4].value;
		var amount=form.elements[5].value;
		var discount=form.elements[6].value;
		var tax=form.elements[7].value;
		var offer=form.elements[8].value;
		var data_id=form.elements[9].value;
		var last_updated=get_my_time();
		
		var data_xml="<bill_items>" +
					"<id>"+data_id+"</id>" +
					"<bill_id>"+bill_id+"</bill_id>" +
					"</bill_items>";
		var task_xml="<task_instances>" +
					"<source_id>"+data_id+"</source_id>" +
					"<source>service</source>" +
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
		var bill_id=document.getElementById("form12_master").elements[3].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var batch=form.elements[1].value;
		var quantity=form.elements[2].value;
		var price=form.elements[3].value;
		var total=form.elements[4].value;
		var amount=form.elements[5].value;
		var discount=form.elements[6].value;
		var tax=form.elements[7].value;
		var offer=form.elements[8].value;
		var data_id=form.elements[9].value;
		var last_updated=get_my_time();
		
				
		var data_xml="<bill_items>" +
					"<id>"+data_id+"</id>" +
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
		var return_id=document.getElementById("form15_master").elements[3].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var batch=form.elements[1].value;
		var notes=form.elements[2].value;
		var quantity=form.elements[3].value;
		var type=form.elements[5].value;
		var total_batch=form.elements[6].value;
		var tax=form.elements[7].value;
		var data_id=form.elements[8].value;
		var last_updated=get_my_time();
			
		var data_xml="<customer_return_items>" +
				"<id>"+data_id+"</id>" +
				"<return_id>"+return_id+"</return_id>" +
				"<item_name>"+name+"</item_name>" +
				"<batch>"+batch+"</batch>" +
				"<tax>"+tax+"</tax>" +
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[0].value;
		var customer=form.elements[1].value;
		var total=form.elements[3].value;
		var transaction_id=form.elements[6].value;
		var last_updated=get_my_time();
		var return_xml="<customer_returns>" +
					"<id>"+data_id+"</id>" +
					"<customer>"+customer+"</customer>" +
					"<total>"+total+"</total>" +
					"</customer_returns>";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>customer_returns</tablename>" +
					"<link_to>form16</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Return no "+data_id+" for customer "+customer+"</notes>" +
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
		var bill_id=document.getElementById("form21_master").elements[6].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[10].value;
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
		var order_id=document.getElementById("form24_master").elements[5].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var quantity=form.elements[1].value;
		var make=form.elements[2].value;
		var price=form.elements[3].value;
		var data_id=form.elements[4].value;
		var last_updated=get_my_time();
		var data_xml="<purchase_order_items>" +
					"<id>"+data_id+"</id>" +
					"<product_name>"+name+"</product_name>" +
					"<quantity>"+quantity+"</quantity>" +
					"<make>"+make+"</make>" +
					"<price>"+price+"</price>" +
					"<order_id>"+order_id+"</order_id>" +
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var phone=form.elements[1].value;
		var email=form.elements[2].value;
		var status=form.elements[4].value;
		var data_id=form.elements[5].value;
		var address=form.elements[8].value;
		var pincode=form.elements[9].value;
		var city=form.elements[10].value;
		var state=form.elements[11].value;
		var country=form.elements[12].value;
		var address_status=form.elements[13].value;
		var last_updated=get_my_time();
		var data_xml="<customers>" +
					"<id>"+data_id+"</id>" +
					"<name>"+name+"</name>" +
					"<phone>"+phone+"</phone>" +
					"<email>"+email+"</email>" +
					"<acc_name>"+name+" ("+phone+")</acc_name>" +
					"<status>"+status+"</status>" +
					"<address>"+address+"</address>" +
					"<pincode>"+pincode+"</pincode>" +
					"<city>"+city+"</city>" +
					"<state>"+state+"</state>" +
					"<country>"+country+"</country>" +
					"<address_status>"+address_status+"</address_status>" +
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
					"<acc_name>"+name+" ("+phone+")</acc_name>" +
					"<type>customer</type>" +
					"</accounts>";
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
			server_delete_simple(account_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
			local_delete_simple(account_xml);
		}	
		$(button).parent().parent().remove();
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var product_name=form.elements[0].value;
		var batch=form.elements[1].value;
		var name=form.elements[2].value;
		var data_id=form.elements[3].value;
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
				"<doc_type>product</doc_type>" +
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var phone=form.elements[1].value;
		var email=form.elements[2].value;
		var address=form.elements[3].value;
		var notes=form.elements[4].value;
		var data_id=form.elements[5].value;
		var address=form.elements[8].value;
		var pincode=form.elements[9].value;
		var city=form.elements[10].value;
		var state=form.elements[11].value;
		var country=form.elements[12].value;
		var address_status=form.elements[13].value;
		var last_updated=get_my_time();
		var data_xml="<suppliers>" +
					"<id>"+data_id+"</id>" +
					"<name>"+name+"</name>" +
					"<address>"+address+"</address>" +
					"<phone>"+phone+"</phone>" +
					"<notes>"+notes+"</notes>" +
					"<acc_name>"+name+" ("+phone+")</acc_name>" +
					"<email>"+email+"</email>" +
					"<address>"+address+"</address>" +
					"<pincode>"+pincode+"</pincode>" +
					"<city>"+city+"</city>" +
					"<state>"+state+"</state>" +
					"<country>"+country+"</country>" +
					"<address_status>"+address_status+"</address_status>" +
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
					"<acc_name>"+name+" ("+phone+")</acc_name>" +
					"<type>supplier</type>" +
					"</accounts>";
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
			server_delete_simple(account_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
			local_delete_simple(account_xml);
		}	
		$(button).parent().parent().remove();
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[0].value;
		var customer_name=form.elements[1].value;
		var bill_date=get_raw_time(form.elements[2].value);
		var amount=form.elements[3].value;
		var transaction_id=form.elements[6].value;
		var last_updated=get_my_time();
		var bill_xml="<bills>" +
					"<id>"+data_id+"</id>" +
					"<customer_name>"+customer_name+"</customer_name>" +
					"<bill_date>"+bill_date+"</bill_date>" +
					"<amount>"+amount+"</amount>" +
					"</bills>";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>bills</tablename>" +
					"<link_to>form42</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Bill no "+data_id+" for customer "+customer_name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		var transaction_xml="<transactions>" +
				"<id>"+transaction_id+"</id>" +
				"</transactions>";
		var points_xml="<loyalty_points>" +
					"<source>sale</source>"+
					"<source_id>"+data_id+"</source_id>" +
					"</loyalty_points>";	
		if(is_online())
		{
			server_delete_row(bill_xml,activity_xml);
			server_delete_simple(transaction_xml);
			server_delete_simple(points_xml);
		}
		else
		{
			local_delete_row(bill_xml,activity_xml);
			local_delete_simple(transaction_xml);
			local_delete_simple(points_xml);
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

		var items_data="<bill_items>" +
				"<id></id>" +
				"<bill_id exact='yes'>"+data_id+"</bill_id>" +
				"</bill_items>";
		fetch_requested_data('',items_data,function(bill_items)
		{
			bill_items.forEach(function(bill_item)
			{
				var task_xml="<task_instances>" +
						"<source_id>"+bill_item.id+"</source_id>" +
						"<source>service</source>" +
						"</task_instances>";

				if(is_online())
				{
					server_delete_simple(task_xml);
				}
				else
				{
					local_delete_simple(task_xml);
				}
			});	
			
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[0].value;
		var supplier_name=form.elements[1].value;
		var status=form.elements[4].value;
		var last_updated=get_my_time();
		var data_xml="<purchase_orders>" +
					"<id>"+data_id+"</id>" +
					"<supplier>"+supplier_name+"</supplier>" +
					"<status>"+status+"</status>" +
					"</purchase_orders>";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>purchase_orders</tablename>" +
					"<link_to>form43</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Purchase order no "+data_id+" for supplier "+supplier_name+"</notes>" +
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var data_id=form.elements[1].value;
		var last_updated=get_my_time();
		var data_xml="<pamphlets>" +
					"<id>"+data_id+"</id>" +
					"<name>"+name+"</name>" +
					"</pamphlets>";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>pamphlets</tablename>" +
					"<link_to>form44</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Pamphlet "+name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		var other_delete="<pamphlet_items>" +
				"<pamphlet_id>"+data_id+"</pamphlet_id>" +
				"</pamphlet_items>";
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var bill_id=form.elements[0].value;
		var supplier=form.elements[1].value;
		var data_id=form.elements[5].value;
		var transaction_id=form.elements[8].value;
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

		if(is_online())
		{
			server_delete_row(bill_xml,activity_xml);
			server_delete_simple(transaction_xml);
		}
		else
		{
			local_delete_row(bill_xml,activity_xml);
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

		
		var items_data="<supplier_bill_items>" +
				"<bill_id>"+data_id+"</bill_id>" +
				"</supplier_bill_items>";
		if(is_online())
		{
			server_delete_simple(items_data);
		}
		else
		{
			local_delete_simple(items_data);
		}
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var service=form.elements[0].value;
		var description=form.elements[1].value;
		var price=form.elements[2].value;
		var duration=form.elements[3].value;
		var tax=form.elements[4].value;
		var data_id=form.elements[5].value;
		var last_updated=get_my_time();
		var data_xml="<services>" +
					"<id>"+data_id+"</id>" +
					"<name unique='yes'>"+service+"</name>" +
					"<description>"+description+"</description>" +
					"<price>"+price+"</price>" +
					"<duration>"+duration+"</duration>" +
					"<tax>"+tax+"</tax>" +
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
			local_delete_simple(other_delete3);
			local_delete_simple(other_delete4);
			local_delete_simple(other_delete5);
			local_delete_simple(other_delete6);
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
		var order_id=document.getElementById("form69_master").elements[4].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var quantity=form.elements[1].value;
		var notes=form.elements[2].value;
		var data_id=form.elements[3].value;
		var last_updated=get_my_time();
		var data_xml="<sale_order_items>" +
					"<id>"+data_id+"</id>" +
					"<item_name>"+name+"</item_name>" +
					"<quantity>"+quantity+"</quantity>" +
					"<notes>"+notes+"</notes>" +
					"<order_id>"+order_id+"</order_id>" +
					"</sale_order_items>";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>sale_order_items</tablename>" +
					"<link_to>form69</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Product "+name+" from order no. "+order_id+"</notes>" +
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
		var bill_id=document.getElementById("form72_master").elements[3].value;
		
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var name=form.elements[0].value;
		var data_id=form.elements[2].value;
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
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
			server_delete_simple(sale_prices_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
			local_delete_simple(sale_prices_xml);
		}	
		$(button).parent().parent().remove();
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
		var bill_id=document.getElementById("form91_master").elements[4].value;
		
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[0].value;
		var customer_name=form.elements[2].value;
		var transaction_id=form.elements[7].value;
		var last_updated=get_my_time();
		var bill_xml="<bills>" +
					"<id>"+data_id+"</id>" +
					"<customer_name>"+customer_name+"</customer_name>" +
					"</bills>";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>bills</tablename>" +
					"<link_to>form92</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Bill no "+data_id+" for customer "+customer_name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		var transaction_xml="<transactions>" +
				"<id>"+transaction_id+"</id>" +
				"</transactions>";

		if(is_online())
		{
			server_delete_row(bill_xml,activity_xml);
			server_delete_simple(transaction_xml);
		}
		else
		{
			local_delete_row(bill_xml,activity_xml);
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
		fetch_requested_data('',items_data,function(bill_items)
		{
			bill_items.forEach(function(bill_item)
			{
				var task_xml="<task_instances>" +
						"<source_id>"+bill_item.id+"</source_id>" +
						"<source>service</source>" +
						"</task_instances>";

				if(is_online())
				{
					server_delete_simple(task_xml);
				}
				else
				{
					local_delete_simple(task_xml);
				}
			});	
			
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
 * @form Manage Loans
 * @formNo 93
 * @param button
 */
function form93_delete_item(button)
{
	if(is_delete_access('form93'))
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
		if(is_online())
		{
			server_delete_row(loan_xml,activity_xml);
		}
		else
		{
			local_delete_row(loan_xml,activity_xml);
		}	
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
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Discard Items
 * @formN0 94
 * @param button
 */
function form94_delete_item(button)
{
	if(is_delete_access('form94'))
	{
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		var name=form.elements[0].value;
		var batch=form.elements[1].value;
		var data_id=form.elements[3].value;
		var last_updated=get_my_time();
		var data_xml="<discarded>" +
					"<id>"+data_id+"</id>" +
					"<product_name>"+name+"</product_name>" +
					"<batch>"+batch+"</batch>" +
					"</discarded>";	
		var activity_xml="<activity>" +
					"<data_id>"+data_id+"</data_id>" +
					"<tablename>discarded</tablename>" +
					"<link_to>form94</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Batch number "+batch+" of product "+name+" from discarded list</notes>" +
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
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
		}	
		$(button).parent().parent().remove();
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
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
		}	
		$(button).parent().parent().remove();
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
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
		}	
		$(button).parent().parent().remove();
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
		var other_delete3="<tasks_instances>" +
				"<source_id>"+data_id+"</source_id>" +
				"<source>projects</source>" +
				"</tasks_instances>";
		var access_xml="<data_access>" +
				"<tablename>projects</tablename>" +
				"<record_id>"+data_id+"</record_id>" +
				"</data_access>";
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
			server_delete_simple(other_delete);
			server_delete_simple(other_delete2);
			server_delete_simple(other_delete3);
			server_delete_simple(access_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
			local_delete_simple(other_delete);
			local_delete_simple(other_delete2);
			local_delete_simple(other_delete3);
			local_delete_simple(access_xml);
		}	
		$(button).parent().parent().remove();
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
		if(is_online())
		{
			server_delete_simple(data_xml);
			server_delete_simple(access_xml);
		}
		else
		{
			local_delete_simple(data_xml);
			local_delete_simple(access_xml);
		}	
		$(button).parent().parent().remove();
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
		if(is_online())
		{
			server_delete_simple(data_xml);
			server_delete_simple(access_xml);
		}
		else
		{
			local_delete_simple(data_xml);
			local_delete_simple(access_xml);
		}	
		$(button).parent().parent().remove();
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
		if(is_online())
		{
			server_delete_simple(data_xml);
			server_delete_simple(access_xml);
		}
		else
		{
			local_delete_simple(data_xml);
			local_delete_simple(access_xml);
		}	
		$(button).parent().parent().remove();
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[4].value;
		var last_updated=get_my_time();
		var data_xml="<data_access>" +
					"<id>"+data_id+"</id>" +
					"</data_access>";	
		if(is_online())
		{
			server_delete_simple(data_xml);
		}
		else
		{
			local_delete_simple(data_xml);
		}	
		$(button).parent().parent().remove();
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
					"<link_to>form108</link_to>" +
					"<title>Deleted</title>" +
					"<notes>Sale Order no "+data_id+" for customer "+customer_name+"</notes>" +
					"<updated_by>"+get_name()+"</updated_by>" +
					"</activity>";
		var other_delete="<sale_order_items>" +
				"<order_id>"+data_id+"</order_id>" +
				"</sale_order_items>";
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
		if(is_online())
		{
			server_delete_row(data_xml,activity_xml);
		}
		else
		{
			local_delete_row(data_xml,activity_xml);
		}	
		$(button).parent().parent().remove();
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[3].value;
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[5].value;
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[3].value;
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[5].value;
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
		var bill_id=document.getElementById("form118_master").elements[3].value;
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
		var bill_id=document.getElementById("form119_master").elements[5].value;
		
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
		var bill_id=document.getElementById("form21_master").elements[7].value;
		
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var data_id=form.elements[10].value;
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
		var form_id=$(button).attr('form');
		var form=document.getElementById(form_id);
		
		var object=form.elements[0].value;
		var attribute=form.elements[1].value;
		var data_id=form.elements[3].value;
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
	}
	else
	{
		$("#modal2").dialog("open");
	}
}
