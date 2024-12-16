<?php 
    
    require_once "_model/MainModel.php";
  
    class perfilController{
        private $datos;
        public function __construct(){
            $model = new MainModel();
            $user = $_SESSION["LoggedIN"];
            $this->datos = $model->getDataRows("usuario",["nombre","apellidos","fecha_nacimiento","fecha_inicio"], "user = ?;",[$user]);
        }
        public function renderContent(){
            include "_view/perfil.html";
        }
    }