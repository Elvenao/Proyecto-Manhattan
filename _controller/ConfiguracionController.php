<?php 
    require_once "_model/MainModel.php";

    class configuracionController{
        private $datos;
        private $generos;
        private $categoriasI;
        private $categoriasP;
        private $permisos;
        private $permiso;
        private $almacen;
        private $productos;
        private $categoriaAlmacen;
        private $categoriaProductos;
        private $usuarios;
        private $roles;
        public function __construct(){
            $model = new MainModel();
            $this->permisos = $model->getDataRowsJoin('usuario',['rol_id','permisos'],'roles',['rol_id','id_rol'],['user = ?'],[$_SESSION['usr']]);
            $this->permiso = $this->permisos[0]['permisos'];
            $this->almacen = strval($this->permiso)[0];
            $this->productos = strval($this->permiso)[1];
            $this->categoriaAlmacen = strval($this->permiso)[2];
            $this->categoriaProductos = strval($this->permiso)[3];
            $this->usuarios = strval($this->permiso)[4];
            $this->roles = strval($this->permiso)[5];
            
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