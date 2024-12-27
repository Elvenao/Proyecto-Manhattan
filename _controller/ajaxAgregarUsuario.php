<?php
    require_once '../_model/MainModel.php';

    
    header("Content-Type: application/json");

    try {
        // Obtener datos del cuerpo de la solicitud
        $input = json_decode(file_get_contents("php://input"), true);
    
        // Validar datos
        if (!isset($input['nombre']) || !isset($input['apellidos']) || !isset($input['user']) || !isset($input['password']) || !isset($input['fecha_nacimiento']) || !isset($input['fecha_inicio']) || !isset($input['rol_id'])) {
            echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
            exit;
        }
    
        $nombre = $input['nombre'];
        $apellidos = $input['apellidos'];
        $user = $input['user'];
        $pass = $input['password'];
        $fecha_nacimiento = $input['fecha_nacimiento'];
        $fecha_inicio = $input['fecha_inicio'];
        $fecha_fin = isset($input['fecha_fin']) ? $input['fecha_fin'] : null;
        $rol_id = $input['rol_id'];
    
    
        $model = new MainModel();
        $lastIdInserted = $model->insertRow('usuario',['nombre','apellidos','user','password','fecha_nacimiento','fecha_inicio','fecha_fin','rol_id'],[$nombre,$apellidos,$user,$pass,$fecha_nacimiento,$fecha_inicio,$fecha_fin,$rol_id]);
        if(!$lastIdInserted){
            echo json_encode(["resultado" => 0, "mensaje" => "Error en la insercion: ".$rol_id. ", ".$nombre. ", ".$apellidos. ", ".$user. ", ".$pass. ", ".$fecha_nacimiento. ", ".$fecha_inicio.  ", ".$fecha_fin. ", "]);
        }else{
            echo json_encode(["resultado" => 1, "mensaje" => "Usuario insertado con id".$lastIdInserted]);
        }
        
    
        
    } catch (Exception $e) {
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>