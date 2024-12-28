//Anular el submit del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", formulario_submit);

function formulario_submit(e) {
    e.preventDefault();
    //alert("submit anulado, haz lo que quieras :)");
    //preparar los datos del formulario
    let action = document.getElementById("action");
    let id = document.getElementById("Id");
    let nombre = document.getElementById("Nombre");
    let precio = document.getElementById("Precio");
    //llamada a sweetalert
    let datos = JSON.stringify({action,id,nombre,precio})
    llamadaASweetAlert(datos, "<?php echo SITE_URL; ?>/_controller/AjaxProducto.php");
}



function regresarBtn(){
  location.replace('<?php echo SITE_URL; ?>inventario/almacen/')
}