
<pre>
<?php print_r ($data) ?>
</pre>
<br/>
<form method="post" action="/update_themes">	
<table>
<tr><th>nom</th><th>Montrer le thème</th>Montrer le thème<th>theme Parent (si oui,)</th></tr>
 <?php 
 $i=0;
foreach ($data as $theme){

		$checkHaveConfig = $theme->get_have_config_page() ? "checked" : "";
	
?>


<tr>
	<input type="text" value="<?php echo getPage()."/".getSubPage() ?>" name="row[<?php echo $i ?>][page_red]" hidden="true"/>
	<input type="text" value="<?php echo $theme->get_id() ?>" name="row[<?php echo $i ?>][id]" hidden="true"/>	
	<td><?php echo $theme->get_name()?></td>
	<td><input type="checkbox" name="row[<?php echo $i ?>][show]" value="1" <?php echo $checkHaveConfig  ?>/></td>
	<td>
		<select name="row[<?php echo $i ?>][parent_theme_key]">
			<option value="-1">Pas de parent</option>
<?php 		
	foreach ($data as $themeParent){
?>
	 
			<option <?php echo $theme->is_of_theme($themeParent,"selected")?> value="<?php echo $themeParent->get_id()?>"><?php echo $themeParent->get_name()?></option>
<?php 
	}
?>
		</select>
	</td>
	</tr>
	
	 
<?php 
		echo  $theme->get_id()." ".$theme->get_name()." ".$theme->get_parent_theme_key()." - ".$theme->get_have_config_page()?>
		

<?php 
$i++;	
}
?>
 </table>	
 	<input type="submit" value="OK"/>
</form>
	