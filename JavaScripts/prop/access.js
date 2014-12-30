function is_read_access(form_id)
{
	var re=get_session_var('re');
	var found=re.search(form_id+"-");
	if(found===-1)
	{
		return false;
	}
	else
		return true;
}

function is_create_access(form_id)
{
	var re=get_session_var('cr');
	var found=re.search(form_id+"-");
	if(found===-1)
	{
		return false;
	}
	else
		return true;
}

function is_update_access(form_id)
{
	var re=get_session_var('up');
	var found=re.search(form_id+"-");
	if(found===-1)
	{
		return false;
	}
	else
		return true;
}

function is_delete_access(form_id)
{
	var re=get_session_var('del');
	var found=re.search(form_id+"-");
	if(found===-1)
	{
		return false;
	}
	else
		return true;
}


function if_data_read_access(tablename,func)
{
	var username=get_username();
	
	var access_data="<data_access>" +
			"<record_id></record_id>" +
			"<criteria_field></criteria_field>" +
			"<criteria_value></criteria_value>" +
			"<access_type>read</access_type>" +
			"<tablename exact='yes'>"+tablename+"</tablename>" +
			"<user exact='yes'>"+username+"</user>" +
			"</data_access>";
	fetch_requested_data('',access_data,function(data)
	{
		func(data);
	});
}

function if_data_update_access(tablename,func)
{
	var username=get_username();
	
	var access_data="<data_access>" +
		"<record_id></record_id>" +
		"<criteria_field></criteria_field>" +
		"<criteria_value></criteria_value>" +
		"<access_type>update</access_type>" +
		"<tablename exact='yes'>"+tablename+"</tablename>" +
		"<user exact='yes'>"+username+"</user>" +
		"</data_access>";
	fetch_requested_data('',access_data,function(data)
	{
		func(data);
	});

}

function if_data_delete_access(tablename,func)
{
	var username=get_username();
	
	var access_data="<data_access>" +
		"<record_id></record_id>" +
		"<criteria_field></criteria_field>" +
		"<criteria_value></criteria_value>" +
		"<access_type>delete</access_type>" +
		"<tablename exact='yes'>"+tablename+"</tablename>" +
		"<user exact='yes'>"+username+"</user>" +
		"</data_access>";
	fetch_requested_data('',access_data,function(data)
	{
		func(data);
	});
}
