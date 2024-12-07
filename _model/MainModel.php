<?php
    require_once "class/MySQLAux.php";
    class MainModel{
        
        public function getDataRows($tabla, $campos, $condicion = null, $params = null){
            //Conectar la BD
            $mysql = new MySQLAux("localhost", "prueba","root","Bloodborn3");
            $datos = $mysql->selectRows($tabla, $campos, $condicion, $params);
            return $datos;
        }

        
        

        
    }
    

    //Las librerias/clases no se cierran 