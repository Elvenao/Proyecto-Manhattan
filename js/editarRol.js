function cancelarBtn(){
    localStorage.clear()
    location.replace("<?php echo SITE_URL;?>configuracion/roles/")
}


function borrarBtn(){
    let action = "Borrar"
    let id = "<?php echo $this->rol[0]['id_rol']?>"
    let datos = JSON.stringify({action,id})
    let ruta = "<?php echo SITE_URL;?>configuracion/roles/"
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxRoles.php","Seguro que quieres borrar este rol","No podras recuperar los datos borrados","warning","Borrar","Cancelar","Error en el Borrado","Rol eliminado","Rol borrado con exito",true,ruta)
}

function editarBtn(){
    let action = "Editar"
    let id = "<?php echo $this->rol[0]['id_rol']?>"
    let rol = document.getElementById('rol').value
    let almacen = document.getElementById('almacen').value 
    let productos = document.getElementById('productos').value
    let categoriaAlmacen = document.getElementById('categoriaAlmacen').value
    let categoriaProductos = document.getElementById('categoriaProductos').value
    let usuarios = document.getElementById('usuarios').value 
    let roles = document.getElementById('roles').value
    let recetas = document.getElementById('recetas').value
    let permisos = Number(almacen.toString() + productos.toString() + categoriaAlmacen.toString() + categoriaProductos.toString() + usuarios.toString() + roles.toString() + recetas.toString())
    let datos = JSON.stringify({action,id,rol,permisos})
    let ruta = "<?php echo SITE_URL;?>configuracion/roles/editar/" + id
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxRoles.php","Editar rol","¿Seguro que quieres realizar estos cambios?, no será posible deshacer los cambios.","question","Editar","Cancelar","Error en Editando","Rol editado","Rol editado con exito",true,ruta)
}

let permisos = "<?php echo $this->rol[0]['permisos'];?>"
let rol = "<?php echo $this->rol[0]['descripcion'];?>"
let almacen = Number(permisos.toString()[0])
let productos = Number(permisos.toString()[1])
let categoriaAlmacen = Number(permisos.toString()[2])
let categoriaProductos = Number(permisos.toString()[3])
let usuarios = Number(permisos.toString()[4])
let roles = Number(permisos.toString()[5])
let recetas = Number(permisos.toString()[6])

function restablecerBtn(){
    document.getElementById('rol').value = rol
    document.getElementById('almacen').value = almacen
    document.getElementById('productos').value = productos
    document.getElementById('categoriaAlmacen').value = categoriaAlmacen
    document.getElementById('categoriaProductos').value = categoriaProductos
    document.getElementById('usuarios').value = usuarios
    document.getElementById('roles').value = roles
    document.getElementById('recetas').value = recetas
}

document.addEventListener('DOMContentLoaded',function(){
    if(localStorage.getItem("isStored") == null){
        localStorage.setItem('isStored',true)
        localStorage.setItem('Rol',rol)
        localStorage.setItem('Almacen',almacen)
        localStorage.setItem('Productos',productos)
        localStorage.setItem('Categoria-Almacen',categoriaAlmacen)
        localStorage.setItem('Categoria-Productos',categoriaProductos)
        localStorage.setItem('Usuarios',usuarios)
        localStorage.setItem('Roles',roles)
        localStorage.setItem('Recetas',recetas)
        document.getElementById('rol').value = rol
        document.getElementById('almacen').value = almacen
        document.getElementById('productos').value = productos
        document.getElementById('categoriaAlmacen').value = categoriaAlmacen
        document.getElementById('categoriaProductos').value = categoriaProductos
        document.getElementById('usuarios').value = usuarios
        document.getElementById('roles').value = roles
        document.getElementById('recetas').value = recetas
    }else{
        document.getElementById('rol').value = localStorage.getItem('Rol')
        document.getElementById('almacen').value = localStorage.getItem('Almacen')
        document.getElementById('productos').value = localStorage.getItem('Productos')
        document.getElementById('categoriaAlmacen').value = localStorage.getItem('Categoria-Almacen')
        document.getElementById('categoriaProductos').value = localStorage.getItem('Categoria-Productos')
        document.getElementById('usuarios').value = localStorage.getItem('Usuarios')
        document.getElementById('roles').value = localStorage.getItem('Roles')
        document.getElementById('recetas').value = localStorage.getItem('Recetas')
    }
})
document.getElementById('rol').addEventListener('input',function(){
    localStorage.setItem('Rol',this.value)
})
document.getElementById('almacen').addEventListener('change',function(){
    localStorage.setItem('Almacen',this.value)
})
document.getElementById('productos').addEventListener('change',function(){
    localStorage.setItem('Productos',this.value)
})
document.getElementById('categoriaAlmacen').addEventListener('change',function(){
    localStorage.setItem('Categoria-Almacen',this.value)
})
document.getElementById('categoriaProductos').addEventListener('change',function(){
    localStorage.setItem('Categoria-Productos',this.value)
})
document.getElementById('usuarios').addEventListener('change',function(){
    localStorage.setItem('Usuarios',this.value)
})
document.getElementById('roles').addEventListener('change',function(){
    localStorage.setItem('Roles',this.value)
})
document.getElementById('recetas').addEventListener('change',function(){
    localStorage.setItem('Recetas',this.value)
})