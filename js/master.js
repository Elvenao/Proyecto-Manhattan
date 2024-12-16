function Eliminar(Id,fila){
    fila = Number(fila)
    Swal.fire({
    title: "¿Seguro que quieres borrar el registro?",
    text: "No serás capaz de revertir los cambios",
    icon: "warning",
    showCancelButton: true,
    allowOutsideClick: false,
    inputLabel: "Hla",
    inputPlaceholder: "Gola",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borrar"
    }).then((result) => {
    if (result.isConfirmed) {
        meinTable.row(fila).remove().draw()
        eliminarOnClick(Id)
        
        Swal.fire({
        title: "Borrado",
        text: "Tu registro ha sido borrado",
        icon: "success"
        });
    }
    });
}

function btn_gotoReportes(){
    //window.location.replace("localhost/proyecto/producto");
    window.history.pushState(null, " ElGatoHambriento Reportes", "/ElGatoHambriento/reportes/");
    location.reload(true);
}
function btn_gotoNotas(){
    window.history.pushState(null, " ElGatoHambriento Notas", "/ElGatoHambriento/notas/");
    location.reload(true);
}
function btn_gotoInventario(){
    window.history.pushState(null, " ElGatoHambriento Inventario", "/ElGatoHambriento/inventario/");
    location.reload(true);
}
function btn_gotoConfiguracion(){
    window.history.pushState(null, " ElGatoHambriento Configuración", "/ElGatoHambriento/settings/");
    location.reload(true);
}

function gotoHome(){
    window.history.pushState(null, " ElGatoHambriento", "/ElGatoHambriento/");
    location.reload(true);
}

function btn_gotoConsultarNotas(){
    window.history.pushState(null, " ElGatoHambriento Consultar Notas", "consultar/");
    location.reload(true);
}

function btn_gotoPOS(){
    window.history.pushState(null, " ElGatoHambriento Punto de Venta", "pos/");
    location.reload(true);
}

function btn_añadirNuevo(){
    window.history.pushState(null, " ElGatoHambriento Punto de Venta", "agregar/");
    location.reload(true);
}