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
