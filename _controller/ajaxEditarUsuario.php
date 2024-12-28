<?php
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");

    try{
        $input = json_decode(file_get_contents("php://input"),true);
        if (!isset($input['id_usuario']) || !isset($input['nombre']) || !isset($input['apellidos']) || !isset($input['user']) || !isset($input['password']) || !isset($input['fecha_nacimiento']) || !isset($input['fecha_inicio']) || !isset($input['rol_id'])) {
            echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
            exit;
        }
        $id_usuario = $input['id_usuario'];
        $nombre = $input['nombre'];
        $apellidos = $input['apellidos'];
        $user = $input['user'];
        $pass = $input['password'];
        $fecha_nacimiento = $input['fecha_nacimiento'];
        $fecha_inicio = $input['fecha_inicio'];
        $fecha_fin = ($input['fecha_fin'] == "") ? null : $input['fecha_fin'];
        $rol_id = $input['rol_id'];

        $model = new MainModel();
        $resultado = $model->updateData('usuario',['nombre','apellidos','user','password','fecha_nacimiento','fecha_inicio','fecha_fin','rol_id'],'id_usuario = ?;',[$nombre,$apellidos,$user,$pass,$fecha_nacimiento,$fecha_inicio,$fecha_fin,$rol_id,$id_usuario]);
        if($resultado){
            echo json_encode(["resultado" => 1, "mensaje" => "Usuario actualizado"]);
        }else{
            echo json_encode(["resultado" => 0, "mensaje" => "Error en la actualizacion: ".$rol_id. ", ".$nombre. ", ".$apellidos. ", ".$user. ", ".$pass. ", ".$fecha_nacimiento. ", ".$fecha_inicio.  ", ".$fecha_fin. ", ".$id_usuario]);
        }

    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
   


    
?> 