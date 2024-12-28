<?php 
    
    require_once "_model/MainModel.php";
  
    class perfilController{
        private $datos;
        public function __construct(){
            $model = new MainModel();
            $user = $_SESSION["usr"];
            $this->datos = $model->getDataRows("usuario",["nombre","apellidos","fecha_nacimiento","fecha_inicio","rol_id"], "user = ?;",[$user]);
        }
        public function renderContent(){
            include "_view/perfil.html";
        }

        public function renderCSS(){
            
        }
        public function renderJS(){
            include "js/perfil.js";
        }
    }