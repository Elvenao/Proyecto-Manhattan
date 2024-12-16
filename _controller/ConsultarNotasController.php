<?php 
    require_once "_model/MainModel.php";
    
    class ConsultarNotasController{

        public function renderContent(){
            include "_view/consultarNotas.html";
        }
    }