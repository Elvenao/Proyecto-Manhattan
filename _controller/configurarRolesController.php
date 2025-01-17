<?php
    require_once "_model/MainModel.php";

    class configurarRolesController{
        private $permisos;
        private $Roles;

        public function __construct(){
            $model = new MainModel();
            $this->permisos = $model->getDataRows('permisos',["id_permisos","permiso"]);
            $this->Roles = $model->getDataRows('roles',['id_rol','descripcion','permisos AS permisoRol']);
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