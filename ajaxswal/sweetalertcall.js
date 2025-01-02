function llamadaASweetAlert(
    json,
    actionUrl,
    title,
    text,
    icon,
    confirmButtonText,
    denyButtonText,
    errorResult,
    titleSuccess,
    textSuccess,
    locationReplace = null,
    locationUrl = null
) {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: false,
        showDenyButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmButtonText,
        denyButtonText: denyButtonText,
        preConfirm: async () => {
            try {
                const response = await fetch(actionUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: json,
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
                if (data.resultado !== 1) {
                    Swal.showValidationMessage(errorResult+" "+data.mensaje);
                    console.log(data.mensaje)
                }
                return data; // Retorna los datos procesados
            } catch (error) {
                Swal.showValidationMessage(`Error en la solicitud: ${error.message}`);
                console.log(error.message);
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: "success",
                title: titleSuccess,
                text: textSuccess,
				showConfirmButton: true,
				confirmButtonText: "Volver"
            }).then((result)=>{
				if (result.isConfirmed && locationReplace) {
					location.replace(locationUrl); // Ejecuta el redireccionamiento
				}
			})
            
        }
    });
}
