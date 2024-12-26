<?php 
    require_once "_model/MainModel.php";
    class MtoInventarioController{
        private $datos;
        public function __construct(){
            // $model = new MainModel();
            //$this->datos = $model->getDataRows("producto",["id_producto","nombre","precio"]);
        }

        public function renderContent(){
            include "_view/mto_producto.html";
        }

        public function renderJS(){
            include "js/ctrlMtoProducto.js";
        }

        public function renderCSS(){
            
        }
    }

