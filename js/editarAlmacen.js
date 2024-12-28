function regresarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/almacen/')
}

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("categoria").value = <?php echo $this->datos[0]['IC_Id']?>
})