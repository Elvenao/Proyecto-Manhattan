function regresarBtn(){
    location.replace("<?php echo SITE_URL;?>configuracion/")
}

function agregarBtn(){
    location.replace("agregar/")
}

let id = null
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
        let data = table.row(this).data(); 
        id = data[0]
        console.log(data[1]); 
    });

});

function editarBtn(){
    location.replace("editar/"+id)
}


localStorage.clear()

