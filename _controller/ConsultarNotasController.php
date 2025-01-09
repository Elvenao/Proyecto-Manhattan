<?php 
    require_once "_model/MainModel.php";
    
    class ConsultarNotasController{

        private $datos;
        public function __construct(){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRows("Notas",["Id_Notas", "Fecha", "Hora", "Total"]);
        }

        public function renderContent(){
            include "_view/consultarNotas.html";
        }

        public function renderJS(){
            include "js/listanotas.js";
        }
        public function renderCSS(){
            include "css/listanotas.css";
        }
    }