<?php 
    require_once "_model/MainModel.php";
    class agregarRecetaController{
        private $categorias;
        public function __construct(){
            $mysql = new MainModel();
            $this->categorias = $mysql->getDataRows('Inventario_Categorias',['Id_IC','Categoria']);
        }
        public function renderContent(){
            include "_view/agregarReceta.html";
        }

        public function renderCSS(){

        }

        public function renderJS(){

        }
    }