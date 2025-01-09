<?php 
    require_once "../_model/MainModel.php";
    header("Content-Type: application/json");
    try{
        $input = json_decode(file_get_contents("php://input"),true);
        $model = new MainModel();
        if($input['categoria'] == 'Inventario'){
            if($input['action'] == 'Editar'){
                $res = $model->updateData('Inventario_Categorias',['Categoria'],'Id_IC = ?',[$input['data'],$input['id']]);
                if($res){
                    echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                    exit();
                }else{
                    echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                    exit();
                }
            }
            else if($input['action'] == 'Agregar'){
                $res = $model->insertRow('Inventario_Categorias',['Categoria'],[$input['data']]);
                if($res){
                    echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                    exit();
                }else{
                    echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                    exit();
                }
            }else if($input['action'] == "Borrar"){
                $res = $model->deleteRow('Inventario_Categorias','Id_IC = ?',[$input['id']]);
                setcookie("ASD",$input["id"]);
                if($res){
                    echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                    exit();
                }else{
                    echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                    exit();
                }
            }
            

        }else if($input['categoria'] == 'Producto'){
            if($input['action'] == 'Editar'){
                $res = $model->updateData('Productos_Categorias',['Categoria'],'Id_PC = ?',[$input['data'],$input['id']]);
                if($res){
                    echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                    exit();
                }else{
                    echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                    exit();
                }
            }else if($input['action'] == "Agregar"){
                $res = $model->insertRow('Productos_Categorias',['Categoria'],[$input['data']]);
                if($res){
                    echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                    exit();
                }else{
                    echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                    exit();
                }
            }else if($input['action'] == "Borrar"){
                $res = $model->deleteRow('Productos_Categorias','Id_PC = ?',[$input['id']]);
                if($res){
                    echo json_encode(["resultado" => 1, "mensaje" => "Borrado exitoso"]);
                    exit();
                }else{
                    echo json_encode(["resultado" => 0, "mensaje" => "No se pudo borrar"]);
                    exit();
                }
            }
        }
        
    }catch(Exception $e){
        echo json_encode(["resultado" => 0, "mensaje" => "Error interno: " . $e->getMessage()]);
    }
?>