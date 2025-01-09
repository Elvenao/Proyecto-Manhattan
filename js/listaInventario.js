
let selectedTable = null
let selectedRow = null

$(function() {
    // Inicializa DataTable
    var table = $('#meinTable').DataTable();

    
    $('#filtro-categorias').on('change', function() {
        var selectedCategory = $(this).val();
        console.log(selectedCategory)
        // Si se selecciona una categoría, aplicar el filtro
        if (selectedCategory) {
            table.column(3).search('^' + selectedCategory + '$', true, false).draw();
            
        } else {
            // Si no se selecciona ninguna categoría, mostrar todo
            table.column(3).search('').draw();
        }
    });
    // Evento de clic en una fila
    $('#meinTable tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("editarBtn").setAttribute("disabled", "");
        } else {
            // Quita la clase de otras filas y añade a la fila actual
            table.$('tr.onClick').removeClass('onClick');
            selectedRow = $(this).addClass('onClick');
            document.getElementById("editarBtn").removeAttribute("disabled");
        }

        var data = table.row(this).data(); // Obtiene los datos de la fila clicada
        selectedTable = data[0];
        
    });

    // Evento para filtrar por categoría
    
});


function editarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/almacen/editar/'+selectedTable)
}

function agregarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/almacen/agregar/')
}

function regresarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/')
}