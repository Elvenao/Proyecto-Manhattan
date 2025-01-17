<?php
    require_once "_model/MainModel.php";

    class configurarCategoriasController{
        private $categoriasI;
        private $categoriasP;
        private $categoriaAlmacen;
        private $categoriaProductos;
        private $permisos;
        private $permiso;
        public function __construct(){
            $model = new MainModel();
            $this->permisos = $model->getDataRowsJoin('usuario',['rol_id','permisos'],'roles',['rol_id','id_rol'],['user = ?'],[$_SESSION['usr']]);
            $this->permiso = $this->permisos[0]['permisos'];
           
            $this->categoriaAlmacen = strval($this->permiso)[2];
            $this->categoriaProductos = strval($this->permiso)[3];
            
            $this->categoriasI = $model->getDataRows('Inventario_Categorias',['Id_IC','Categoria']);
            $this->categoriasP = $model->getDataRows('Productos_Categorias',['Id_PC','Categoria']);
        }
        public function renderContent(){
            include "_view/configurarCategorias.html";
        }

        public function renderJS(){
            include "js/configurarCategorias.js";
        }

        public function renderCSS(){
            include "css/configurarCategorias.css";
        }
    }