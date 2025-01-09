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
    let genero = document.getElementById('genero').value
    let telefono = document.getElementById('telefono').value

    let ruta = "<?php echo SITE_URL;?>configuracion/editar/" + user
    let datos = JSON.stringify({action,id_usuario,nombre,apellidos,user,password,fecha_nacimiento,fecha_inicio,fecha_fin,rol_id,genero,telefono})
    console.log(datos)
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxUsuario.php","Editar Usuario","¿Seguro que quieres realizar estos cambios?, no será posible deshacer los cambios.","warning","Confirmar","Cancelar","Errores editando","Usuario editado","Usuario editado con exito",true,ruta)
}


document.addEventListener('DOMContentLoaded',function(){
    let nombreInput = document.getElementById("nombre")
    let apellidosInput = document.getElementById("apellidos")
    let userInput = document.getElementById("user")
    let passwordInput = document.getElementById("password")
    let fecha_nacimientoInput = document.getElementById("fecha_nacimiento")
    let fecha_inicioInput = document.getElementById("fecha_inicio")
    let fecha_finInput = document.getElementById("fecha_fin")
    let rol_idInput = document.getElementById("rol_id")
    let generoInput = document.getElementById('genero')
    let telefonoInput = document.getElementById('telefono')


    let nombre = "<?php echo $this->datos[0]['nombre'];?>" 
    let apellidos = "<?php echo $this->datos[0]['apellidos']?>"
    let user = "<?php echo $this->datos[0]['user']?>"
    let password = ""
    let fecha_nacimiento = "<?php echo $this->datos[0]['fecha_nacimiento']?>"
    let fecha_inicio = "<?php echo $this->datos[0]['fecha_inicio']?>"
    let fecha_fin = "<?php $fecha = isset($this->datos[0]["fecha_fin"]) ? $this->datos[0]["fecha_fin"] : ""; echo $fecha;?>";
    let rol_id = "<?php echo $this->datos[0]['rol_id']; ?>"
    let genero = "<?php echo $this->datos[0]['genero_id']; ?>"
    let telefono = "<?php echo $this->datos[0]['telefono']; ?>"

    if(localStorage.getItem("isStored") == null){
        localStorage.clear()
        localStorage.setItem("isStored",true)
        nombreInput.value = nombre
        apellidosInput.value = apellidos
        userInput.value = user
        passwordInput.value = password
        fecha_nacimientoInput.value = fecha_nacimiento
        fecha_inicioInput.value = fecha_inicio
        fecha_finInput.value = fecha_fin
        rol_idInput.value = rol_id
        generoInput.value = genero
        telefonoInput.value = telefono

        localStorage.setItem("Genero",genero)
        localStorage.setItem("Nombre",nombre)
        localStorage.setItem("Apellidos",apellidos)
        localStorage.setItem("User",user)
        localStorage.setItem("Password",password)
        localStorage.setItem("Fecha_Nacimiento",fecha_nacimiento)
        localStorage.setItem("Fecha_Inicio",fecha_inicio)
        localStorage.setItem("Fecha_Fin",fecha_fin)
        localStorage.setItem("Rol",rol_id)
        localStorage.setItem("Telefono",telefono)
    }else{
        nombreInput.value = localStorage.getItem("Nombre")
        apellidosInput.value = localStorage.getItem("Apellidos")
        userInput.value = localStorage.getItem("User")
        passwordInput.value = localStorage.getItem("Password")
        fecha_nacimientoInput.value = localStorage.getItem("Fecha_Nacimiento")
        fecha_inicioInput.value = localStorage.getItem("Fecha_Inicio") 
        fecha_finInput.value = localStorage.getItem("Fecha_Fin")
        rol_idInput.value = localStorage.getItem("Rol")
        generoInput.value = localStorage.getItem("Genero")
        telefonoInput.value = localStorage.getItem("Telefono")
    }
    
})

document.getElementById("nombre").addEventListener('input',function(){
    localStorage.setItem("Nombre",this.value)
})

document.getElementById("apellidos").addEventListener('input',function(){
    localStorage.setItem("Apellidos",this.value)
})

document.getElementById("user").addEventListener('input',function(){
    localStorage.setItem("User",this.value)
})

document.getElementById("password").addEventListener('input',function(){
    localStorage.setItem("Password",this.value)
})

document.getElementById("fecha_nacimiento").addEventListener('input',function(){
    localStorage.setItem("Fecha_Nacimiento",this.value)
})

document.getElementById("fecha_inicio").addEventListener('input',function(){
    localStorage.setItem("Fecha_Inicio",this.value)
})

document.getElementById("fecha_fin").addEventListener('input',function(){
    localStorage.setItem("Fecha_Fin",this.value)
})

document.getElementById("genero").addEventListener('input',function(){
    localStorage.setItem("Genero",this.value)
})

document.getElementById("rol_id").addEventListener('input',function(){
    localStorage.setItem("Rol",this.value)
})

document.getElementById("telefono").addEventListener('input',function(){
    localStorage.setItem("Telefono",this.value)
})


function cancelarBtn(){
    localStorage.clear()
    location.replace("<?php echo SITE_URL;?>configuracion/")
}

function borrarBtn(){
    let action = "Borrar"
    let id_usuario = document.getElementById("id_usuario").value
    let datos = JSON.stringify({action,id_usuario})
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxUsuario.php","Seguro que quieres borrar este usuario","No podras recuperar los datos borrados","warning","Borrar","Cancelar","Error en el Borrado","Usuario eliminado","Usuario borrado con exito",true,"<?php echo SITE_URL;?>configuracion/")
}


function restablecerBtn(){
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value
    let fecha_inicio = document.getElementById("fecha_inicio").value
    let fecha_fin = document.getElementById("fecha_fin").value
    let rol_id = document.getElementById("rol_id").value
    let genero = document.getElementById('genero').value
    let telefono = document.getElementById('telefono').value
    nombre.value = "<?php echo $this->datos[0]['nombre'];?>" 
    apellidos.value = "<?php echo $this->datos[0]['apellidos']?>"
    user.value = "<?php echo $this->datos[0]['user']?>"
    password.value = ""
    fecha_nacimiento.value = "<?php echo $this->datos[0]['fecha_nacimiento']?>"
    fecha_inicio.value = "<?php echo $this->datos[0]['fecha_inicio']?>"
    fecha_fin.value = "<?php $fecha = isset($this->datos[0]["fecha_fin"]) ? $this->datos[0]["fecha_fin"] : "En vigencia"; echo $fecha;?>"
    rol_id.value = "<?php echo $this->datos[0]['rol_id']; ?>"
    genero.value = "<?php echo $this->datos[0]['genero_id']; ?>"
    telefono.value = "<?php echo $this->datos[0]['telefono']; ?>"
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