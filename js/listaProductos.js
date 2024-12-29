
let selectedTable = null
let selectedRow = null

$(document).ready(function() {
    // Inicializa DataTable
    var table = $('#meinTable').DataTable();

    // Evento de clic en una fila
    $('#meinTable tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("editarBtn").setAttribute("disabled","")
        } else {
            // Quita la clase de otras filas y añade a la fila actual
            table.$('tr.onClick').removeClass('onClick');
            selectedRow = $(this).addClass('onClick');
            document.getElementById("editarBtn").removeAttribute("disabled")
        }
        var data = table.row(this).data(); // Obtiene los datos de la fila clicada
        selectedTable = data[0]
        console.log(data[0]); // Muestra los datos de la fila en la consola
        

    });
});

function editarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/productos/editar/'+selectedTable)
}

function agregarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/productos/agregar/')
}

function regresarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/')
}