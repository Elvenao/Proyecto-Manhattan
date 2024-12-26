<?php 
session_start();
header("Content-Type: application/plain");

try {
    // Obtener datos del cuerpo de la solicitud
    $input =  file_get_contents("php://input");

    // Validar datos
    if (isset($_SESSION["LoggedIn"]) && isset($input)){
        
        session_unset();
        session_destroy();
        echo json_encode(["resultado" => 1, "mensaje" => "Sesión Cerrada"]);
        exit;
    }

    

    
} catch (Exception $e) {
    echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
}

?>


