<div id='settings_main' class='function_main'>
	<?php 
	
		echo "<ul>";
			if(strpos($_SESSION['forms'],'form46')!==false)
				echo "<li><a id='form46_link' href='#form46' onclick='form46_header_ini(); form46_ini();' data-i18n='form.set_defaults'></a></li>";
			if(strpos($_SESSION['forms'],'form47')!==false)
				echo "<li><a id='form47_link' href='#form47' data-i18n='form.change_password'></a></li>";
			if(strpos($_SESSION['forms'],'form48')!==false)
				echo "<li><a id='form48_link' href='#form48' onclick='form48_header_ini(); form48_ini();' data-i18n='form.select reports'></a></li>";
			if(strpos($_SESSION['forms'],'form49')!==false)
				echo "<li><a id='form49_link' href='#form49' onclick='form49_header_ini(); form49_ini();' data-i18n='form.select_forms'></a></li>";
			if(strpos($_SESSION['forms'],'form50')!==false)
				echo "<li><a id='form50_link' href='#form50' onclick='form50_header_ini(); form50_ini();' data-i18n='form.select_accounting_principles'></a></li>";
			if(strpos($_SESSION['forms'],'form51')!==false)
				echo "<li><a id='form51_link' href='#form51' onclick='form51_header_ini();' data-i18n='form.set_access_control'></a></li>";
			if(strpos($_SESSION['forms'],'form52')!==false)
				echo "<li><a id='form52_link' href='#form52' onclick='form52_header_ini(); form52_ini();' data-i18n='form.set_shortcuts'></a></li>";
			if(strpos($_SESSION['forms'],'form54')!==false)
				echo "<li><a id='form54_link' href='#form54' onclick='form54_header_ini(); form54_ini();' data-i18n='form.select_templates'></a></li>";
		echo "</ul>";

		if(strpos($_SESSION['forms'],'form46')!==false)
			include "forms/form46.php";
		if(strpos($_SESSION['forms'],'form47')!==false)
			include "forms/form47.php";
		if(strpos($_SESSION['forms'],'form48')!==false)
			include "forms/form48.php";
		if(strpos($_SESSION['forms'],'form49')!==false)
			include "forms/form49.php";
		if(strpos($_SESSION['forms'],'form50')!==false)
			include "forms/form50.php";
		if(strpos($_SESSION['forms'],'form51')!==false)
			include "forms/form51.php";
		if(strpos($_SESSION['forms'],'form52')!==false)
			include "forms/form52.php";
		if(strpos($_SESSION['forms'],'form54')!==false)
			include "forms/form54.php";
	?>
	
	<script>
	!function(){
		$("#settings_main").tabs({
			heightStyle:"fill",
			show:"slide"});
		}();
	</script>

</div>