<?php
    require_once SITE_URL."class/MySQLAux.php";
    class MainModel{
        
        public function getDataRows($tabla, $campos, $condicion = null, $params = null){
            //Conectar la BD
            $mysql = new MySQLAux("localhost", "usuarios","root","Bloodborn3");
            $datos = $mysql->selectRows($tabla, $campos, $condicion, $params);
            return $datos;
        }

    }
    

    //Las librerias/clases no se cierran 