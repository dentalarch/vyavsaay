<div id='form84' class='function_detail'>
	<table class='rwd-table'>
		<thead>
			<tr>
				<form id='form84_header'></form>
					<th>Customer <img src='../images/filter.png' class='filter_icon' onclick='show_filter($(this));'><input type='text' class='filter' form='form84_header' onblur="form84_ini();"></th>
					<th>Service <img src='../images/filter.png' class='filter_icon' onclick='show_filter($(this));'><input type='text' class='filter' form='form84_header' onblur="form84_ini();"></th>
					<th>Status <img src='../images/filter.png' class='filter_icon' onclick='show_filter($(this));'><input type='text' class='filter' form='form84_header' onblur="form84_ini();"></th>
					<th>Notes</th>
					<th>Last Bill</th>
					<th><input type='button' form='form84_header' title='Add subscription' class='add_icon' onclick='form84_add_item();'>
						<input type='button' form='form84_header' value='EXPORT' class='export_icon'>
						<input type='button' form='form84_header' value='IMPORT' class='import_icon'>
						<input type='button' form='form84_header' title='Create due bills' class='process_ok_icon' onclick="form84_bills();"></th>
					</tr>
		</thead>
		<tbody id='form84_body'>
		</tbody>
	</table>
	<div class='form_nav'>
		<img src='./images/previous.png' id='form84_prev' class='prev_icon' data-index='-25' onclick="$('#form84_index').attr('data-index',$(this).attr('data-index')); form84_ini();">
		<div style='display:hidden;' id='form84_index' data-index='0'></div>
		<img src='./images/next.png' id='form84_next' class='next_icon' data-index='25' onclick="$('#form84_index').attr('data-index',$(this).attr('data-index')); form84_ini();">
	</div>
</div>