<?php
    $dir = __DIR__;
    
    $filePath = $dir . '/../class/MySQLAux.php';
    
    if (isset($_SESSION["LoggedIn"])) {
        require_once $filePath;
    } else {
        require_once $filePath;
    } 
    class MainModel{
        
        public function getDataRows($tabla, $campos, $condicion = null, $params = null){
            //Conectar la BD
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $datos = $mysql->selectRows($tabla, $campos, $condicion, $params);
            return $datos;
        }

        public function getDataRowsJoin($tabla,$campos,$joinTable,$foreignKeys,$condicion = null, $params = null){
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $datos = $mysql->selectRowsJoin($tabla, $campos, $joinTable, $foreignKeys,$condicion, $params);
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

        public function updateData($tabla,$campos,$condicion = null, $params = null){
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $datos = $mysql->updateRow($tabla,$campos,$condicion,$params);
            return $datos;
        }

        public function deleteRow($tabla,$condicion = null, $params = null){
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $datos = $mysql->deleteRow($tabla,$condicion,$params);
            return $datos;
        }

        public function specialQuery($query){
            $mysql = new MySQLAux("10.0.1.3", "basedatos","Zoroark","renamon");
            $datos = $mysql->specialQuery($query);
            return $datos;
        }
        
    }
    

    //Las librerias/clases no se cierran 