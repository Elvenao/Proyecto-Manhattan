<?php
    session_start();
    require_once  "_model/MainModel.php";
    require_once "config/global.php";
    if(!isset($_SESSION["LoggedIn"]) ){
        $queryString = isset($_GET["querystring"]) ? $_GET["querystring"] : RUTA_DEFAULT_UNLOGGED;

    }else{
        $queryString = isset($_GET["querystring"]) ? $_GET["querystring"] : RUTA_DEFAULT_LOGGED;
        
    }
    
    $titulo;
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
        $model = new MainModel();
        $rol = $model->getDataRows('usuario',['rol_id'],'user = ?',[$_SESSION["usr"]]);
        switch($controlador){
            case "reportes":
                $titulo = "Reportes";
                require_once "_controller/ReportesController.php";
                $ctrl = new ReportesController();
            break;
            case "notas":
                switch($lista){
                    case "":
                        $titulo = "Notas";
                        require_once "_controller/NotasMenuController.php";
                        $ctrl = new NotasMenuController();
                    break;
                    case "pos":
                        $titulo = "Punto de Venta";
                        require_once "_controller/posController.php";
                        $ctrl = new posController();
                    break;
                    case "consultar":
                        
                        if($accion == ""){
                            $titulo = "Consultar nota";
                            require_once "_controller/ConsultarNotasController.php";
                            $ctrl = new ConsultarNotasController();
                        }else if($accion == "vernota"){
                            if($id != ''){
                                $titulo = "Consultar nota - ". $id;
                                require_once "_controller/verNotaController.php";
                                $ctrl = new verNotaController($id);
                            }
                            
                        }
                    break;
                }
            break;
            case "inventario":
                switch($lista){
                    case "" :
                        $titulo = "Inventario";
                        require_once "_controller/InventarioMenuController.php";
                        $ctrl = new InventarioMenuController();
                    break;
                    case "almacen":
                        if($accion == ""){
                            $titulo = "Almacen";
                            require_once "_controller/ListaInventarioController.php";
                            $ctrl = new ListaInventarioController();
                        }else if($accion == "agregar"){
                            $titulo = "Agregar a Almacen";
                            require_once "_controller/agregarAlmacenController.php";
                            $ctrl = new MtoInventarioController();
                        }else if($accion == 'editar'){
                            if($id != ''){
                                $titulo = "Editar Suministro - ". $id;
                                require_once "_controller/editarAlmacenController.php";
                                $ctrl = new editarAlmacen($id);
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
                    case "productos":
                        if($accion == ""){
                            $titulo = "Productos";
                            require_once "_controller/ListaProductosController.php";
                            $ctrl = new ListaProductosController();
                        }else if($accion == "editar"){
                            if($id != ''){
                                $titulo = 'Editar Producto - '.$id;
                                require_once "_controller/editarProductoController.php";
                                $ctrl = new editarProducto($id);
                            }else{
                                include "_view/404.html";
                                die();
                            }
                        }else if($accion == "agregar"){
                            $titulo = "Agregar Producto";
                            require_once "_controller/agregarProductoController.php";
                            $ctrl = new agregarProductoController();
                        }
                        else{
                            include "_view/404.html";
                            die();
                        }
                        break;
                    case "recetas":
                        if($accion == ""){
                            require_once "_controller/listaRecetasController.php";
                            $ctrl = new listaRecetasController();
                        }else if($accion == 'agregar'){
                            require_once "_controller/agregarRecetaController.php";
                            $ctrl = new agregarRecetaController();
                        }else{
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
                    $titulo = 'Perfil';
                    require_once "_controller/perfilController.php";
                    $ctrl = new perfilController();
                } else{
                   include "_view/404.html";
                        die();  
                }
            break;
            case "configuracion":
                if($rol[0]['rol_id'] == 1){
                    if($lista == ""){
                        $titulo = "Configuracion";
                        require_once "_controller/ConfiguracionController.php";
                        $ctrl = new configuracionController();
                    }elseif($lista == "usuarios"){
                        if($accion == ""){
                            $titulo = "Configurar Usuarios";
                            require_once "_controller/configurarUsuariosController.php";
                            $ctrl = new configurarUsuariosController();
                        }elseif($accion == "editar"){
                            if($id != $_SESSION["usr"] && $id != ""){
                                $titulo = "Editar ".$id;
                                require_once "_controller/editarUsuario.php";
                                $ctrl = new editarUsuario($id);
                            }else{
                                include "_view/404.html";
                                die(); 
                            } 
                        }elseif($accion == "agregar"){
                            if($id == ""){
                                $titulo = "Agregar Usuario";
                                require_once "_controller/agregarUsuarioController.php";
                                $ctrl = new agregarUsuarioController();
                            }else{
                                include "_view/404.html";
                                die(); 
                            }  
                        }
                    }elseif($lista == "roles"){
                        
                        if($accion == ""){
                            $titulo = "Configurar Roles";
                            require_once "_controller/configurarRolesController.php";
                            $ctrl = new configurarRolesController();
                        }elseif($accion == 'editar'){
                            if($id != ""){
                                $titulo = "Editar Rol";
                                require_once "_controller/editarRolController.php";
                                $ctrl = new editarUsuario($id);
                            }else{
                                include "_view/404.html";
                                die(); 
                            } 
                        }elseif($accion == "agregar"){
                            if($id == ""){
                                $titulo = "Agregar Rol";
                                require_once "_controller/agregarRolController.php";
                                $ctrl = new agregarRolController();
                            }else{
                                include "_view/404.html";
                                die(); 
                            }  
                        }
                        
                    }elseif($lista == "categorias"){
                        $titulo = "Configurar Categorias";
                        require_once "_controller/configurarCategoriasController.php";
                        $ctrl = new configurarCategoriasController();
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