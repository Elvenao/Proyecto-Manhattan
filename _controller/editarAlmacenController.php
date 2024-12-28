<?php
    require_once "_model/MainModel.php";

    class editarAlmacen{
        private $datos;
        private $categorias;
        public function __construct($id){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRowsJoin('Inventario',['Id_Inventario','Nombre','Stock','Informacion','Costo','status','IC_Id','sT.Categoria'],'Inventario_Categorias',['IC_Id','Id_IC'],["Id_Inventario = ?"],[$id]);
            $this->categorias = $mysql->getDataRowsJoin("Inventario",["IC_Id", "Categoria"],'Inventario_Categorias',['IC_Id','Id_IC'],["","GROUP BY IC_Id"],);
        }
        public function renderContent(){
            if($this->datos != null){
                include "_view/editarAlmacen.html";
            }else{
                include "_view/404.html";
            }
           
        }
        public function renderCSS(){

        }

        public function renderJS(){
            include "js/editarAlmacen.js";
        }
    }