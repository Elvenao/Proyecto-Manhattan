let selectedTable1 = null
let selectedRow1 = null

$(document).ready(function() {
    
    var table = $('#meinTable').DataTable();
    
    
    $('#meinTable tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("editarBtn").setAttribute("disabled","")
        } else {
            
            table.$('tr.onClick').removeClass('onClick');
            selectedRow1 = $(this).addClass('onClick');
            document.getElementById("editarBtn").removeAttribute("disabled")
            
        }
        var data = table.row(this).data(); 
        selectedTable1 = data[1]
        console.log(data[1]); 
    });

});

function editarBtn(){  
    location.replace("editar/" + selectedTable1)
}

function agregarBtn(){
    location.replace("agregar/")
}

function regresarBtn(){
    location.replace("<?php echo SITE_URL;?>configuracion/")
}