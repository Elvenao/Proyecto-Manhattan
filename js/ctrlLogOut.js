function LogOutBtn(){
    dato = document.getElementById("LogOut").value
    console.log(dato)
    Swal.fire({
        title: "¿Quieres cerrar sesión?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Cerrar Sesión",
        denyButtonText: `Cancelar`
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            LogOutAjax("_controller/AjaxLogOut.php",dato)
            Swal.fire({
                title:"Cerrando Sesión",
            }).then(()=>{
                
                window.history.pushState(null, "Sesion Iniciada", "/ElGatoHambriento");
                location.reload(true);
            })
            
        } 
    });
}

function LogOutAjax(actionUrl, data){
    return new Promise((resolve, reject) => {
        fetch(actionUrl,{
            method: "POST",
            headers: {
                "Content-Type": "application/plain",
            },
            body: data,
        })
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
    })
}