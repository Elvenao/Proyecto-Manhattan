<?php
    require_once "_model/MainModel.php";

    class editarUsuario{
        private $rol;
        private $permisos;
        private $id;
        
        public function __construct($id){
            $model = new MainModel();
            $this->id = $id;
            $this->rol = $model->getDataRows("roles",["id_rol","descripcion","permisos"],'id_rol = ?',[$id]);
            $this->permisos = $model->getDataRows('permisos',['id_permisos','permiso AS descripcion']);
            
        }

        public function renderContent(){
            if($this->rol != null && $this->id != '8'){
                include "_view/editarRol.html";    
            }else{
                include "_view/404.html";
            }
            
        }

        public function renderCSS(){

        }

        public function renderJS(){
            include "js/editarRol.js";
        }

    }