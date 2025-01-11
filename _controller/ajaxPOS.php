<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try {
        $input = json_decode(file_get_contents("php://input"), true);
        if ($input["action"] === "Select") {
            if (!isset($input['value'])) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos"]);
                exit;
            }
            $ID = $input['value'];
            $model = new MainModel();
            $resultado = $model->getDataRows("Productos", ["Id_Productos", "Nombre", "Precio"], "PC_Id = ? ", [$ID]);
            if ($resultado) {
                echo json_encode(["resultado" => 1, "datos" => $resultado]);
                exit;
            } else {
                echo json_encode(["resultado" => 0, "mensaje" => "No se encontraron datos"]);
                exit;
            }
        }else if($input["action"] === "Ticket"){
            if(!isset($input["json"]) || !isset($input["total"]) || empty($input["json"]) || $input["total"] == 0.00 || json_decode($input["json"]) == []) {
                echo json_encode(["resultado" => 0, "mensaje" => "Faltan datos o el total es 0"]);
                exit;
            }
            
            
            $fechaActual = date("Y-m-d");
            $horaActual = date("H:i:s");
            $json = $input["json"];
            $total = $input["total"];
            
            // Validación adicional: no permitir que el contenido esté vacío o que el total sea 0
            if ($total == 0.00 || json_decode($json) == []) {
                echo json_encode(["resultado" => 0, "mensaje" => "No se puede crear la nota con contenido vacío o con total 0"]);
                exit;
            }
            
            $model = new MainModel();
            $resultado = $model->insertRow('Notas', ['Contenido','Fecha','Hora','Total'], [$json, $fechaActual, $horaActual, $total]);
            
            if($resultado){
                echo json_encode(["resultado" => 1, "mensaje" => "Adición exitosa"]);
                exit;
            }else{
                echo json_encode(["resultado" => 0, "mensaje" => "Error al insertar el registro"]);
                exit;
            }
        }
        
    } catch (Exception $e) {
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
    
?>
