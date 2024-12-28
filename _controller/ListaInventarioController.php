<?php 
    require_once "_model/MainModel.php";
    class ListaInventarioController{
        private $datos;
        public function __construct(){
            $model = new MainModel();
            $this->datos = $model->getDataRows("Inventario",["Id_Inventario","Nombre","Stock", "IC_Id"]);
        }

        public function renderContent(){
            include "_view/lista_producto.html";
        }

        public function renderCSS(){
            include 'css/listaInventario.css';
        }
        public function renderJS(){
            include "js/listaInventario.js";
        }
    }