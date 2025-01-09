<?php 
    require_once "_model/MainModel.php";
    
    class posController{
        private $categorias;
        public function __construct(){
            $mysql = new MainModel();
            $this->categorias = $mysql->getDataRows("Productos_Categorias",["Id_PC", "Categoria"]);
        }

        public function renderContent(){
            include "_view/puntodeventa.html";
        }
        public function renderCSS(){
            
        }

        public function renderJS(){
            include "js/pos.js";
        }
    }
