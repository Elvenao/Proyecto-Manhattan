<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try{
        $input = json_decode(file_get_contents("php://input"),true);
        if($input["action"] === "Editar"){
            if (!isset($input['id']) || !isset($input['producto']) || !isset($input['precio']) || !isset($input['costo']) || !isset($input['informacion']) || !isset($input['status']) || !isset($input['categoria'])) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit();
            }
            $Id = $input["id"];
            $producto = $input["producto"];
            $precio = $input["precio"];
            $costo = ($input["costo"] == '')? null : $input["costo"];
            $informacion = ($input["informacion"] == '')? null: $input["informacion"];
            $status = $input["status"];
            $PC_Id = $input["categoria"];

            $model = new MainModel();
            $resultado = $model->updateData('Productos',['Nombre','Informacion','Precio','Costo','status','PC_Id'],'Id_Productos = ?',[$producto,$informacion,$precio,$costo,$status,$PC_Id,$Id]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Edicion exitosa"]);
                exit();
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "No se pudo editar"]);
                exit();
            }
        }else if($input["action"] === "Borrar"){
            if(!isset($input['id'])){
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
            $ID = $input['id'];
            $model = new MainModel();
            $resultado = $model->deleteRow('Productos','Id_Productos = ?',[$ID]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                exit;
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                exit;
            }
        }else if($input["action"] === "Agregar"){
            if (empty($input['producto']) || empty($input['informacion']) || !isset($input['precio']) || !isset($input['costo']) || !isset($input['status']) || !isset($input['categoria'])) {
                echo json_encode(["resultado" => 0, "mensaje" => ": Faltan datos"]);
                exit;
            }
            $producto = $input["producto"];
            $informacion = !empty($input['informacion']) ? $input['informacion'] : null;
            $precio = $input["precio"];
            $costo = !empty($input['costo']) ? $input['costo'] : null;
            $status = intval($input["status"]);
            $PC_Id = $input["categoria"];
            
            $model = new MainModel();
            $resultado = $model->insertRow('Inventario',['Nombre','Informacion','Precio','Costo','Status','PC_Id'],[$producto,$informacion,$precio,$costo,$status,$PC_Id]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Adicion exitosa"]);
                exit;
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => ": Faltan datos"]);
                exit;
            }
        }
    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>