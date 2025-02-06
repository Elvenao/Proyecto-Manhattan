function cancelarBtn(){
    localStorage.clear()
    location.replace("<?php echo SITE_URL;?>configuracion/roles/")
}

function agregarBtn(){
    let action = "Agregar"
    let rol = document.getElementById('rol').value
    let almacen = document.getElementById('almacen').value 
    let productos = document.getElementById('productos').value
    let categoriaAlmacen = document.getElementById('categoriaAlmacen').value
    let categoriaProductos = document.getElementById('categoriaProductos').value
    let usuarios = document.getElementById('usuarios').value 
    let roles = document.getElementById('roles').value
    let recetas = document.getElementById('recetas').value
    let permisos = Number(almacen.toString() + productos.toString() + categoriaAlmacen.toString() + categoriaProductos.toString() + usuarios.toString() + roles.toString() + recetas.toString())
    let datos = JSON.stringify({action,rol,permisos})
    let ruta = "<?php echo SITE_URL;?>configuracion/roles/" 
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxRoles.php","Agregar rol","¿Seguro que quieres agregar este rol?","question","Agregar","Cancelar","Error Agregando","Rol agregado","Rol agregado con exito",true,ruta)
}



function restablecerBtn(){
    document.getElementById('rol').value = ''
    document.getElementById('almacen').value = 0
    document.getElementById('productos').value = 0
    document.getElementById('categoriaAlmacen').value = 0
    document.getElementById('categoriaProductos').value = 0
    document.getElementById('usuarios').value = 0
    document.getElementById('roles').value = 0
    document.getElementById('recetas').value = 0
}

document.addEventListener('DOMContentLoaded',function(){
    if(localStorage.getItem("isStored") == null){
        localStorage.setItem('isStored',true)
        localStorage.setItem('Rol',"")
        localStorage.setItem('Almacen',0)
        localStorage.setItem('Productos',0)
        localStorage.setItem('Categoria-Almacen',0)
        localStorage.setItem('Categoria-Productos',0)
        localStorage.setItem('Usuarios',0)
        localStorage.setItem('Roles',0)
        localStorage.setItem('Recetas',0)
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