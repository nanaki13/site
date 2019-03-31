<?php 
/**
 * @author jonathan
 *
 */
abstract class ActionEnum{
    const SAVE_ALL = 2;
    const GET_ALL = 0;
    const GET = 1;
    // etc.
}
class Action 
{
    private $actionString;
    private $action;
	public function __construct($name){
      
      
        $this->actionString = $name;	
        switch ($name) {
            case 'get':
                $this->action = ActionEnum::GET;
                break;  
            case 'getAll':
                $this->action = ActionEnum::GET_ALL;
                break;
            case 'saveAll':
                $this->action = ActionEnum::SAVE_ALL;
                break;
            
            default:
            $this->action = -10;
                break;
        }	
    }
    
    public function to_string(){	
        switch ($this->action) {
            case ActionEnum::GET_ALL:
           return 'GET_ALL';
           case ActionEnum::GET:
           return 'GET';
           case ActionEnum::SAVE_ALL:
           return 'GET';
            default:
           
                # code...
                break;
        }	
    }
    public function get_action(){
        return $this->action;
    }
}

