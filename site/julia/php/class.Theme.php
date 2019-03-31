<?php 
class Theme extends IdName
{
 
    private $parent_theme_key;
     private $image_key;
     private $image_path;
	 private $have_config_page;
	 private $parent_theme_name;
        
    
    public function get_parent_theme_key(){
        return $this->parent_theme_key ;
    }
    
    public function parent_theme_key($parent_theme_key){
        $this->parent_theme_key = $parent_theme_key;
    }
    public function get_image_key(){
        return $this->image_key ;
    }
    
    public function image_key($image_key){
        $this->image_key = $image_key;
    }
    public function get_image_path(){
        return $this->image_path ;
    }
    
    public function image_path($image_path){
        $this->image_path = $image_path;
    }
	
	
	 public function get_have_config_page(){
        return $this->have_config_page ;
    }
    
    public function have_config_page($have_config_page){
        $this->have_config_page = $have_config_page;
    }
    public function get_parent_theme_name(){
        return $this->parent_theme_name ;
    }
    
    public function parent_theme_name($parent_theme_name){
        $this->parent_theme_name = $parent_theme_name;
    }
	
	public function is_of_theme($theme,$textIf){
	if( $this->parent_theme_key == $theme->get_id()){
		return $textIf;
		
	}else{
		return "";
	}
}
    
    
    
    


}

?>

