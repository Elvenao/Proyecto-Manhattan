<?php 
    require_once "_model/MainModel.php";
    class ListaInventarioController{
        private $datos;
        public function __construct(){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRows("Inventario",["Id_Inventario","Nombre","Stock", "IC_Id"]);
            $this->datos = $mysql->getDataRowsJoin("Inventario",["Id_Inventario","Nombre","Stock", "IC_Id","Categoria"],"Inventario_Categorias",["IC_Id","Id_IC"],[""]);
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