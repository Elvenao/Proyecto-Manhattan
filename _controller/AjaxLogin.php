<?php 
session_start();
require_once __DIR__ . '/../_model/MainModel.php';
require_once __DIR__ . '/../config/global.php';

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
<<<<<<< HEAD
    $usuario = $model->getDataRows("usuario", ["user", "password","rol_id"], "user = ?", [$user]);
    
    if($usuario != null){
        $hash = $usuario[0]['password'];
        if ($usuario && $usuario[0]['user'] === $user && password_verify($pass, $hash)) {
            echo json_encode(["resultado" => 1, "mensaje" => "Inicio de sesion exitoso"]);
            $_SESSION["usr"] = $usuario[0]['user'];
            $_SESSION["LoggedIn"] = CLAVE_SECRETA;
            $_SESSION["role"] = $usuario[0]["rol_id"];
            exit;
        } else {
            echo json_encode(["resultado" => 0, "mensaje" => "Credenciales incorrectas"]);
        }
    }else{
=======
    $usuario = $model->getDataRows("usuario", ["user", "password"], "user = ?;", [$user]);

    if ($usuario && $usuario[0]['user'] === $user && $usuario[0]['password'] === $pass) {
        echo json_encode(["resultado" => 1, "mensaje" => "Inicio de sesion exitoso"]);
        setcookie("LoggedIN", "true", time()+7200, "/");
        $_SESSION["LoggedIN"] = $user;
        exit;
    } else {
>>>>>>> origin/Altern
        echo json_encode(["resultado" => 0, "mensaje" => "Credenciales incorrectas"]);
    }
    

    
} catch (Exception $e) {
    echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
}

?>
