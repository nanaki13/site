<?php 
class Theme extends IdName
{
 
    private $parent_theme_key;
     private $image_key;
     private $image_path;
        
    
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
    
    
    


}

?>

