let nombre = document.getElementById("nombre")
let apellidos = document.getElementById("apellidos")
let user = document.getElementById("user")
let password = document.getElementById("password")
let fecha_nacimiento = document.getElementById("fecha_nacimiento")
let fecha_inicio = document.getElementById("fecha_inicio")
let fecha_fin = document.getElementById("fecha_fin")
let rol_id = document.getElementById("rol_id")

function editarBtn(){
    let action = "Editar"
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value
    let fecha_inicio = document.getElementById("fecha_inicio").value
    let fecha_fin = document.getElementById("fecha_fin").value
    let rol_id = document.getElementById("rol_id").value
    let id_usuario = document.getElementById("id_usuario").value

    let ruta = "<?php echo SITE_URL;?>configuracion/editar/" + user
    let datos = JSON.stringify({action,id_usuario,nombre,apellidos,user,password,fecha_nacimiento,fecha_inicio,fecha_fin,rol_id})
    console.log(datos)
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxUsuario.php","Editar Usuario","¿Seguro que quieres realizar estos cambios?, no será posible deshacer los cambios.","warning","Confirmar","Cancelar","Errores editando","Usuario editado","Usuario editado con exito",true,ruta)
}


document.addEventListener('DOMContentLoaded',function(){
    nombre.value = "<?php echo $this->datos[0]['nombre'];?>" 
    apellidos.value = "<?php echo $this->datos[0]['apellidos']?>"
    user.value = "<?php echo $this->datos[0]['user']?>"
    password.value = "<?php echo $this->datos[0]['password']?>"
    fecha_nacimiento.value = "<?php echo $this->datos[0]['fecha_nacimiento']?>"
    fecha_inicio.value = "<?php echo $this->datos[0]['fecha_inicio']?>"
    fecha_fin.value = "<?php $fecha = isset($this->datos[0]["fecha_fin"]) ? $this->datos[0]["fecha_fin"] : "En vigencia"; echo $fecha;?>"
    rol_id.value = "<?php echo $this->datos[0]['rol_id']; ?>"
})

function cancelarBtn(){
    location.replace("<?php echo SITE_URL;?>configuracion/")
}

function borrarBtn(){
    let action = "Borrar"
    let id_usuario = document.getElementById("id_usuario").value
    let datos = JSON.stringify({action,id_usuario})
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxUsuario.php","Seguro que quieres borrar este usuario","No podras recuperar los datos borrados","warning","Borrar","Cancelar","Error en el Borrado","Usuario eliminado","Usuario borrado con exito",true,"<?php echo SITE_URL;?>configuracion/")
}


function restablecerBtn(){
    
    nombre.value = "<?php echo $this->datos[0]['nombre'];?>" 
    apellidos.value = "<?php echo $this->datos[0]['apellidos']?>"
    user.value = "<?php echo $this->datos[0]['user']?>"
    password.value = "<?php echo $this->datos[0]['password']?>"
    fecha_nacimiento.value = "<?php echo $this->datos[0]['fecha_nacimiento']?>"
    fecha_inicio.value = "<?php echo $this->datos[0]['fecha_inicio']?>"
    fecha_fin.value = "<?php $fecha = isset($this->datos[0]["fecha_fin"]) ? $this->datos[0]["fecha_fin"] : "En vigencia"; echo $fecha;?>"
    rol_id.value = "<?php echo $this->datos[0]['rol_id']; ?>"
}

let mostrarPassword = document.getElementById("eye-icon")
mostrarPassword.addEventListener('click',function(){
    let password = document.getElementById("password")

    if (this.classList.contains("bi-eye")) {
        this.classList.add("bi-eye-slash");
        this.classList.remove("bi-eye");
        password.setAttribute("type","password")
    } else {
        this.classList.remove("bi-eye-slash");
        this.classList.add("bi-eye");
        password.setAttribute("type","text")
    }
})