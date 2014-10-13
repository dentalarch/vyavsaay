<div id='sale_reports_main'>
	<ul>
		<li><a id="report26_link" href="#report26" onclick="report26_header_ini(); report26_ini();">Sales by customers</a></li>
		<li><a id="report38_link" href="#report38" onclick="report38_header_ini(); report38_ini();">Sales by products</a></li>
		<li><a id="report39_link" href="#report39" onclick="report39_header_ini(); report39_ini();">Sales by services</a></li>
		<li><a id="report9_link" href="#report9" onclick="report9_header_ini(); report9_ini('');">Product Sales report</a></li>
	</ul>

	<?php 
		include "reports/report26.php";
		include "reports/report38.php";
		include "reports/report39.php";
		include "reports/report9.php";
	?>
	
	<script>
	!function(){
		$("#sale_reports_main").tabs({
			heightStyle:"fill",
			show:"slide"});
		}();
	</script>

</div>