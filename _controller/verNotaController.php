<?php 
    require_once "_model/MainModel.php";
    
    class verNotaController{
        private $datos;
        public function __construct($id){
            $mysql = new MainModel();
            $this->datos = $mysql->getDataRows("Notas",["Id_Notas", "Contenido", "Fecha", "Hora", "Total"], "Id_Notas = ?", [$id]);
        }
        
        public function renderContent(){
            if($this->datos == null){
                include "_view/404.html";
            }else {
                include "_view/verNota.html";
            }
            
        }
        public function renderCSS(){
            
        }
    }