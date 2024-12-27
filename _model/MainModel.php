<?php
    if(isset($_SESSION["LoggedIn"]) ){
        require_once  "class/MySQLAux.php";
    }else {
        require_once  "../class/MySQLAux.php";
    }
    class MainModel{
        
        public function getDataRows($tabla, $campos, $condicion = null, $params = null){
            //Conectar la BD
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $datos = $mysql->selectRows($tabla, $campos, $condicion, $params);
            return $datos;
        }

        public function insertRow($tabla,$campos, $params = null){
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $lastIdInsert = $mysql->insertRow($tabla,$campos,$params);
            return $lastIdInsert;
        }

        public function getDataRowsOrdered($tabla, $campos, $condicion = null, $params = null){
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $datos = $mysql->selectRowsOrderBy($tabla, $campos, $condicion, $params);
            return $datos;
        }
    }
    

    //Las librerias/clases no se cierran 