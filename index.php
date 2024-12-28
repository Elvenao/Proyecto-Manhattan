<?php
    session_start();
    require_once "config/global.php";
    if(!isset($_SESSION["LoggedIn"]) ){
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
    if(!isset($_SESSION["LoggedIn"])){
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
                        }else if($accion == 'editar'){
                            if($id != ''){
                                require_once "_controller/editarProductoController.php";
                                $ctrl = new editarProducto($id);
                            }else{
                                include "_view/404.html";
                                die();
                            }
                           
                        }
                        else{
                            include "_view/404.html";
                            die();
                        }
                    break;
                    default:
                        include "_view/404.html";
                        die();
                }
            break;
            case "perfil":
                if($lista == ""){
                    require_once "_controller/perfilController.php";
                    $ctrl = new perfilController();
                } else{
                   include "_view/404.html";
                        die();  
                }  
            break;
            case "configuracion":
                if($_SESSION["role"] == "1"){
                    if($lista == ""){
                        require_once "_controller/ConfiguracionController.php";
                        $ctrl = new configuracionController();
                    }elseif($lista == "editar"){
                        if($accion != $_SESSION["usr"] && $accion != ""){
                            require_once "_controller/editarUsuario.php";
                            $ctrl = new editarUsuario($accion);
                        }else{
                            include "_view/404.html";
                            die(); 
                        } 
                    }elseif($lista == "agregar"){
                        if($accion == ""){
                            require_once "_controller/agregarUsuarioController.php";
                            $ctrl = new agregarUsuarioController();
                        }else{
                            include "_view/404.html";
                            die(); 
                        }
                        
                    }
                    else{
                        include "_view/404.html";
                        die(); 
                    } 
                }else{
                    include "_view/404.html";
                    die(); 
                }
                break;
            default:
                include "_view/404.html";
                die();
        }
        include "_view/master.html";
    }
?>