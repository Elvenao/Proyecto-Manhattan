<?php
    require_once '../_model/MainModel.php';
    header("Content-Type: application/json");
    try {
        // Obtener datos del cuerpo de la solicitud
        $input = json_decode(file_get_contents("php://input"), true);
    
        // Validar datos
        if (!isset($input['id_usuario'])) {
            echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
            exit;
        }
        setcookie("ID",$input['id_usuario'],time()+23,"/");
        $model = new MainModel();
        $resultado = $model->deleteRow('usuario','id_usuario = ?;',[$input['id_usuario']]);
        echo json_encode(["resultado" => 1, "mensaje" => "Usuario Borrado"]);

    } catch (Exception $e) {
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>