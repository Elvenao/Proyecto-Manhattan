<?php
    require_once "_model/MainModel.php";

    class configurarUsuariosController{
        private $datos;
        private $generos;
        private $permisos;
        private $permiso;
        private $usuarios;
        public function __construct(){
            $model = new MainModel();
            $this->permisos = $model->getDataRowsJoin('usuario',['rol_id','permisos'],'roles',['rol_id','id_rol'],['user = ?'],[$_SESSION['usr']]);
            $this->permiso = $this->permisos[0]['permisos'];
            
            $this->usuarios = strval($this->permiso)[4];
            
            $this->datos = $model->getDataRowsJoin('usuario',["nombre","apellidos","user","password","fecha_nacimiento","fecha_inicio","fecha_fin","rol_id",'descripcion','telefono'],'roles',['rol_id','id_rol'],["user != ?","ORDER BY id_usuario","DESC"],[$_SESSION["usr"]]);
            $this->generos = $model->getDataRowsJoin('usuario',['genero'],'genero',['genero_id','id_genero'],["user != ?","ORDER BY id_usuario","DESC"],[$_SESSION["usr"]]);
        }
        public function renderContent(){
            include "_view/configurarUsuario.html";
        }

        public function renderJS(){
            include "js/configurarUsuario.js";
        }

        public function renderCSS(){
            include "css/configurarUsuario.css";
        }
    }