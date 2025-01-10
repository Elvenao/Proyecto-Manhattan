<?php
    require_once "_model/MainModel.php";
    
    class listaRecetasController{
        private $datos;
        public function __construct(){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRows('Recetas',['Id_Receta','Producto']);
        }
        public function renderContent(){
            include "_view/listaRecetas.html";
        }

        public function renderJS(){
            include "js/listaRecetas.js";
        }

        public function renderCSS(){
            
        }
    }