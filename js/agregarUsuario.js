let agregarForm = document.getElementById("agregarFormulario")

agregarForm.addEventListener("submit",agregar)


function cancelarBtn(){
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

function borrarBtn(){
    document.getElementById("nombre").value = ''
    document.getElementById("apellidos").value = ''
    document.getElementById("user").value = ''
    document.getElementById("password").value = ''
    document.getElementById("fecha_nacimiento").value = ''
    document.getElementById("fecha_inicio").value = ''
    document.getElementById("fecha_fin").value = ''
    document.getElementById("rol_id").value = '0'
}

function agregar(e){
    e.preventDefault();
    
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value
    let fecha_inicio = document.getElementById("fecha_inicio").value
    let fecha_fin
    if(document.getElementById("fecha_fin").value == '') fecha_fin = null
    let rol_id = document.getElementById("rol_id").value

    let datos = JSON.stringify({nombre,apellidos,user,password,fecha_nacimiento,fecha_inicio,fecha_fin,rol_id})
    llamadaASweetAlert(datos, "<?php echo SITE_URL;?>_controller/ajaxAgregarUsuario.php")
    .then(data => {
      console.log("Respuesta del servidor:", data);
      console.log("Resultado: ", data.resultado);

      // Validar el resultado y mostrar mensajes con SweetAlert

      if (data.resultado !== 1) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.mensaje,
        })

      } else {

        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Usuario agregado exitosamente",
          
        }).then(() => {
          //Redirigir a Principal segun el rol i guess no se veamos que se hace aqui
          //window.location.replace("localhost/proyecto/producto");
          location.replace("<?php echo SITE_URL;?>configuracion/")
        });
      }
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error en la solicitud: ${error.message}`,
      });
    });
}

function llamadaASweetAlert(json, actionUrl){
    return new Promise((resolve, reject) => {
        console.log("Datos enviados:", json);
    
        fetch(actionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: json,
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log("Respuesta procesada:", data);
            resolve(data); // Resolver la promesa con los datos
          })
          .catch(error => {
            console.error("Error al procesar la solicitud:", error);
            reject(error); // Rechazar la promesa con el error
          });
      });
}




