<?php 
if(isLogged()){
	?>
	<form method="post" action="/update_image">
	<?php 
foreach ($get_method as $name){
	$get_met = 'get_'.$name;
	?>
	
	<label for="<?php echo $name?>"><?php echo $name?></label><input type="text" value="<?php echo $media->$get_met() ?>" name="<?php echo $name?>"/><br/>
	<?php 
}
	?>
	<input type="text" value="<?php echo $media->get_id() ?>" name="id" hidden="true"/>
	<input type="text" value="<?php echo getPage() ?>" name="page_red" hidden="true"/>
	<input type="submit" value="OK"/>
	</form>
	<form method="post" action="/delete_media">
	<input type="text" value="<?php echo $media->get_id() ?>" name="id" hidden="true"/><input type="submit" value="DELETE"/><input type="text" value="<?php echo getPage() ?>" name="page_red" hidden="true"/></form>
	<?php 
}else{
	echo

	'<span class="italic">'.$media->get_title().'</span>'.
	'<br/>'.$media->get_date().'<br/>'.$media->get_dimension().'<br/>'.$media->get_description();
}
?>
