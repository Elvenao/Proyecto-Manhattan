<?php 
    require_once "_model/MainModel.php";

    class configuracionController{
        private $datos;
        private $generos;
        private $categoriasI;
        private $categoriasP;
        public function __construct(){
            $model = new MainModel();
            
            
            $this->datos = $model->getDataRowsJoin('usuario',["nombre","apellidos","user","password","fecha_nacimiento","fecha_inicio","fecha_fin","rol_id",'descripcion','telefono'],'roles',['rol_id','id_rol'],["user != ?","ORDER BY id_usuario","DESC"],[$_SESSION["usr"]]);
            $this->generos = $model->getDataRowsJoin('usuario',['genero'],'genero',['genero_id','id_genero'],["user != ?","ORDER BY id_usuario","DESC"],[$_SESSION["usr"]]);
            $this->categoriasI = $model->getDataRows('Inventario_Categorias',['Id_IC','Categoria']);
            $this->categoriasP = $model->getDataRows('Productos_Categorias',['Id_PC','Categoria']);
        }
        public function renderContent(){
            include "_view/configuracion.html";
        }

        public function renderJS(){
            include "js/configuracion.js";
        }

        public function renderCSS(){
            include "css/configuracion.css";
        }
    }