let agregarForm = document.getElementById("agregarFormulario")

agregarForm.addEventListener("submit",agregar)


function cancelarBtn(){
    localStorage.clear()
    location.replace("<?php echo SITE_URL;?>configuracion/usuarios/")
}

function mostrarBtn(){
  let eye = document.getElementById("eye-icon")
  if(eye.classList.contains('bi-eye-slash')){
    document.getElementById("password").setAttribute('type',"text")
    eye.classList.remove('bi-eye-slash')
    eye.classList.add('bi-eye')

  }else{
    document.getElementById("password").setAttribute('type',"password")
    eye.classList.remove('bi-eye')
    eye.classList.add('bi-eye-slash')
  }
}

document.getElementById("eye-icon").addEventListener('click',function(){
  
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

document.getElementById("rol_id").addEventListener("change",function(){
  localStorage.setItem("Rol",this.value)
})

document.getElementById("genero").addEventListener("change",function(){
  localStorage.setItem("Genero",this.value)
})

document.getElementById("telefono").addEventListener("input",function(){
  localStorage.setItem("Telefono",this.value)
})

document.addEventListener("DOMContentLoaded",function(){
  if(localStorage.getItem('isStored') == null){
    localStorage.setItem('isStored',true)
    localStorage.setItem("Nombre",'')
    localStorage.setItem("Apellidos",'')
    localStorage.setItem("User",'')
    localStorage.setItem("Password",'')
    localStorage.setItem("FechaN",'')
    localStorage.setItem("FechaF",'')
    localStorage.setItem("FechaI",'')
    localStorage.setItem("Rol",'1')
    localStorage.setItem("Genero",'1')
    localStorage.setItem("Telefono",'')
  }else{
    document.getElementById("nombre").value = localStorage.getItem("Nombre")
    document.getElementById("apellidos").value = localStorage.getItem("Apellidos")
    document.getElementById("user").value = localStorage.getItem("User")
    document.getElementById("password").value = localStorage.getItem("Password")
    document.getElementById("fecha_nacimiento").value = localStorage.getItem("FechaN")
    document.getElementById("fecha_inicio").value = localStorage.getItem("FechaI")
    document.getElementById("fecha_fin").value = localStorage.getItem("FechaF")
    document.getElementById("rol_id").value = localStorage.getItem("Rol")
    document.getElementById("genero").value = localStorage.getItem("Genero")
    document.getElementById("telefono").value = localStorage.getItem("Telefono")
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
    document.getElementById("genero").value = '1'
    document.getElementById("telefono").value = ''
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
    let genero = document.getElementById("genero").value
    let telefono =  document.getElementById("telefono").value

    let datos = JSON.stringify({action,nombre,apellidos,user,password,fecha_nacimiento,fecha_inicio,fecha_fin,rol_id,genero,telefono})
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxUsuario.php","Agregar Usuario","¿Seguro que quieres agregar este usuario?","info","Agregar","Cancelar","Error agregando","Usuario agregado","Usuario agregado con exito",true,"<?php echo SITE_URL;?>configuracion/usuarios/")
}

function generarPassBtn(){
  let longitud = 11
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indiceAleatorio];
    }
    document.getElementById('password').value = contrasena
}

function eliminarAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function generarUserBtn(){
  let nombre = document.getElementById('nombre').value
  let apellidos = document.getElementById('apellidos').value
  let nacimiento = document.getElementById('fecha_nacimiento').value
  if(nombre == '' || apellidos == '' || nacimiento == ''){
    Swal.fire({
      icon: "error",
      title: 'No es posible <i class="bi bi-person-circle"></i>',
      text: "Escribe el nombre, apellidos y fecha de nacimiento"
      
    });
  }else{
    let user = nombre.slice(0,4)
    user += apellidos.slice(0,4)
    user += nacimiento.slice(0,4)
    user = eliminarAcentos(user)
    document.getElementById('user').value = user
  }
  
}

    let fechaI = document.getElementById('fecha_inicio')
    let fechaF = document.getElementById('fecha_fin')
    let fechaMax = new Date()
    fechaMax.setDate(fechaMax.getDate() )
    console.log(fechaMax.getDate() )
    const formatoFecha = (fecha) => fecha.toISOString().split('T')[0];
    fechaI.max = formatoFecha(fechaMax)
    fechaF.max = formatoFecha(fechaMax)
    
