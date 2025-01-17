<?php
    require_once "_model/MainModel.php";

    class agregarRolController{
        private $permisos;
        
        public function __construct(){
            $model = new MainModel();
            $this->permisos = $model->getDataRows('permisos',['id_permisos','permiso AS descripcion']);
            
        }

        public function renderContent(){
            include "_view/agregarRol.html";
        }

        public function renderCSS(){

        }

        public function renderJS(){
            include "js/agregarRol.js";
        }
    }