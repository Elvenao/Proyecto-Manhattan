<?php
    require_once "_model/MainModel.php";

    class editarProducto{
        private $datos;
        private $categorias;
        public function __construct($id){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRowsJoin('Productos',['Id_Productos','Nombre','Informacion','Precio','Costo','status','PC_Id','sT.Categoria'],'Productos_Categorias',['PC_Id','Id_PC'],["Id_Productos = ?"],[$id]);
            $this->categorias = $mysql->getDataRowsJoin("Productos",["PC_Id", "Categoria"],'Productos_Categorias',['PC_Id','Id_PC'],["","GROUP BY PC_Id"],);
        }
        public function renderContent(){
            if($this->datos != null){
                include "_view/editarProducto.html";
            }else{
                include "_view/404.html";
            }
           
        }
        public function renderCSS(){

        }

        public function renderJS(){
            include "js/editarProducto.js";
        }
    }