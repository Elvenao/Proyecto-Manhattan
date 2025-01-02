<?php
    require_once "_model/MainModel.php";

    class agregarProductoController{
        private $datos;
        private $categorias;
        private $nextId;

        public function __construct(){
            $mysql = new MainModel();
            $this->categorias = $mysql->getDataRowsJoin("Productos",["PC_Id", "Categoria"],'Productos_Categorias',['PC_Id','Id_PC'],[null,"GROUP BY PC_Id"],);
            $this->nextId = $mysql->getDataRows('Productos', ['MAX(Id_Productos) AS ID']);
            
        }

        public function renderContent(){
            include "_view/agregarProducto.html";
        }

        public function renderCSS(){

        }

        public function renderJS(){
            include "js/agregarProducto.js";
        }
    }