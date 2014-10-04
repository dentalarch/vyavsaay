/**
 * @form Update Inventory
 * @formNo 1
 */
function form1_add_item()
{
	if(is_create_access('form1'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form1_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form1_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form1_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form1_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form1_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form1_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form1_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form1_"+id+"' value='Save' onclick='form1_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form1_"+id+"' value='Delete' onclick='form1_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form1_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form1_"+id);
		var names_filter=fields.elements[0];
		var batches_filter=fields.elements[1];
		var expiry_filter=fields.elements[2];
		var price_filter=fields.elements[3];
		var quantity_filter=fields.elements[4];
	
		$(names_filter).focus();
		
		var products_data="<product_master>" +
			"<name></name>" +
			"</product_master>";
	
		set_my_value_list(products_data,names_filter);
				
		$(expiry_filter).datepicker();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Create Pamphlets
 * @formNo 2
 */
function form2_add_item()
{
	if(is_create_access('form2'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form2_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form2_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form2_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' readonly='readonly' form='form2_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' readonly='readonly' form='form2_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form2_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form2_"+id+"' id='delete_form2_"+id+"' value='Delete' onclick='form2_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form2_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form2_"+id);
		var names_filter=fields.elements[0];
		var offer_filter=fields.elements[1];
		var offer_details=fields.elements[2];
		var price_filter=fields.elements[3];
		
		$(names_filter).focus();
		
		var products_data="<product_master>" +
			"<name></name>" +
			"</product_master>";
	
		set_my_value_list(products_data,names_filter);
		
		$(names_filter).on('blur',function(event)
		{
			var offer_data="<offers>" +
			"<id></id>" +
			"<product_name>"+names_filter.value+"</product_name>" +
			"<status>active</status>" +
			"</offers>";
			
			set_my_value_list(offer_data,offer_filter);
		});
		
		$(offer_filter).on('blur',function(event)
		{
			var offer_detail_data="<offers>" +
				"<offer_detail></offer_detail>" +
				"<id>"+offer_filter.value+"</id>" +
				"</offers>";
			var price_data="<offers>" +
				"<offer_detail></offer_detail>" +
				"<id>"+offer_filter.value+"</id>" +
				"</offers>";
	
			set_my_value(offer_detail_data,offer_details);
			set_my_value(price_data,price_filter);
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}		
}

/**
 * @form Manage Assets
 * @formNo 5
 */
function form5_add_item()
{
	if(is_create_access('form5'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form5_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form5_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form5_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form5_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form5_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form5_"+id+"' value=''>";
				rowsHTML+="<img class='filter_icon' src='./images/add.jpeg' form='form5_"+id+"' value='Save' onclick='form5_add_maintenance($(this));'>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form5_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form5_"+id+"' value='Save' onclick='form5_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form5_"+id+"' value='Delete' onclick='form5_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form5_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form5_"+id);
		var task_filter=fields.elements[0];
		var date_filter=fields.elements[1];
		var owner_filter=fields.elements[2];
		var type_filter=fields.elements[3];
		
		$(task_filter).focus();
		
		var staff_data="<staff>" +
				"<acc_name></acc_name>" +
				"<status>active</status>" +
				"</staff>";
		set_my_value_list(staff_data,owner_filter);
		
		$(date_filter).datepicker();
		$(date_filter).val(get_my_date());
		
		set_static_value_list('assets','type',type_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Staff
 * @formNo 8
 */
function form8_add_item()
{
	if(is_create_access('form8'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form8_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form8_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form8_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form8_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form8_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form8_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form8_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form8_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form8_"+id+"' value='Save' onclick='form8_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form8_"+id+"' value='Delete' onclick='form8_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form8_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form8_"+id);
		var name_filter=fields.elements[0];
		var staff_filter=fields.elements[5];
		
		$(name_filter).focus();
		set_static_value_list('staff','status',staff_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}	
}

/**
 * @form Cash Register
 * @formNo 9
 */
function form9_add_item()
{
	if(is_create_access('form9'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form9_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form9_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form9_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form9_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form9_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form9_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form9_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form9_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form9_"+id+"' value='Save' onclick='form9_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form9_"+id+"' value='Delete' onclick='form9_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form9_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form9_"+id);
		var type_filter=fields.elements[0];
		var date_filter=fields.elements[1];
		var from_filter=fields.elements[2];
		var to_filter=fields.elements[3];
		var system_filter=fields.elements[5];
		
		$(type_filter).focus();
	
		var accounts_data="<accounts>" +
			"<acc_name></acc_name>" +
			"</accounts>";
		
		set_static_value_list("transactions",'type',type_filter);
		set_static_value_list("transactions",'system_generated',system_filter);
		
		set_my_value_list(accounts_data,from_filter);
		set_my_value_list(accounts_data,to_filter);
		
		$(date_filter).datepicker();
		$(date_filter).val(get_my_date());
	}
	else
	{
		$("#modal2").dialog("open");
	}	
}


/**
 * @form Create Service Receipt
 * @formNo 10
 */
function form10_add_item()
{
	if(is_create_access('form10'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form10_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form10_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form10_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form10_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form10_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form10_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form10_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form10_"+id+"' id='save_form10_"+id+"' value='Save' onclick='form10_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form10_"+id+"' id='delete_form10_"+id+"' value='Delete' onclick='form10_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form10_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form10_"+id);
		var service_filter=fields.elements[0];
		var assignee_filter=fields.elements[4];
		$(service_filter).focus();
	
		var service_data="<services>" +
				"<name></name>" +
				"</services>";
		
		var assignee_data="<staff>" +
				"<acc_name></acc_name>" +
				"<status>active</status>" +
				"</staff>";
		
		set_my_value_list(service_data,service_filter);
		set_my_value_list(assignee_data,assignee_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}	
}

/**
 * @form Schedule Payments
 * @formNo 11
 */
function form11_add_item()
{
	if(is_create_access('form11'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form11_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form11_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form11_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form11_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form11_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form11_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form11_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form11_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form11_"+id+"' value='Save' onclick='form11_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form11_"+id+"' value='Delete' onclick='form11_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form11_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form11_"+id);
		var trans_filter=fields.elements[0];
		var account_filter=fields.elements[1];
		var amount_filter=fields.elements[2];
		var due_filter=fields.elements[3];
		var status_filter=fields.elements[4];
		var date_filter=fields.elements[5];
		
		$(trans_filter).focus();
		$(due_filter).datepicker();
		$(date_filter).datepicker();
		$(date_filter).val(get_my_date());
		
		set_static_value_list('payments','status',status_filter);
		
		var trans_data="<transactions>" +
				"<id></id>" +
				"</transactions>";
		
		set_my_value_list(trans_data,trans_filter);
		
		$(trans_filter).on('blur',function(event)
		{
			var account_data="<transactions>" +
				"<acc_name></acc_name>" +
				"<id>"+trans_filter.value+"</id>" +
				"</transactions>";
			
			set_my_value_list(account_data,account_filter);
		});	
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form New Bill
 * @formNo 12
 */
function form12_add_item()
{
	if(is_create_access('form12'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form12_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form12_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form12_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' readonly='readonly' form='form12_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form12_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form12_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form12_"+id+"' id='save_form12_"+id+"' value='Save' onclick='form12_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form12_"+id+"' id='delete_form12_"+id+"' value='Delete' onclick='form12_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form12_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form12_"+id);
		var name_filter=fields.elements[0];
		var batch_filter=fields.elements[1];
		var price_filter=fields.elements[2];
		
		$(name_filter).focus();
	
		var product_data="<product_master>" +
				"<name></name>" +
				"</product_master>";
		
		set_my_value_list(product_data,name_filter);
		
		$(name_filter).on('blur',function(event){
			var batch_data="<product_instances>" +
					"<batch></batch>" +
					"<product_name>"+name_filter.value+"</prodcut_name>" +
					"</product_instances>";
			set_my_value_list(batch_data,batch_filter);
		});
		
		$(batch_filter).on('blur',function(event){
			var batch_data="<product_instances>" +
					"<price></price>" +
					"<batch>"+batch_filter.value+"</batch>" +
					"</product_instances>";
			set_my_value(price_data,price_filter);
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Tasks
 * @formNo 14
 */
function form14_add_item()
{
	if(is_create_access('form14'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form14_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form14_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' readonly='readonly' form='form14_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form14_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form14_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form14_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form14_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form14_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form14_"+id+"' value='Save' onclick='form14_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form14_"+id+"' value='Delete' onclick='form14_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form14_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form14_"+id);
		var name_filter=fields.elements[0];
		var desc_filter=fields.elements[1];
		var assignee_filter=fields.elements[2];
		var due_filter=fields.elements[3];
		var status_filter=fields.elements[3];
		var exec_filter=fields.elements[3];
		
		$(name_filter).focus();
	
		var tasks_data="<task_type>" +
				"<name></name>" +
				"</task_type>";
		set_my_value_list(tasks_data,name_filter);
		
		$(name_filter).on('blur',function(event)
		{
			var desc_data="<task_type>" +
				"<description></description>" +
				"<name>"+name_filter.value+"</name>" +
				"</task_type>";
			set_my_value_list(desc_data,desc_filter);
		});
		
		var staff_data="<staff>" +
				"<acc_name></acc_name>" +
				"</staff>";
		set_my_value_list(staff_data,assignee_filter);
		
		set_static_value_list('task_instances','status',status_filter);
		$(due_filter).datepicker();
		$(due_filter).val(get_my_date());
		$(exec_filter).datepicker();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * this function adds a new row to the accept returns form
 * @form Accept Returns
 * @formNo 15
 */
function form15_add_item()
{
	if(is_create_access('form15'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form15_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form15_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form15_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form15_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form15_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' readonly='readonly' form='form15_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form15_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form15_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form15_"+id+"' value='Save' onclick='form15_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form15_"+id+"' value='Delete' onclick='form15_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form15_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form15_"+id);
		var customer_filter=fields.elements[0];
		var bill_filter=fields.elements[1];
		var product_filter=fields.elements[2];
		var batch_filter=fields.elements[3];
		var amount_filter=fields.elements[4];
		var quantity_fitler=fields.elements[5];
		
		$(customer_filter).focus();
		
		var customers_data="<customers>" +
			"<acc_name></acc_name>" +
			"</customers>";
		set_my_value_list(customers_data,customer_filter);
		
		$(customer_filter).on('blur',function(event)
		{
			var bill_data="<bills>" +
				"<id></id>" +
				"<customer_name>"+customer_filter.value+"</customer_name>" +
				"</bills>";
			set_my_value_list(bill_data,bill_filter);
		});
		
		$(bill_filter).on('blur',function(event)
		{
			var product_data="<bill_items>" +
				"<product_name></product_name>" +
				"<bill_id>"+bill_filter.value+"</bill_id>" +
				"</bill_items>";
			set_my_value_list(product_data,product_filter);
		});
				
		$(product_filter).on('blur',function(event)
		{
			var batch_data="<bill_items>" +
				"<batch></batch>" +
				"<product_name>"+product_filter.value+"</product_name>" +
				"<bill_id>"+bill_filter.value+"</bill_id>" +
				"</bill_items>";
			set_my_value_list(batch_data,batch_filter);
		});
		
		$(batch_filter).on('blur',function(event)
		{
			var amount_data="<bill_items>" +
				"<price></price>" +
				"<batch>"+batch_filter.value+"</batch>" +
				"<product_name>"+product_filter.value+"</product_name>" +
				"<bill_id>"+bill_filter.value+"</bill_id>" +
				"</bill_items>";
			set_my_value_list(amount_data,amount_filter);
		});
	}
	else
	{
		$("#modal2").dialog("open");
	}
};

/**
 * @form Manage Returns
 * @formNo 19
 */
function form19_add_item()
{
	if(is_create_access('form19'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form19_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form19_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form19_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form19_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form19_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form19_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form19_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form19_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form19_"+id+"' value='Save' onclick='form19_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form19_"+id+"' value='Delete' onclick='form19_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form19_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form19_"+id);
		var product_filter=fields.elements[0];
		var batch_filter=fields.elements[1];
		var bill_filter=fields.elements[2];
		var supplier_filter=fields.elements[3];
		var reason_filter=fields.elements[4];
		var quantity_filter=fields.elements[5];
		
		$(product_filter).focus();
	
		var products_data="<goods_received>" +
			"<product_name></product_name>" +
			"</goods_received>";
		set_my_value_list(products_data,product_filter);
		
		$(product_filter).on('blur',function(event)
		{
			var batch_data="<goods_received>" +
				"<batch></batch>" +
				"<product_name>"+product_filter.value+"</product_name>" +
				"</goods_received>";
			set_my_value_list(batch_data,batch_filter);
		});
		
		$(batch_filter).on('blur',function(event)
		{
			var bill_data="<goods_received>" +
				"<sup_bill_id></sup_bill_id>" +
				"<batch>"+batch_filter.value+"</batch>" +
				"<product_name>"+product_filter.value+"</product_name>" +
				"</goods_received>";
			set_my_value_list(bill_data,bill_filter);
		});
		
		$(bill_filter).on('blur',function(event)
		{
			var supplier_data="<supplier_bills>" +
				"<supplier_name></supplier_name>" +
				"<sup_bill_id>"+bill_filter.value+"</sup_bill_id>" +
				"</supplier_bills>";
			set_my_value_list(supplier_data,supplier_filter);
		});
			
		set_static_value_list('supplier_returns','reason',reason_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Goods Received
 * @formNo 21
 */
function form21_add_item()
{
	if(is_create_access('form21'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form21_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form21_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form21_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form21_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form21_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form21_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form21_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form21_"+id+"' id='save_form21_"+id+"' value='Save' onclick='form21_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form21_"+id+"' id='delete_form21_"+id+"' value='Delete' onclick='form21_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form21_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form21_"+id);
		var product_filter=fields.elements[0];
		var batch_filter=fields.elements[1];
		var expiry_filter=fields.elements[2];
		var cost_filter=fields.elements[3];
		var quantity_filter=fields.elements[4];
		
		$(product_filter).focus();
	
		var products_data="<product_master>" +
				"<product_name></product_name>" +
				"<product_master>";
		set_my_value_list(products_data,product_filter);
		
		$(expiry_filter).datepicker();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Dispose Items
 * @formNo 22
 */
function form22_add_item()
{
	if(is_create_access('form22'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form22_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form22_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form22_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form2_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form22_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form15_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form22_"+id+"' value='Save' onclick='form22_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form22_"+id+"' value='Delete' onclick='form22_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form22_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form22_"+id);
		var product_filter=fields.elements[0];
		var batch_filter=fields.elements[1];
		var method_filter=fields.elements[2];
		var date_filter=fields.elements[4];
		
		$(product_filter).focus();
	
		var products_data="<product_master>" +
			"<name></name>" +
			"</product_master>";
		set_my_value_list(products_data,product_filter);
		
		$(product_filter).on('blur',function(event)
		{
			var batch_data="<product_instances>" +
				"<batch></batch>" +
				"<name>"+product_filter.value+"</name>" +
				"</product_instances>";
			set_my_value_list(batch_data,batch_filter);
		});
		
		set_static_value_list('disposals','method',method_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}	
}


/**
 * @form Create Purchase Orders
 * @formNo 24
 */
function form24_add_item()
{
	if(is_create_access('form24'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form24_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form24_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form24_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form24_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form24_"+id+"' id='save_form24_"+id+"' value='Save' onclick='form24_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form24_"+id+"' id='delete_form24_"+id+"' value='Delete' onclick='form24_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form24_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form24_"+id);
		var name_filter=fields.elements[0];
		$(name_filter).focus();
	
		var products_data="<product_master>" +
			"<name></name>" +
			"</product_master>";
		set_my_value_list(products_data,name_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Customers
 * @formNo 30
 */
function form30_add_item()
{
	if(is_create_access('form30'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form30_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form30_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form30_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form30_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form30_"+id+"' value=''>";
				rowsHTML+="<img class='filter_icon' form='form30_"+id+"' src='./images/edit.jpeg' onclick='form30_edit_address($(this))'>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form30_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form30_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form30_"+id+"' value='Save' onclick='form30_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form30_"+id+"' value='Delete' onclick='form30_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form30_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form30_"+id);
		var name_filter=fields.elements[0];
		var status_filter=fields.elements[5];
		$(name_filter).focus();
	
		set_static_value_list('customers','status',status_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Manage Offers
 * @formNo 35
 */
function form35_add_item()
{
	if(is_create_access('form35'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form35_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form35_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form35_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form35_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' readonly='readonly' form='form35_"+id+"' value=''>";
				rowsHTML+="<img class='filter_icon' src='./images/edit.jpeg' form='form35_"+id+"' onclick='modal8_action($(this))'>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form35_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form35_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form35_"+id+"' value='Save' onclick='form35_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form35_"+id+"' value='Delete' onclick='form35_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form35_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form35_"+id);
		var name_filter=fields.elements[0];
		var type_filter=fields.elements[1];
		var date_filter=fields.elements[2];
		var status_filter=fields.elements[4];
		
		$(name_filter).focus();
		$(date_filter).datepicker();
		set_static_value_list('offers','status',status_filter);
		set_static_value_list('offers','offer_type',type_filter);
		status_filter.value='active';
	}
	else
	{
		$("#modal2").dialog("open");
	}
}

/**
 * @form Store Placement
 * @formNo 38
 */
function form38_add_item()
{
	if(is_create_access('form38'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form38_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form38_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form38_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form38_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form38_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form38_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form38_"+id+"' value='Save' onclick='form38_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form38_"+id+"' value='Delete' onclick='form38_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form38_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form38_"+id);
		var product_filter=fields.elements[0];
		var batch_filter=fields.elements[1];
		var area_filter=fields.elements[2];
		var quantity_filter=fields.elements[3];
		
		$(product_filter).focus();
	
		var products_data="<product_master>" +
				"<name></name>" +
				"</product_master>";
		set_my_value_list(products_data,product_filter);
		
		$(product_filter).on('blur',function(event){
			var batch_data="<product_instances>" +
					"<batch></batch>" +
					"<product_name>"+name_filter.value+"</product_name>" +
					"</product_instances>";
			set_my_value_list(batch_data,batch_filter);
		});
		
		var area_data="<store_areas>" +
				"<name></name>" +
				"<area_type>storage</area_type>" +
				"</store_areas>";
		
		set_my_value_list(area_data,area_filter);
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage Products
 * @formNo 39
 */
function form39_add_item()
{
	if(is_create_access('form39'))
	{
		var rowsHTML="";
		var id=23123;
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form39_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form39_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form39_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form39_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<output form='form39_"+id+"'></output>";
				rowsHTML+="<input type='file' form='form39_"+id+"'>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form39_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form39_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form39_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form39_"+id+"' value='Save' onclick='form39_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form39_"+id+"' value='Delete' onclick='form39_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form39_body').prepend(rowsHTML);
		
		var fields=document.getElementById("form39_"+id);
		var type_filter=fields.elements[0];
		var make_filter=fields.elements[1];
		var pictureinfo=fields.elements[3];
		var picture=fields.elements[4];
	
		$(type_filter).focus();
	
		var type_data="<product_master>" +
				"<product_type></product_type>" +
				"</product_master>";
		var make_data="<product_master>" +
				"<make></make>" +
				"</product_master>";
		
		set_my_value_list(type_data,type_filter);
		set_my_value_list(make_data,make_filter);
		
		picture.addEventListener('change',function(evt)
		{
			select_picture(evt,pictureinfo,function(dataURL)
			{
				pictureinfo.innerHTML="<div class='figure' name='"+get_new_key()+"'><img id='img_form39_"+id+"' src='"+dataURL+"'/></div>";			
			});
		},false);
	}
	else
	{
		$("#modal2").dialog("open");
	}	
}

/**
 * @form Manage Vendors
 * @formNo 40
 */
function form40_add_item()
{
	if(is_create_access('form40'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form40_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form40_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form40_"+id+"' value=''>";
				rowsHTML+="<img class='filter_icon' src='./images/edit.jpeg' form='form40_"+id+"' onclick='form40_edit_address($(this));'>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form40_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form40_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form40_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form40_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form40_"+id+"' value='Save' onclick='form40_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form40_"+id+"' value='Delete' onclick='form40_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form40_body').prepend(rowsHTML);
		var fields=document.getElementById("form40_"+id);
		var name_filter=fields.elements[0];
		$(name_filter).focus();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Expense Register
 * @formNo 56
 */
function form56_add_item()
{
	if(is_create_access('form56'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form56_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form56_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form56_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form56_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form56_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form56_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form56_"+id+"' value='Save' onclick='form56_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form56_"+id+"' value='Delete' onclick='form56_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form56_body').prepend(rowsHTML);
		var fields=document.getElementById("form56_"+id);
		var date_filter=fields.elements[0];
		var account_filter=fields.elements[1];
		
		var account_data="<accounts>" +
				"<acc_name></acc_name>" +
				"</accounts>";
		set_my_value_list(type_data,account_filter);
		
		$(date_filter).datepicker();
		$(date_filter).val(get_my_date());
		$(date_filter).focus();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}


/**
 * @form Manage services
 * @formNo 57
 */
function form57_add_item()
{
	if(is_create_access('form57'))
	{
		var rowsHTML="";
		var id=get_new_key();
		rowsHTML+="<tr>";
		rowsHTML+="<form id='form57_"+id+"'></form>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form57_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form57_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='text' form='form57_"+id+"' value=''>";
			rowsHTML+="</td>";
			rowsHTML+="<td>";
				rowsHTML+="<input type='hidden' form='form57_"+id+"' value='"+id+"'>";
				rowsHTML+="<img class='filter_icon' src='./images/save.jpeg' form='form57_"+id+"' value='Save' onclick='form57_save_item($(this));'>";
				rowsHTML+="<img class='filter_icon' src='./images/delete.jpeg' form='form57_"+id+"' value='Delete' onclick='form57_delete_item($(this));'>";	
			rowsHTML+="</td>";			
		rowsHTML+="</tr>";
	
		$('#form57_body').prepend(rowsHTML);
		var fields=document.getElementById("form57_"+id);
		var service_filter=fields.elements[0];
		
		$(service_filter).focus();
	}
	else
	{
		$("#modal2").dialog("open");
	}
}
