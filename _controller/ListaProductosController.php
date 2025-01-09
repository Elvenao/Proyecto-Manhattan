<?php 
    require_once "_model/MainModel.php";
    class ListaProductosController{
        private $datos;
        private $filtro;
        private $rol;
        public function __construct(){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRowsJoin("Productos",["Id_Productos","Nombre","Informacion","Precio","Costo","status", "PC_Id","Categoria"],"Productos_Categorias",["PC_Id","Id_PC"]);
            $this->filtro = $mysql->getDataRows('Productos_Categorias',['Id_PC','Categoria']);
            $this->rol = $mysql->getDataRows('usuario',['rol_id'],'user = ?',[$_SESSION['usr']]);
        }

        public function renderContent(){
            include "_view/listaProductos.html";
        }

        public function renderCSS(){
            include 'css/listaProductos.css';
        }
        public function renderJS(){
            include "js/listaProductos.js";
        }
    }