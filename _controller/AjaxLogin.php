<?php 
/*
    require_once "_model/MainModel.php";
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);
    if(isset($_POST)){
        setcookie('pot', 3, 3434, "/");
    }
    if (!isset($data['user']) || !isset($data['pass'])) {
        http_response_code(400);
        echo json_encode(["resultado" => 0, "mensaje" => "Datos incompletos"]);
        exit;
    }
    $user = $data["user"];
    $pass = $data["pass"];

    $model = new MainModel();
    $usuario = $model->getDataRows("usuario",["user"],"user = ?;",[$user]);
    $contra = $model->getDataRows("usuario",["password"],"password = ?;",[$pass]);
    foreach($usuario as $registro):
       $usuario = $registro["user"]; 
    endforeach;
    foreach($contra as $registro):
        $contra = $registro["password"];
    endforeach;
    if($user == $usuario && $pass == $contra){
        setcookie("LoggedIN",time() + 4234234, time() + 3600,"/");
        echo json_encode(["resultado" => 1, "mensaje" => "Inicio de sesión exitoso"]);
    }
*/

// Configurar cabeceras
    
    require_once "_model/MainModel.php";
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
    $usuario = $model->getDataRows("usuario",["user"],"user = ?;",[$user]);
    $contra = $model->getDataRows("usuario",["password"],"password = ?;",[$pass]);
    foreach($usuario as $registro):
       $usuario = $registro["user"]; 
    endforeach;
    foreach($contra as $registro):
        $contra = $registro["password"];
    endforeach;

    // Simulación de lógica (e.g., consulta a base de datos)
    if ($user === $usuario && $pass === $contra) {
        echo json_encode(["resultado" => 1, "mensaje" => "Inicio de sesión exitoso"]);
        setcookie("LoggedIN",time() + 4234234, time() + 3600,"/");
    } else {
        echo json_encode(["resultado" => 0, "mensaje" => "Credenciales incorrectas"]);
    }
} catch (Exception $e) {
    echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
}


?>
