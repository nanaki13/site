<div id="subMenu"  class="subMenu right">
<?php

foreach($subMenuItems as $subMenuItem){
?>
	<div class="subMenuDiv">
	
	<div class="sub_menu_title"><a class="subMenuItem" href="<?php echo $subMenuItem['ref']?>">
	
	<?php echo $subMenuItem['name']?></a></div>
	 <div class="subMenuDivImg"><img class="" src="/rsc<?php  echo $subMenuItem['img']?>"/></div>   
	  
	</div>
<?php
}
?>
</div>	

