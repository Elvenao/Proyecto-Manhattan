<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try{
        $input = json_decode(file_get_contents("php://input"),true);
        if($input["action"] === "Editar"){
            if (!isset($input['id']) ) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit();
            }
            $Id = $input["id"];
            

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
            if(!isset($input["productos"]) || !isset($input["idProducto"]) || !isset($input["nombreProducto"])) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
            $id = $input["idProducto"];
            $productos = json_encode($input["productos"]) ;
            $nombreProducto = $input["nombreProducto"];
            $model = new MainModel();
            $resultado = $model->insertRow('Recetas',['Receta','Producto'],[$productos,$nombreProducto]);
            $idInserted = $model->getDataRows('Recetas',['Id_Receta'],'Producto = ?',[$nombreProducto]);
            $update = $model->updateData('Productos',['Receta_Id'],'Id_Productos = ?',[$idInserted[0]['Id_Receta'],$id]);
            if(!$resultado){
                echo json_encode(["resultado" => 0, "mensaje" => "No se pudo agregar"]);
                exit;
            }
            if($update){
                echo json_encode(["resultado" => 1, "mensaje" => "Adicion exitosa"]);
                exit;
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "No se pudo actualizar"]);
                exit;
            }
        }
    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>