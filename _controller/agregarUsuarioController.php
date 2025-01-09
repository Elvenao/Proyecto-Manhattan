<?php
    require_once "_model/MainModel.php";

    class agregarUsuarioController{
        private $categorias;
        private $generos;
        public function __construct(){
            $model = new MainModel();
            $this->categorias = $model->getDataRows('roles',['id_rol','descripcion']);
            $this->generos = $model->getDataRows('genero',['id_genero','genero']);
        }

        public function renderContent(){
            include "_view/agregarUsuario.html";
        }

        public function renderCSS(){

        }

        public function renderJS(){
            include "js/agregarUsuario.js";
        }
    }