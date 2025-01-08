<?php
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    $options = [
        'memory_cost' => 1 << 18, 
        'time_cost'   => 8,       
        'threads'     => 2        
    ];
    try{
        $input = json_decode(file_get_contents("php://input"),true);
        if($input["action"] == "Editar"){
            if (!isset($input['id_usuario']) || !isset($input['nombre']) || !isset($input['apellidos']) || !isset($input['user']) || !isset($input['password']) || !isset($input['fecha_nacimiento']) || !isset($input['fecha_inicio']) || !isset($input['rol_id'])) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
           
            $id_usuario = $input['id_usuario'];
            $nombre = $input['nombre'];
            $apellidos = $input['apellidos'];
            $user = $input['user'];
            $unhashedPassword = $input['password'];
            $password = password_hash($unhashedPassword,PASSWORD_ARGON2ID,$options);
            $fecha_nacimiento = $input['fecha_nacimiento'];
            $fecha_inicio = $input['fecha_inicio'];
            $fecha_fin = ($input['fecha_fin'] == "") ? null : $input['fecha_fin'];
            $rol_id = $input['rol_id'];

            $model = new MainModel();
            $resultado = $model->updateData('usuario',['nombre','apellidos','user','password','fecha_nacimiento','fecha_inicio','fecha_fin','rol_id'],'id_usuario = ?;',[$nombre,$apellidos,$user,$password,$fecha_nacimiento,$fecha_inicio,$fecha_fin,$rol_id,$id_usuario]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Usuario actualizado"]);
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "Error en la actualizacion: ".$rol_id. ", ".$nombre. ", ".$apellidos. ", ".$user. ", ".$pass. ", ".$fecha_nacimiento. ", ".$fecha_inicio.  ", ".$fecha_fin. ", ".$id_usuario]);
            }
        }else if($input["action"] == "Borrar"){
            if (!isset($input['id_usuario'])) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
            setcookie("ID",$input['id_usuario'],time()+23,"/");
            $model = new MainModel();
            $resultado = $model->deleteRow('usuario','id_usuario = ?;',[$input['id_usuario']]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Usuario Borrado"]);
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "Error en la actualizacion: ".$rol_id. ", ".$nombre. ", ".$apellidos. ", ".$user. ", ".$pass. ", ".$fecha_nacimiento. ", ".$fecha_inicio.  ", ".$fecha_fin. ", ".$id_usuario]);
            }
            
        }else if($input["action"] == "Agregar"){
            if (!isset($input['nombre']) || !isset($input['apellidos']) || !isset($input['user']) || !isset($input['password']) || !isset($input['fecha_nacimiento']) || !isset($input['fecha_inicio']) || !isset($input['rol_id'])) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit();
            }
            
            $nombre = $input['nombre'];
            $apellidos = $input['apellidos'];
            $user = $input['user'];
            $pass = $input['password'];
            $password = password_hash($pass,PASSWORD_ARGON2ID,$options);
            $fecha_nacimiento = $input['fecha_nacimiento'];
            $fecha_inicio = $input['fecha_inicio'];
            $fecha_fin = isset($input['fecha_fin']) ? $input['fecha_fin'] : null;
            $rol_id = $input['rol_id'];
        
            
            $model = new MainModel();

            $usuario = $model->getDataRows('usuario',["user"],'user = ?',[$user]);
            
            if(isset($usuario[0]['user'])){
                if($usuario[0]['user'] == $user){
                    echo json_encode(["resultado" => 2,"titulo"=>"Usuario repetido", "mensaje" => "Usuario repetido, ingresa otro"]);
                    exit();
                }
            }
            

            $lastIdInserted = $model->insertRow('usuario',['nombre','apellidos','user','password','fecha_nacimiento','fecha_inicio','fecha_fin','rol_id'],[$nombre,$apellidos,$user,$password,$fecha_nacimiento,$fecha_inicio,$fecha_fin,$rol_id]);
            if(!$lastIdInserted){
                echo json_encode(["resultado" => 0,"titulo"=>"Usuario repetido", "mensaje" => "Error en la insercion"]);
            }else{
                echo json_encode(["resultado" => 1,"titulo"=>"Usuario repetido", "mensaje" => "Usuario insertado con id".$lastIdInserted]);
            }
        }

    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
   


    
?> 