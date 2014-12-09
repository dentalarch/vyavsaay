
/**
* @form Update Inventory
* @formNo 1
*/
function form1_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<product_instances>" +
				"<id>"+row.id+"</id>" +
				"<product_name>"+row.product_name+"</product_name>" +
				"<batch>"+row.batch+"</batch>" +
				"<cost_price>"+row.cost_price+"</cost_price>" +
				"<sale_price>"+row.sale_price+"</sale_price>" +
				"<expiry>"+row.expiry+"</expiry>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</product_instances>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
}


/**
* @form Manage Assets
* @formNo 5
*/
function form5_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<assets>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<date_inc>"+row.date_inc+"</date_inc>" +
				"<type>"+row.type+"</type>" +
				"<description>"+row.description+"</description>" +
				"<ownership_type>"+row.ownership_type+"</ownership_type>" +
				"<ownership_contract>"+row.ownership_contract+"</ownership_contract>" +
				"<make>"+row.make+"</make>" +
				"<maintained_by>"+row.maintained_by+"</maintained_by>" +
				"<maintenance_contract>"+row.maintenance_contract+"</maintenance_contract>" +
				"<maintenance_activities>"+row.maintenance_activities+"</maintenance_activities>" +
				"<initial_value>"+row.initial_value+"</initial_value>" +
				"<current_value>"+row.current_value+"</current_value>" +
				"<asset_location>"+row.asset_location+"</asset_location>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</assets>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manage Staff
* @formNo 8
*/
function form8_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<staff>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<phone>"+row.phone+"</phone>" +
				"<email>"+row.email+"</email>" +
				"<acc_name unique='yes'>"+row.acc_name+"</acc_name>" +
				"<joining_date>"+row.joining_date+"</joining_date>" +
				"<skills>"+row.skills+"</skills>" +
				"<qualification>"+row.qualification+"</qualification>" +
				"<fixed_comp>"+row.fixed_comp+"</fixed_comp>" +
				"<variable_comp_rate>"+row.variable_comp_rate+"</variable_comp_rate>" +
				"<monthly_hours>"+row.monthly_hours+"</monthly_hours>" +
				"<allowed_pto>"+row.allowed_pto+"</allowed_pto>" +
				"<status>"+row.status+"</status>" +
				"<notes>"+row.notes+"</notes>" +
				"<address>"+row.address+"</address>" +
				"<pincode>"+row.pincode+"</pincode>" +
				"<city>"+row.city+"</city>" +
				"<state>"+row.state+"</state>" +
				"<country>"+row.country+"</country>" +
				"<address_status>"+row.address_status+"</address_status>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</staff>";
		var account_xml="<accounts>" +
				"<id>"+row.id+"</id>" +
				"<acc_name>"+row.acc_name+"</acc_name>" +
				"<description></description>" +
				"<type>staff</type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</accounts>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
				server_create_simple(account_xml);
			}
			else
			{
				local_create_simple(data_xml);
				local_create_simple(account_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
				server_update_simple(account_xml);
			}
			else
			{
				local_update_simple(data_xml);
				local_update_simple(account_xml);
			}
		}		
	});
};


/**
* @form Manage Payments
* @formNo 11
*/
function form11_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var receiver=row.acc_name;
		var giver="master";
		if(row.type=='received')
		{
			receiver='master';
			giver=row.acc_name;
		}
		var data_xml="<payments>" +
				"<id>"+row.id+"</id>" +
				"<type>"+row.type+"</type>" +
				"<total_amount>"+row.total_amount+"</total_amount>" +
				"<paid_amount>"+row.paid_amount+"</paid_amount>" +
				"<acc_name>"+row.acc_name+"</acc_name>" +
				"<due_date>"+row.due_date+"</due_date>" +
				"<status>"+row.status+"</status>" +
				"<date>"+row.date+"</date>" +
				"<due_date>"+row.due_date+"</due_date>" +
				"<mode>"+row.mode+"</mode>" +
				"<bill_id>"+row.bill_id+"</bill_id>" +
				"<transaction_id>"+row.id+"</transaction_id>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</payments>";
		var transaction_xml="<transactions>" +
				"<id>"+row.id+"</id>" +
				"<trans_date>"+row.date+"</trans_date>" +
				"<amount>"+row.total_amount+"</amount>" +
				"<receiver>"+receiver+"</receiver>" +
				"<giver>"+giver+"</giver>" +
				"<tax>0</tax>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</transactions>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
				server_create_simple(transaction_xml);
			}
			else
			{
				local_create_simple(data_xml);
				local_create_simple(transaction_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
				server_update_simple(transaction_xml);
			}
			else
			{
				local_update_simple(data_xml);
				local_update_simple(transaction_xml);
			}
		}
	});
};


/**
* @form Manage Tasks
* @formNo 14
*/
function form14_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<task_instances>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<description>"+row.description+"</description>" +
				"<assignee>"+row.assignee+"</assignee>" +
				"<status>"+row.status+"</status>" +
				"<t_due>"+get_raw_time(row.t_due)+"</t_due>" +
				"<t_initiated>"+get_raw_time(row.t_initiated)+"</t_initiated>" +
				"<tasks_hours>"+row.task_hours+"</task_hours>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</task_instances>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manage Customers
* @formNo 30
*/
function form30_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<customers>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<phone>"+row.phone+"</phone>" +
				"<email>"+row.email+"</email>" +
				"<acc_name unique='yes'>"+row.acc_name+"</acc_name>" +
				"<status>"+row.status+"</status>" +
				"<notes>"+row.notes+"</notes>" +
				"<address>"+row.address+"</address>" +
				"<pincode>"+row.pincode+"</pincode>" +
				"<city>"+row.city+"</city>" +
				"<state>"+row.state+"</state>" +
				"<country>"+row.country+"</country>" +
				"<address_status>"+row.address_status+"</address_status>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</customers>";
		var account_xml="<accounts>" +
				"<id>"+row.id+"</id>" +
				"<acc_name>"+row.acc_name+"</acc_name>" +
				"<description>"+row.notes+"</description>" +
				"<type>customer</type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</accounts>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
				server_create_simple(account_xml);
			}
			else
			{
				local_create_simple(data_xml);
				local_create_simple(account_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
				server_update_simple(account_xml);
			}
			else
			{
				local_update_simple(data_xml);
				local_update_simple(account_xml);
			}
		}
	});
}

/**
* @form Manage Offers
* @formNo 35
*/
function form35_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<offers>" +
				"<id>"+row.id+"</id>" +
				"<offer_name unique='yes'>"+row.offer_name+"</offer_name>" +
				"<offer_type>"+row.offer_type+"</offer_type>" +
				"<end_date>"+row.end_date+"</end_date>" +
				"<offer_detail>"+row.offer_detail+"</offer_detail>" +
				"<status>"+row.status+"</status>" +
				"<product_name>"+row.product_name+"</product_name>" +
				"<batch>"+row.batch+"</batch>" +
				"<service>"+row.service+"</service>" +
				"<criteria_type>"+row.criteria_type+"</criteria_type>" +
				"<criteria_amount>"+row.criteria_amount+"</criteria_amount>" +
				"<criteria_quantity>"+row.criteria_quantity+"</criteria_quantity>" +
				"<result_type>"+row.result_type+"</result_type>" +
				"<discount_percent>"+row.discount_percent+"</discount_percent>" +
				"<discount_amount>"+row.discount_amount+"</discount_amount>" +
				"<quantity_add_percent>"+row.quantity_add_percent+"</quantity_add_percent>" +
				"<quantity_add_amount>"+row.quantity_add_amount+"</quantity_add_amount>" +
				"<free_product_name>"+row.free_product_name+"</free_product_name>" +
				"<free_product_quantity>"+row.free_product_quantity+"</free_product_quantity>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</offers>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Store Placement
* @formNo 38
*/
function form38_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<area_utilization>" +
				"<id>"+row.id+"</id>" +
				"<item_name>"+row.item_name+"</item_name>" +
				"<batch>"+row.batch+"</batch>" +
				"<name>"+row.name+"</name>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</area_utilization>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manage Products
* @formNo 39
*/
function form39_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<product_master>" +
				"<id>"+row.id+"</id>" +
				"<name unique='yes'>"+row.name+"</name>" +
				"<make>"+row.make+"</make>" +
				"<description>"+row.description+"</description>" +
				"<tax>"+row.tax+"</tax>" +
				"<bar_code>"+row.bar_code+"</bar_code>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</product_master>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manage suppliers
* @formNo 40
*/
function form40_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<suppliers>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<phone>"+row.phone+"</phone>" +
				"<email>"+row.email+"</email>" +
				"<acc_name unique='yes'>"+row.acc_name+"</acc_name>" +
				"<notes>"+row.notes+"</notes>" +
				"<address>"+row.address+"</address>" +
				"<pincode>"+row.pincode+"</pincode>" +
				"<city>"+row.city+"</city>" +
				"<state>"+row.state+"</state>" +
				"<country>"+row.country+"</country>" +
				"<address_status>"+row.address_status+"</address_status>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</suppliers>";
		var account_xml="<accounts>" +
				"<id>"+row.id+"</id>" +
				"<acc_name>"+row.acc_name+"</acc_name>" +
				"<description>"+row.notes+"</description>" +
				"<type>supplier</type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</accounts>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
				server_create_simple(account_xml);
			}
			else
			{
				local_create_simple(data_xml);
				local_create_simple(account_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
				server_update_simple(account_xml);
			}
			else
			{
				local_update_simple(data_xml);
				local_update_simple(account_xml);
			}
		}
	});
};


/**
* @form Cash Register
* @formNo 56
*/
function form56_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var receiver=row.acc_name;
		var giver="master";
		if(row.type=='received')
		{
			giver=row.acc_name;
			receiver="master";
		}
		var data_xml="<cash_register>" +
				"<id>"+row.id+"</id>" +
				"<type>"+row.type+"</type>" +
				"<acc_name>"+row.acc_name+"</acc_name>" +
				"<amount>"+row.amount+"</amount>" +
				"<notes>"+row.notes+"</notes>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</cash_register>";
		var transaction_xml="<transactions>" +
				"<id>"+row.id+"</id>" +
				"<trans_date>"+get_my_time()+"</trans_date>" +
				"<amount>"+row.amount+"</amount>" +
				"<receiver>"+giver+"</receiver>" +
				"<giver>"+receiver+"</giver>" +
				"<tax>0</tax>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</transactions>";
		var payment_id=get_my_time();
		var transaction2_xml="<transactions>" +
				"<id>"+payment_id+"</id>" +
				"<trans_date>"+get_my_time()+"</trans_date>" +
				"<amount>"+row.amount+"</amount>" +
				"<receiver>"+receiver+"</receiver>" +
				"<giver>"+giver+"</giver>" +
				"<tax>0</tax>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</transactions>";
		var payment_xml="<payments>" +
				"<id>"+payment_id+"</id>" +
				"<acc_name>"+row.acc_name+"</acc_name>" +
				"<type>"+row.type+"</type>" +
				"<total_amount>"+row.amount+"</total_amount>" +
				"<paid_amount>"+row.amount+"</paid_amount>" +
				"<status>closed</status>" +
				"<date>"+get_my_time()+"</date>" +
				"<due_date>"+get_my_time()+"</due_date>" +
				"<mode>cash</mode>" +
				"<transaction_id>"+payment_id+"</transaction_id>" +
				"<bill_id>"+row.id+"</bill_id>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</payments>";

		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
				server_create_simple(transaction_xml);
				server_create_simple(transaction2_xml);
				server_create_simple(payment_xml);
			}
			else
			{
				local_create_simple(data_xml);
				local_create_simple(transaction_xml);
				local_create_simple(transaction2_xml);
				local_create_simple(payment_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
				server_update_simple(transaction_xml);
				server_update_simple(transaction2_xml);
				server_update_simple(payment_xml);
			}
			else
			{
				local_update_simple(data_xml);
				local_update_simple(transaction_xml);
				local_update_simple(transaction2_xml);
				local_update_simple(payment_xml);
			}
		}
	});
};

/**
* @form manage services
* @formNo 57
*/
function form57_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<services>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<description>"+row.description+"</description>" +
				"<price>"+row.price+"</price>" +
				"<tax>"+row.tax+"</tax>" +
				"<duration>"+row.duration+"</duration>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</services>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Service pre-requisites
* @formNo 58
*/
function form58_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<pre_requisites>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<type>"+row.type+"</type>" +
				"<requisite_type>"+row.requisite_type+"</requisite_type>" +
				"<requisite_name>"+row.requisite_name+"</requisite_name>" +
				"<quantity>"+row.quantity+"</quantity>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</pre_requisites>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form product pre-requisites
* @formNo 59
*/
function form59_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<pre_requisites>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<type>"+row.type+"</type>" +
				"<requisite_type>"+row.requisite_type+"</requisite_type>" +
				"<requisite_name>"+row.requisite_name+"</requisite_name>" +
				"<quantity>"+row.quantity+"</quantity>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</pre_requisites>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Product Attributes
* @formNo 60
*/
function form60_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<attributes>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<type>"+row.type+"</type>" +
				"<attribute>"+row.attribute+"</attribute>" +
				"<value>"+row.value+"</value>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</attributes>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Service Attributes
* @formNo 61
*/
function form61_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<attributes>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<type>"+row.type+"</type>" +
				"<attribute>"+row.attribute+"</attribute>" +
				"<value>"+row.value+"</value>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</attributes>";
		
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Product reviews
* @formNo 62
*/
function form62_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<reviews>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<reviewer>"+row.reviewer+"</reviewer>" +
				"<detail>"+row.detail+"</detail>" +
				"<rating>"+row.rating+"</rating>" +
				"<type>"+row.type+"</type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</reviews>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Service reviews
* @formNo 63
*/
function form63_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<reviews>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<reviewer>"+row.reviewer+"</reviewer>" +
				"<detail>"+row.detail+"</detail>" +
				"<rating>"+row.rating+"</rating>" +
				"<type>"+row.type+"</type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</reviews>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Service Cross sells
* @formNo 64
*/
function form64_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<cross_sells>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<type>"+row.type+"</type>" +
				"<cross_name>"+row.cross_name+"</cross_name>" +
				"<cross_type>"+row.cross_type+"</cross_type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</cross_sells>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Product Cross sells
* @formNo 66
*/
function form66_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<cross_sells>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<type>"+row.type+"</type>" +
				"<cross_name>"+row.cross_name+"</cross_name>" +
				"<cross_type>"+row.cross_type+"</cross_type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</cross_sells>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manage accounts
* @formNo 71
*/
function form71_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<accounts>" +
				"<id>"+row.id+"</id>" +
				"<acc_name>"+row.acc_name+"</acc_name>" +
				"<description>"+row.description+"</description>" +
				"<type>"+row.type+"</type>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</accounts>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Manage Task Types
* @formNo 79
*/
function form79_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<task_type>" +
				"<id>"+row.id+"</id>" +
				"<name>"+row.name+"</name>" +
				"<description>"+row.description+"</description>" +
				"<est_hours>"+row.est_hours+"</est_hours>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</task_type>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Sale leads
* @formNo 81
*/
function form81_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<sale_leads>" +
				"<id>"+row.id+"</id>" +
				"<customer>"+row.customer+"</customer>" +
				"<detail>"+row.detail+"</detail>" +
				"<due_date>"+row.due_date+"</due_date>" +
				"<identified_by>"+row.identified_by+"</identified_by>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</sale_leads>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
}

/**
* @form Store Areas
* @formNo 83
*/
function form83_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<store_areas>" +
			"<id>"+row.id+"</id>" +
			"<name>"+row.name+"</name>" +
			"<area_type>"+row.area_type+"</area_type>" +
			"<height>"+row.length+"</height>" +
			"<width>"+row.width+"</width>" +
			"<length>"+row.length+"</length>" +
			"<locx>"+row.locx+"</locx>" +
			"<locy>"+row.locy+"</locy>" +
			"<locz>"+row.locz+"</locz>" +
			"<storey>"+row.storey+"</storey>" +
			"<color>"+row.color+"</color>" +
			"<loc_type>"+row.loc_type+"</loc_type>" +
			"<faceEast>"+row.faceEast+"<faceEast>" +
			"<faceWest>"+row.faceWest+"</faceWest>" +
			"<faceNorth>"+row.faceNorth+"</faceNorth>" +
			"<faceSouth>"+row.faceSouth+"</faceSouth>" +
			"</last_updated>"+get_my_time()+"</last_updated>" +
			"</store_areas>";

		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

/**
* @form Manage Subscriptions
* @formNo 84
*/
function form84_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<service_subscriptions>" +
				"<id>"+row.id+"</id>" +
				"<customer>"+row.customer+"</customer>" +
				"<service>"+row.service+"</service>" +
				"<status>"+row.status+"</status>" +
				"<notes>"+row.notes+"</notes>" +
				"<last_bill_date>"+get_raw_time(row.last_bill_date)+"</last_bill_date>" +
				"<next_due_date>"+get_raw_time(row.next_due_date)+"</next_due_date>" +
				"<last_bill_id>"+row.last_bill_id+"</last_bill_id>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</service_subscriptions>";

		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manage Products
* @formNo 87
*/
function form87_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<product_master>" +
				"<id>"+row.id+"</id>" +
				"<name unique='yes'>"+row.name+"</name>" +
				"<make>"+row.make+"</make>" +
				"<description>"+row.description+"</description>" +
				"<tax>"+row.tax+"</tax>" +
				"<bar_code>"+row.bar_code+"</bar_code>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</product_master>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manufacturing Schedule
* @formNo 88
*/
function form88_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<manufacturing_schedule>" +
				"<id>"+row.id+"</id>" +
				"<product unique='yes'>"+row.product+"</product>" +
				"<process_notes>"+row.process_notes+"</process_notes>" +
				"<status>"+row.status+"</status>" +
				"<schedule>"+get_raw_time(row.schedule)+"</schedule>" +
				"<iteration_notes>"+row.iteration_notes+"</iteration_notes>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</manufacturing_schedule>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Billing types
* @formNo 90
*/
function form90_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<bill_types>" +
				"<id>"+row.id+"</id>" +
				"<name unique='yes'>"+row.name+"</name>" +
				"<notes>"+row.process_notes+"</notes>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</bill_types>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};


/**
* @form Manage Loans
* @formNo 93
*/
function form93_import(data_array,import_type)
{
	data_array.forEach(function(row)
	{
		var data_xml="<loans>" +
				"<id>"+row.id+"</id>" +
				"<type>"+row.type+"</type>" +
				"<account>"+row.account+"</account>" +
				"<date_initiated>"+get_raw_time(row.date_initiated)+"</date_initiated>" +
				"<loan_amount>"+row.loan_amount+"</loan_amount>" +
				"<repayment_method>"+row.repayment_method+"</repayment_method>" +
				"<interest_paid>"+row.interest_paid+"</interest_paid>" +
				"<interest_rate>"+row.interest_rate+"</interest_rate>" +
				"<interest_period>"+row.interest_period+"</interest_period>" +
				"<next_interest_date>"+get_raw_time(row.next_interest_date)+"</next_interest_date>" +
				"<interest_type>"+row.interest_type+"</interest_type>" +
				"<emi>"+row.emi+"</emi>" +
				"<emi_period>"+row.emi_period+"</emi_period>" +
				"<next_emi_date>"+get_raw_time(row.next_emi_date)+"</next_emi_date>" +
				"<pending_emi>"+row.pending_emi+"</pending_emi>" +
				"<status>"+row.status+"</status>" +
				"<last_updated>"+get_my_time()+"</last_updated>" +
				"</loans>";
		if(import_type=='create_new')
		{
			if(is_online())
			{
				server_create_simple(data_xml);
			}
			else
			{
				local_create_simple(data_xml);
			}
		}
		else
		{
			if(is_online())
			{	
				server_update_simple(data_xml);
			}
			else
			{
				local_update_simple(data_xml);
			}
		}
	});
};

