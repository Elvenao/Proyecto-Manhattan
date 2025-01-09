<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try {
        $input = json_decode(file_get_contents("php://input"),true);
        if($input["action"] === "Borrar"){
            if(!isset($input['id'])){
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
            $ID = $input['id'];
            $model = new MainModel();
            $resultado = $model->deleteRow('Notas','Id_Notas = ?',[$ID]);
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                exit;
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                exit;
            }
        }
    } catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>