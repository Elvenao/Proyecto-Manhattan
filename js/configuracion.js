let selectedTable = null
$(document).ready(function() {
    // Inicializa DataTable
    var table = $('#meinTable').DataTable();

    // Evento de clic en una fila
    $('#meinTable tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
        } else {
            // Quita la clase de otras filas y añade a la fila actual
            table.$('tr.onClick').removeClass('onClick');
            $(this).addClass('onClick');
        }
        var data = table.row(this).data(); // Obtiene los datos de la fila clicada
        selectedTable = data[1]
        console.log(data[1]); // Muestra los datos de la fila en la consola
        document.getElementById("editBtn").removeAttribute("disabled")
    });
});

function editBtn(){  
    location.replace("<?php SITE_URL;?>editar/" + selectedTable)
}