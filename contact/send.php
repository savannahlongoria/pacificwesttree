<?php

$vars = array();
foreach($_POST as $k=>$v) {
	if(substr($k,0,2)!='__') {
		$vars[] = stripslashes("$k:\n$v");
	}
}

if(!isset($_POST['__to'])) {
	die('failed');
}

$to = explode(',',$_POST['__to']);
$from = isset($_POST['__from'])?$_POST['__from']:$_SERVER['HTTP_HOST'];
$message = implode("\n\n\n",$vars);
foreach($to as $k=>$each) {
	$headers = "From: $from <$from>\r\n";
	$headers .= "To: $each <$each>\r\n";
	if(!mail($each,"Contact via $from",$message,$headers)) {
		die("failed");
	}
}

?>success