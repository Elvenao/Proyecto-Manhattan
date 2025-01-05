<?php
    require_once "_model/MainModel.php";

    class editarUsuario{
        private $datos;
        private $categorias;
        public function __construct($usuario){
            $model = new MainModel();
            $this->datos = $model->getDataRows("usuario",["id_usuario","nombre","apellidos","user","fecha_nacimiento","fecha_inicio","fecha_fin","rol_id"],"user = ?",[$usuario]);
            $this->categorias = $model->getDataRows('roles',['id_rol','descripcion']);
            
        }

        public function renderContent(){
            if($this->datos != null){
                include "_view/editarUsuario.html";    
            }else{
                include "_view/404.html";
            }
            
        }

        public function renderCSS(){

        }

        public function renderJS(){
            include "js/editarUsuario.js";
        }

    }