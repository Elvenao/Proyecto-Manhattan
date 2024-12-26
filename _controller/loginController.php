<?php 
    require_once "_model/MainModel.php";
    
    class loginController{
        
        public function renderContent(){
            include "_view/login.html";
        }

        public function renderCSS(){
            include "css/login.css";
        }
    }