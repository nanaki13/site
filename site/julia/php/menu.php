
<div id="menu"  class="menu">
<?php
foreach($menuItems as $menuItem){
	if(isset($menuItem['img_path'])){
		?>	
			<div class="menu_item_div"><a class="menu_item" href="<?php echo $menuItem['ref']?>"><img id="menu_fleur" class="menu_fleur" src="<?php echo $menuItem['img_path']?>"/></a></div>
		<?php		
	}else{
		?>
			
			<div class="menu_item_div"><a class="menu_item" href="<?php echo $menuItem['ref']?>"><?php echo $menuItem['name']?></a></div>
		<?php		
	}
}
?>
<img id="img_menu_3" class="menu_item_div" src = "/rsc/img/branche_2.png"/>

<div id="copyright">© 2017 Julia Le Corre. Tous droits réservés.</div>
</div>	


