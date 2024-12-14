<?php
    require_once "config/global.php";

    $controlSesion = 0;
    $control = 0;
    if(isset($_COOKIE["LoggedIN"])){
        $control = 1;
    }

    if($control == 0){
        $queryString = isset($_GET["querystring"]) ? $_GET["querystring"] : RUTA_DEFAULT_UNLOGGED;
    }else{
        $queryString = isset($_GET["querystring"]) ? $_GET["querystring"] : RUTA_DEFAULT_LOGGED;
    }
    

    $queryString = str_ends_with($queryString, "/") ? $queryString : $queryString."/";

    $peticion = explode("/",$queryString);
    
   

    $controlador = isset($peticion[0]) ? $peticion[0] : "";
    $accion = isset($peticion[1]) ? $peticion[1] : "";
    $id = isset($peticion[2]) ? $peticion[2] : "";
    //Procesar la petición
    if($control == 0){
        switch($controlador){
            case "login":
                if($accion == ""){
                    include "_view/login.html";
                    
                }else {
                    include "_view/404.html";
                    
                }
            break;
            default:
                include "_view/404.html";
                die();
        }
        
    }else{
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
            case "notas":
                if($accion == ""){
                    require_once "_controller/NotasMenuController.php";
                $ctrl = new NotasMenuController();
                }else if($accion == "pos"){
                    require_once "_controller/posController.php";
                    $ctrl = new posController();
                }
                
            break;
            default:
                echo $controlador;
                include "_view/master.html";
                die();
        }
        include "_view/master.html";

    }

?>