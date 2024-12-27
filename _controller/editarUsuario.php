<?php
    require_once "_model/MainModel.php";

    class editarUsuario{
        private $datos;
        public function __construct($usuario){
            $model = new MainModel();
            $this->datos = $model->getDataRows("usuario",["nombre","apellidos","user","password","fecha_nacimiento","fecha_inicio","fecha_fin","rol_id"],"user = ?",[$usuario]);
        }

        public function renderContent(){
            include "_view/editarUsuario.html";
        }

        public function renderCSS(){

        }

        public function renderJS(){
            include "js/editarUsuario.js";
        }

    }