<?php 
    require_once "_model/MainModel.php";
    class ListaInventarioController{
        private $datos;
        private $filtro;
        private $rol;
        public function __construct(){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRowsJoin("Inventario",["Id_Inventario","Nombre","Stock", "IC_Id","Categoria","Costo","Informacion","status"],"Inventario_Categorias",["IC_Id","Id_IC"],['','ORDER BY Id_Inventario','DESC']);
            $this->filtro = $mysql->getDataRows('Inventario_Categorias',['Id_IC','Categoria']);
            $this->rol = $mysql->getDataRows('usuario',['rol_id'],'user = ?',[$_SESSION['usr']]);
        }

        public function renderContent(){
            include "_view/listaInventario.html";
        }

        public function renderCSS(){
            include 'css/listaInventario.css';
        }
        public function renderJS(){
            include "js/listaInventario.js";
        }
    }