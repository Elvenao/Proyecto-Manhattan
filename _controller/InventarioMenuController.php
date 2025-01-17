<?php 
    require_once "_model/MainModel.php";
    
    class InventarioMenuController{
        private $permisos;
        private $permiso;
        private $almacen;
        private $productos;
        public function renderContent(){
            $model = new MainModel();
            $this->permisos = $model->getDataRowsJoin('usuario',['rol_id','permisos'],'roles',['rol_id','id_rol'],['user = ?'],[$_SESSION['usr']]);
            $this->permiso = $this->permisos[0]['permisos'];
            $this->almacen = strval($this->permiso)[0];
            $this->productos = strval($this->permiso)[1];
            
            include "_view/inventarioMenu.html";
        }

        public function renderCSS(){
            
        }
        public function renderJS(){
            include 'js/inventarioMenu.js';
        }
    }