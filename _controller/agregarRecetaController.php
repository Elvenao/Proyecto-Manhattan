<?php 
    require_once "_model/MainModel.php";
    class agregarRecetaController{
        private $categorias;
        private $productos;
        private $productosCategorias;
        private $insumos;
        public function __construct(){
            $mysql = new MainModel();
            $this->categorias = $mysql->getDataRows('Inventario_Categorias',['Id_IC','Categoria']);
            $this->insumos = $mysql->getDataRowsJoin("Inventario",['Id_Inventario','Nombre','Stock','IC_Id','Categoria','Informacion'],'Inventario_Categorias',['IC_Id','Id_IC']);
            $this->productos = $mysql->getDataRows('Productos',['Id_Productos','Nombre','PC_Id']);
            $this->productosCategorias = $mysql->getDataRows('Productos_Categorias',["*"]);
            
        }

        public function renderContent(){
            include "_view/agregarReceta.html";
        }

        public function renderCSS(){

        }

        public function renderJS(){
            include "js/agregarReceta.js";
        }
    }