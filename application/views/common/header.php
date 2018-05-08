<html>
<head>
    <title><?php echo $title; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <meta property="og:title" content="<?php echo $title; ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
	<meta property="og:description" content="Convert HEX to RGB, RGB to HEX" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/common/default.css?v=1"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/" . $page_name . ".css"); ?>" />
	<?php echo $additional_css; ?>
</head>
<body>
<div class="header">
</div>
<script>
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
if (vw < 1025) {
    isMobile = true;
    if (vw >= 768) {
        isTablet = true;
    } else {
        isTablet = false;
    }
} else {
    isMobile = false;
}
</script>
<div class="container">