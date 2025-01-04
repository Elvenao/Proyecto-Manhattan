<?php 
    require_once "_model/MainModel.php";
    class MtoInventarioController{
        private $datos;
        private $categorias;
        public function __construct(){
            $mysql = new MainModel();
            $this->datos = $mysql->specialQuery("SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'basedatos' AND TABLE_NAME = 'Inventario'");
            $this->categorias = $mysql->getDataRows("Inventario_Categorias",['Id_IC AS ID','Categoria']);
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

