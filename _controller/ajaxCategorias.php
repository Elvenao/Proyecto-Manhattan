<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try{
        $input = json_decode(file_get_contents("php://input"),true);
        $model = new MainModel();
        if($input['categoria'] == 'Inventario'){
            $model->updateData('Inventario_Categorias',['Categoria'],);
        }else if($input['categoria'] == 'Producto'){

        }
        
    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>