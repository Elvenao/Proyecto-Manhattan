<?php
    ini_set("display_errors", E_ALL);
    
    require_once "config/global.php";

    $queryString = isset($_GET["querystring"]) ? $_GET["querystring"] : RUTA_DEFAULT;

    $queryString = str_ends_with($queryString, "/") ? $queryString : $queryString."/";


    $peticion = explode("/",$queryString);


    $controlador = isset($peticion[0]) ? $peticion[0] : "";
    $accion = isset($peticion[1]) ? $peticion[1] : "";
    $id = isset($peticion[2]) ? $peticion[2] : "";
    //Procesar la petición
    switch($controlador){
        case "producto":
            if($accion == ""){
                require_once "_controller/ListaProductoController.php";
                $ctrl = new ListaProductoController();
            }else if($accion == "agregar"){
                require_once "_controller/MtoProductoController.php";
                $ctrl = new MtoProductoController();
            }
        break;
        case "pepe":
            echo "HOLA PEPE";
        break;
        default:
            include "_view/404.html";
            die();
    }
    
    
    
    
    include "_view/master.html";

?>