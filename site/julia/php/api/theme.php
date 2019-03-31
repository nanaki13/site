<?php
include '../function.php'; 
include '../autoload.php';



$action= new Action( $_GET['action']);

$dao =  new Dao(Config::getDb());
  switch ($action->get_action()) {
      case ActionEnum::GET_ALL:
        echo json_encode($dao->getAllThemesArray());
        break;
     case ActionEnum::SAVE_ALL:
        $request_body = file_get_contents('php://input');
        $themes = json_decode( $request_body);
      
        $dao->saveAllThemes($themes);
        echo('{ "status" : "ok"}');
  

           break;
      
      default:
          # code...
          break;
  }
  $dao->close();
?> 