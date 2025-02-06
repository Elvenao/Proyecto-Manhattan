<?php
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try{
        $input = json_decode(file_get_contents("php://input"),true);
        if($input["action"] == "Editar"){
            if(!isset($input['rol']) || !isset($input['permisos']) || !isset($input["id"])){
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit(); 
            }
            $id = $input["id"];
            $rol = $input['rol'];
            $permisos = $input['permisos'];
            $model = new MainModel();
            $resultado = $model->updateData('roles',['descripcion','permisos'],'id_rol = ?;',[$rol,$permisos,$id]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Rol editado"]);
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "Error en la actualizacion"]);
            }
        }else if($input["action"] == "Borrar"){
            if(!isset($input["id"])){
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit();
            }
            $id = $input['id'];
            $model = new MainModel();
            $removeFromExistentUsers = $model->updateData('usuario',['rol_id'],'rol_id = ?',['8',$id]);
            if(!$removeFromExistentUsers){
                echo json_encode(["resultado" => 0, "mensaje" => "Error reasignando"]);
                exit();
            }
            
            $resultado = $model->deleteRow('roles','id_rol = ?',[$id]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Rol Borrado"]);
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "Error borrando"]);
            }

        }else if($input["action"] == "Agregar"){
            if(!isset($input['rol']) || !isset($input['permisos'])){
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit(); 
            }
            
            $rol = $input['rol'];
            $permisos = $input['permisos'];
            $model = new MainModel();
            $resultado = $model->insertRow('roles',['descripcion','permisos'],[$rol,$permisos]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Rol editado"]);
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "Error en la actualizacion"]);
            }
        }

    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
   


    
?> 