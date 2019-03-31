

 <!DOCTYPE html>
<html>
<head>
<title><?php echo $page->get_title() ?></title>
<?php echo $page->echoCss() ?>

<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"> 
<link rel="icon" href="/rsc/img/favicon.ico" />
<meta name="keywords" content="julia le corre, artiste, illustration, gravure, peinture, les amoureuses en fleurs" />
<meta name="description" content="Diplômée de L'école Nationale supérieur d'Art de Dijon, j'ai exploré dans un premier temps un travail principalement sculptural.
Appuyant mes recherches sur le pattern, la répétition du motif à travers le dessin, mais aussi par la création de dentelles, de napperons prenant place dans l'espace questionnant alors le temps, ses dimensions et la féminité.
" />
<meta property="og:title" content="<?php echo $page->get_title() ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://julia-le-corre.fr" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:image" content="http://julia-le-corre.fr/rsc/img/Le%20peigne.jpg" />
</head>
<body>

<div id="root" class="root">

<?php  $page->echoBody() ?>
</div>
<?php 

if(isset($_SESSION['logged']))
  	require 'logout.php';
   ?>
<?php echo $page->echoJs() ?>
</body>
</html>
