<?php
include '../function.php'; 
include '../autoload.php';



$action= new Action( $_GET['action']);

$dao =  new Dao(Config::getDb());
  switch ($action->get_action()) {
      case ActionEnum::GET_ALL:
         echo json_encode($dao->getAllOeuvresArray());
          break;
     case ActionEnum::GET:
          $key = $_GET['key'];
          $value = $_GET['value'];
         
          echo json_encode($dao->getAllOeuvresArrayWhitValue( $key, $value  ));
           break;
      
      default:
          # code...
          break;
  }
  $dao->close();
?> 