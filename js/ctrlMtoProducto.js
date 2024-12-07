//Anular el submit del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", formulario_submit);

function formulario_submit(e) {
    e.preventDefault();
    //alert("submit anulado, haz lo que quieras :)");
    
    //preparar los datos del formulario
    let action = document.getElementById("action");
    let id = document.getElementById("Id");
    let nombre = document.getElementById("Nombre");
    let precio = document.getElementById("Precio");

    //llamada a sweetalert

    let datos = JSON.stringify({action,id,nombre,precio})
    
    llamadaASweetAlert(datos, SITE_URL + "/_controller/AjaxProducto.php");
}

function llamadaASweetAlert(json, actionUrl) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          const response = await fetch(actionUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: json
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }

          const data = await response.json();

          if (data.resultado !== 1) {
            Swal.showValidationMessage("Hubo un problema al insertar los datos");
          }

          return data;
        } catch (error) {
          Swal.showValidationMessage(`Error en la solicitud: ${error.message}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Datos enviados correctamente",
          text: "¡La inserción fue exitosa!"
        });
      }
    });
} 
