<?php 
    require_once "_model/MainModel.php";
    
    class InventarioMenuController{

        public function renderContent(){
            include "_view/inventarioMenu.html";
        }
    }