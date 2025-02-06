$(document).ready(function () {
    $('#meinTable').DataTable({
        searching: true, 
        lengthChange: false, 
        info: false,
        order: []
    });
});

$(document).ready(function(){
    $('#categoriasInventario').DataTable({
        searching: true, 
        lengthChange: false, 
        info: false,
        order: []
    });
})

$(document).ready(function(){
    $('#categoriasProducto').DataTable({
        searching: true, 
        lengthChange: false, 
        info: false,
        order: []
    });
})

$(document).ready(function () {
    $('#tablanotas').DataTable({
        searching: true, 
        lengthChange: false, 
        info: false
    });
});
$(document).ready(function () {
    $('#tablaReceta').DataTable({
        searching: true, 
        lengthChange: false, 
        info: false,
        ordering: false,
    });
});
$(document).ready(function () {
    $('#tablapos').DataTable({
        searching: true, 
        lengthChange: false, 
        info: false,
        ordering: false,
    });
});

