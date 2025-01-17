<?php
    require_once "_model/MainModel.php";

    class configurarCategoriasController{
        private $categoriasI;
        private $categoriasP;

        public function __construct(){
            $model = new MainModel();
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