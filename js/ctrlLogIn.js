/*
//Anular el submit del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", formulario_submit);

function formulario_submit(e) {
    e.preventDefault();
    //alert("submit anulado, haz lo que quieras :)");
    //preparar los datos del formulario
    console.log("PreventDefault")
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    //llamada a sweetalert
    
    let datos = JSON.stringify({user,pass})
    llamadaASweetAlert(datos,"_controller/AjaxLogin.php");
}

async function llamadaASweetAlert(json, actionUrl) {

  try {
    console.log(json);
    const response = await fetch(actionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: json
    });
    console.log('Datos enviados');

    if (!response.ok) {
      console.log("PARTE2");
      throw new Error(`Error: ${response.statusText}`);
      
  }
  
  const data = await response.json();
  console.log(data);
  
  if (data.resultado !== 1) {
    Swal.showValidationMessage("Hubo un problema al insertar los datos");
    console.log("PARTE2");
  }
  console.log('Hola');
  return data;
  } catch (error) {
    console.log(json);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `Error en la solicitud: ${error.message}`,
    });
  }
    
}
*/

// Anular el submit del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", formulario_submit);

function formulario_submit(e) {
  e.preventDefault(); // Previene el comportamiento por defecto del formulario
  console.log("PreventDefault");

  // Preparar los datos del formulario
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  let datos = JSON.stringify({ user, pass });

  // Llamar a la función para enviar los datos
  llamadaASweetAlert(datos, "_controller/AjaxLogin.php")
    .then(data => {
      console.log("Respuesta del servidor:", data);

      // Validar el resultado y mostrar mensajes con SweetAlert
      if (data.resultado !== 1) {
        Swal.fire({
          icon: "warning",
          title: "Error",
          text: "Hubo un problema al insertar los datos",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Datos enviados correctamente",
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
        return response.text(); // Convertir la respuesta a JSON
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

