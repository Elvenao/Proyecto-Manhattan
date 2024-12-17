<?php
    session_start();
    require_once "config/global.php";

    $controlSesion = 0;
    $control = 0;
    if(!isset($_COOKIE["LoggedIN"]) && isset($_SESSION["LoggedIN"])){
        setcookie("LoggedIN", "true", time()+7200, "/");
        $control = 1;
    }
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
    $lista = isset($peticion[1]) ? $peticion[1] : "";
    $accion = isset($peticion[2]) ? $peticion[2] : "";
    $id = isset($peticion[3]) ? $peticion[3] : "";
    //Procesar la petición
    if($control == 0){
        switch($controlador){
            case "login":
                if($lista == ""){
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
            case "reportes":
                require_once "_controller/ReportesController.php";
                $ctrl = new ReportesController();
            break;
            case "notas":
                switch($lista){
                    case "":
                        require_once "_controller/NotasMenuController.php";
                        $ctrl = new NotasMenuController();
                    break;
                    case "pos":
                        require_once "_controller/posController.php";
                        $ctrl = new posController();
                    break;
                    case "consultar":
                        if($accion == ""){
                            require_once "_controller/ConsultarNotasController.php";
                            $ctrl = new ConsultarNotasController();
                        }
                    break;
                }
            break;
            case "inventario":
                switch($lista){
                    case "" :
                        require_once "_controller/InventarioMenuController.php";
                        $ctrl = new InventarioMenuController();
                    break;
                    case "almacen":
                        if($accion == ""){
                            require_once "_controller/ListaInventarioController.php";
                            $ctrl = new ListaInventarioController();
                        }else if($accion == "agregar"){
                            require_once "_controller/MtoInventarioController.php";
                            $ctrl = new MtoInventarioController();
                        }
                    break;
                }
            break;
            case "perfil":
                if($accion == ""){
                    require_once "_controller/perfilController.php";
                    $ctrl = new perfilController();
                }    
            break;
            default:
                include "_view/404.html";
                die();
        }
        include "_view/master.html";
    }
?>