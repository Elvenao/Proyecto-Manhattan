<?php
    require_once "_model/MainModel.php";

    class configurarRolesController{
        private $permisos;
        private $Roles;
        private $permisos1;
        private $permiso;
        private $roles;

        public function __construct(){
            $model = new MainModel();
            $this->permisos1 = $model->getDataRowsJoin('usuario',['rol_id','permisos'],'roles',['rol_id','id_rol'],['user = ?'],[$_SESSION['usr']]);
            $this->permiso = $this->permisos1[0]['permisos'];
            
            $this->roles = strval($this->permiso)[5];
            $this->permisos = $model->getDataRows('permisos',["id_permisos","permiso"]);
            $this->Roles = $model->getDataRows('roles',['id_rol','descripcion','permisos AS permisoRol'],'id_rol != ?',['8']);
        }
        public function renderContent(){
            include "_view/configurarRoles.html";
        }

        public function renderJS(){
            include "js/configurarRoles.js";
        }

        public function renderCSS(){
            include "css/configurarRoles.css";
        }
    }