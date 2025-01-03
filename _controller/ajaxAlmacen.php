<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try{
        $input = json_decode(file_get_contents("php://input"),true);
        if($input["action"] === "Insertar"){
            if (!isset($input['id_inventario']) || !isset($input['nombre']) || !isset($input['Cantidad']) || !isset($input['estado']) || !isset($input['categoria'])) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
            $Id = $input["id_inventario"];
            $nombre = $input["nombre"];
            $Stock = $input["Cantidad"];
            $informacion = ($input["informacion"] == '')? null: $input["informacion"];
            $costo = ($input["costo"] == '')? null : $input["costo"];
            $status = $input["estado"];
            $IC_Id = $input["categoria"];

            $model = new MainModel();
            $resultado = $model->updateData('Inventario',['Nombre','Stock','Informacion','Costo','status','IC_Id'],'Id_Inventario = ?',[$nombre,$Stock,$informacion,$costo,$status,$IC_Id,$Id]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Edicion exitosa"]);
                exit;
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "No se pudo editar"]);
                exit;
            }
        }else if($input["action"] === "Borrar"){
            if(!isset($input['id_inventario'])){
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
            $ID = $input['id_inventario'];
            $model = new MainModel();
            $resultado = $model->deleteRow('Inventario','Id_Inventario = ?',[$ID]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                exit;
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                exit;
            }
        }else if($input["action"] === "Agregar"){
            if (empty($input['nombre']) || empty($input['stock']) || !isset($input['status']) || !isset($input['categoria'])) {
                echo json_encode(["resultado" => 0, "mensaje" => ": Faltan datos"]);
                exit;
            }
            $nombre = $input["nombre"];
            $Stock = $input["stock"];
            $informacion = !empty($input['informacion']) ? $input['informacion'] : null;
            $costo = !empty($input['costo']) ? $input['costo'] : null;
            $status = intval($input["status"]);
            if($status == 0) $status = 'TRUE';
            else $status = 'FALSE';
            $IC_Id = $input["categoria"];
    
            $model = new MainModel();
            $resultado = $model->insertRow('Inventario',['Nombre','Stock','Informacion','Costo','IC_Id','status'],[$nombre,$Stock,$informacion,$costo,$IC_Id,$status]);
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