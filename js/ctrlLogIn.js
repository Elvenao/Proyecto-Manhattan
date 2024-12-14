// Anular el submit del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", formulario_submit);

function formulario_submit(e) {
  e.preventDefault(); // Previene el comportamiento por defecto del formulario=

  // Preparar los datos del formulario
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  let datos = JSON.stringify({ user, pass });

  // Llamar a la función para enviar los datos
  llamadaASweetAlert(datos, "_controller/AjaxLogin.php")
    .then(data => {
      console.log("Respuesta del servidora:", data);
      console.log("Resultado: ", data.resultado);

      // Validar el resultado y mostrar mensajes con SweetAlert

      if (data.resultado !== 1) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Credenciales incorrectas",
        })

      } else {

        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Inicio de Sesión Exitoso",
          
        }).then(() => {
          //Redirigir a Principal segun el rol i guess no se veamos que se hace aqui
          //window.location.replace("localhost/proyecto/producto");
          window.history.pushState(null, "Sesion Iniciada", "");
          location.reload(true);
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


function llamadaASweetAlert(json, actionUrl) {
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

