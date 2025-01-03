<?php 
    require_once "_model/MainModel.php";
    class MtoInventarioController{
        private $datos;
        private $categorias;
        public function __construct(){
            $model = new MainModel();
            $this->datos = $model->getDataRows("Inventario",['MAX(Id_Inventario) AS ID']);
            $this->categorias = $model->getDataRows("Inventario_Categorias",['Id_IC AS ID','Categoria']);
        }

        public function renderContent(){
            include "_view/agregarAlmacen.html";
        }

        public function renderJS(){
            include "js/agregarAlmacen.js";
        }

        public function renderCSS(){
            
        }
    }

