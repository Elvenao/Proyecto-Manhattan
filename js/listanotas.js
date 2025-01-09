let selectedTable = null
let selectedRow = null

$(document).ready(function() {
    // Inicializa DataTable
    var table = $('#tablanotas').DataTable();

    // Evento de clic en una fila
    $('#tablanotas tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("conBtn").setAttribute("disabled","");
            document.getElementById("delBtn").setAttribute("disabled","");
        } else {
            // Quita la clase de otras filas y añade a la fila actual
            table.$('tr.onClick').removeClass('onClick');
            selectedRow = $(this).addClass('onClick');
            document.getElementById("conBtn").removeAttribute("disabled")
            document.getElementById("delBtn").removeAttribute("disabled")
        }
        var data = table.row(this).data(); // Obtiene los datos de la fila clicada
        selectedTable = data[0]
        console.log(data[0]); // Muestra los datos de la fila en la consola
        

    });
});

function regresar(){
    location.replace('<?php echo SITE_URL; ?>notas/');
}

function consultar(){
    location.replace('<?php echo SITE_URL; ?>notas/consultar/vernota/'+selectedTable);
}

function eliminarNota(){
    let id = "<?php echo $this->datos[0]['Id_Notas']?>";
    let action = "Borrar"
    let datos = JSON.stringify({id, action})
    console.log(datos)
    let ruta = '<?php echo SITE_URL; ?>notas/consultar/'
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxNotas.php","Borrar Nota","¿Estás seguro/a que quieres borrar esta nota? No podras recuperar los datos","warning","Borrar","Cancelar","No se pudo borrar","Se borro con exito","La nota se borro exitosamente",true,ruta)
}