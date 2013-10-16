<?php
	include("class_dummy.php"); $d = new dummy;

	$view  = trim(strtolower($_GET["view"]));
	$title = false;
	$a_js  = array();
	
	switch ($view) {
		default:
			$view = "home";
			break;
	}

	$bodyId = ucfirst(str_replace(array(" ","'","-","_"), array("","","",""), $view));
?><!DOCTYPE html>
<html class="no-js">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?= ucfirst($view); ?></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<meta name="msapplication-TileImage" content="apple-touch-icon-144x144-precomposed.png"/>
	<meta name="msapplication-TileColor" content="#000000"/>
	<meta name="application-name" content="<?= ucfirst($view); ?>" />

	<!-- Dev pointers only; Change to compiled bundles for production -->
	<link rel="stylesheet" href="assets/css/reset.css">
	<link rel="stylesheet" href="assets/css/global.css">
	<link rel="stylesheet" href="assets/css/layout.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="assets/js/lib/modernizr-2.6.2.min.js"></script>
	<script src="assets/js/helpers.js"></script>
	<script src="assets/js/global.js"></script>
	<script src="assets/js/main.js"></script>
</head>
<body id="<?= $bodyId; ?>" data-js="<?= implode(".", $a_js); ?>">
	<header id="layout-header">
		Header
	</header>
	<div id="layout-content">
		<?
			$path = "./views/".$view.".php";

			if (file_exists($path)) {
				include_once($path); 
			} else {
				echo '<pre style="text-align:center">View not found ('.$path.')</pre>';
			}
		?>
	</div>
	<footer id="layout-footer">
		Footer
	</footer>
</body>
</html>
