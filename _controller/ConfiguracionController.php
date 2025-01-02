<?php 
    require_once "_model/MainModel.php";

    class configuracionController{
        private $datos;
        public function __construct(){
            $model = new MainModel();
            
            $this->datos = $model->getDataRowsOrdered("usuario",["nombre","apellidos","user","password","fecha_nacimiento","fecha_inicio","fecha_fin","rol_id"],["user != ?","id_usuario","DESC"],[$_SESSION["usr"]]); 
        }
        public function renderContent(){
            include "_view/configuracion.html";
        }

        public function renderJS(){
            include "js/configuracion.js";
        }

        public function renderCSS(){
            include "css/configuracion.css";
        }
    }