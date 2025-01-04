let agregarForm = document.getElementById("agregarFormulario")

agregarForm.addEventListener("submit",agregar)


function cancelarBtn(){
    localStorage.clear()
    location.replace("<?php echo SITE_URL;?>configuracion/")
}

document.getElementById("eye-icon").addEventListener('click',function(){
  if(this.classList.contains('bi-eye-slash')){
    document.getElementById("password").setAttribute('type',"text")
    this.classList.remove('bi-eye-slash')
    this.classList.add('bi-eye')

  }else{
    document.getElementById("password").setAttribute('type',"password")
    this.classList.remove('bi-eye')
    this.classList.add('bi-eye-slash')
  }
})

document.getElementById("nombre").addEventListener("input",function(){
  localStorage.setItem("Nombre",this.value)
})

document.getElementById("apellidos").addEventListener("input",function(){
  localStorage.setItem("Apellidos",this.value)
})

document.getElementById("user").addEventListener("input",function(){
  localStorage.setItem("User",this.value)
})

document.getElementById("password").addEventListener("input",function(){
  localStorage.setItem("Password",this.value)
})

document.getElementById("fecha_nacimiento").addEventListener("input",function(){
  localStorage.setItem("FechaN",this.value)
})

document.getElementById("fecha_fin").addEventListener("input",function(){
  localStorage.setItem("FechaF",this.value)
})

document.getElementById("fecha_inicio").addEventListener("input",function(){
  localStorage.setItem("FechaI",this.value)
})

document.getElementById("rol_id").addEventListener("input",function(){
  localStorage.setItem("Rol",this.value)
})

document.addEventListener("DOMContentLoaded",function(){
  if(localStorage.getItem("Nombre") == null || localStorage.getItem("Apellidos") == null || localStorage.getItem("User") == null || localStorage.getItem("Password") == null || localStorage.getItem("FechaF") == null || localStorage.getItem("FechaN") == null || localStorage.getItem("FechaI") == null || localStorage.getItem("Rol") == null){
    localStorage.setItem("Nombre",'')
    localStorage.setItem("Apellidos",'')
    localStorage.setItem("User",'')
    localStorage.setItem("Password",'')
    localStorage.setItem("FechaN",'')
    localStorage.setItem("FechaF",'')
    localStorage.setItem("FechaI",'')
    localStorage.setItem("Rol",'')
  }else{
    document.getElementById("nombre").value = localStorage.getItem("Nombre")
    document.getElementById("apellidos").value = localStorage.getItem("Apellidos")
    document.getElementById("user").value = localStorage.getItem("User")
    document.getElementById("password").value = localStorage.getItem("Password")
    document.getElementById("fecha_nacimiento").value = localStorage.getItem("FechaN")
    document.getElementById("fecha_inicio").value = localStorage.getItem("FechaI")
    document.getElementById("fecha_fin").value = localStorage.getItem("FechaF")
    document.getElementById("rol_id").value = localStorage.getItem("Rol")
  }
})

function borrarBtn(){
    document.getElementById("nombre").value = ''
    document.getElementById("apellidos").value = ''
    document.getElementById("user").value = ''
    document.getElementById("password").value = ''
    document.getElementById("fecha_nacimiento").value = ''
    document.getElementById("fecha_inicio").value = ''
    document.getElementById("fecha_fin").value = ''
    document.getElementById("rol_id").value = '1'
    localStorage.clear()
}

function agregar(e){
    e.preventDefault();
    let action = "Agregar"
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value
    let fecha_inicio = document.getElementById("fecha_inicio").value
    let fecha_fin
    if(document.getElementById("fecha_fin").value == '') fecha_fin = null
    let rol_id = document.getElementById("rol_id").value

    let datos = JSON.stringify({action,nombre,apellidos,user,password,fecha_nacimiento,fecha_inicio,fecha_fin,rol_id})
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxUsuario.php","Agregar Usuario","¿Seguro que quieres agregar este usuario?","info","Agregar","Cancelar","Error agregando","Usuario agregado","Usuario agregado con exito",true,"<?php echo SITE_URL;?>configuracion/")
}






