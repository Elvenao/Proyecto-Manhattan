<?php
    require_once "_model/MainModel.php";

    class agregarUsuarioController{
        public function __construct(){

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