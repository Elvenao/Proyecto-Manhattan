<?php 
    
    require_once "_model/MainModel.php";
  
    class perfilController{
        private $datos;
<<<<<<< HEAD
        private $genero;
        
        public function __construct(){
            $model = new MainModel();
            $user = $_SESSION["usr"];
            $this->datos = $model->getDataRowsJoin('usuario',["nombre","apellidos","fecha_nacimiento","fecha_inicio","rol_id",'descripcion','user','fecha_fin','telefono'],'roles',['rol_id','id_rol'],['user = ?'],[$user]);
            $this->genero = $model->getDataRowsJoin('usuario',['genero'],'genero',['genero_id','id_genero'],['user = ?'],[$user]);
=======
        public function __construct(){
            $model = new MainModel();
            $user = $_SESSION["LoggedIN"];
            $this->datos = $model->getDataRows("usuario",["nombre","apellidos","fecha_nacimiento","fecha_inicio"], "user = ?;",[$user]);
>>>>>>> origin/Altern
        }
        public function renderContent(){
            include "_view/perfil.html";
        }
<<<<<<< HEAD

        public function renderCSS(){
            
        }
        public function renderJS(){
            include "js/perfil.js";
        }
=======
>>>>>>> origin/Altern
    }