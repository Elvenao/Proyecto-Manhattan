<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try{
        $input = json_decode(file_get_contents("php://input"),true);
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
    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>