<?php $themes = $_POST['row'];

foreach($themes as $theme){
	$dao->updateThemeConfig($theme);
	
	
}
	
 ?>