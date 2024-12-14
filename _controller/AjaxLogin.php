<?php 
require_once '../_model/MainModel.php';

header("Content-Type: application/json");

try {
    // Obtener datos del cuerpo de la solicitud
    $input = json_decode(file_get_contents("php://input"), true);

    // Validar datos
    if (!isset($input['user']) || !isset($input['pass'])) {
        echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
        exit;
    }

    $user = $input['user'];
    $pass = $input['pass'];


    $model = new MainModel();
    $usuario = $model->getDataRows("usuario", ["user", "password"], "user = ?;", [$user]);

    if ($usuario && $usuario[0]['user'] === $user && $usuario[0]['password'] === $pass) {
        echo json_encode(["resultado" => 4, "mensaje" => "Inicio de sesion exitoso"]);
        setcookie("LoggedIN", "true", 0, "/");
        exit;
    } else {
        echo json_encode(["resultado" => 0, "mensaje" => "Credenciales incorrectas"]);
    }

    
} catch (Exception $e) {
    echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
}

?>
