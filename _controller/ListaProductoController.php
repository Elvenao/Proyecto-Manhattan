<?php 
    require_once "_model/MainModel.php";
    class ListaProductoController{
        private $datos;
        public function __construct(){
            $model = new MainModel();
            $this->datos = $model->getDataRows("producto",["id_producto","nombre","precio"]);
        }

        public function renderContent(){
            include "_view/lista_producto.html";
        }
    }

