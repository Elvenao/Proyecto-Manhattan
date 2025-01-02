function regresarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/almacen/')
    localStorage.removeItem("Cantidad")
}

document.addEventListener("DOMContentLoaded",function(){
    let cantidadInput = document.getElementById('cantidad')
    let cantidad = <?php echo $this->datos[0]["Stock"]?>;
    if(localStorage.getItem("Cantidad") == null){
        cantidadInput.value = cantidad
        localStorage.setItem("Cantidad",cantidad); 
    }else if(Number(cantidadInput.value) !== cantidad){
        cantidadInput.value = localStorage.getItem("Cantidad");
    }else{
        localStorage.setItem("Cantidad",cantidad); 
    }
    document.getElementById("categoria").value = <?php echo $this->datos[0]['IC_Id']?>;
    document.getElementById('estado').value = <?php echo $this->datos[0]['status']?>;
    
})

function agregarBtn(){
    let cantidad = document.getElementById('cantidadOpcional').value
    if(cantidad == '' || Number(cantidad) < 1){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Introduce un valor valido"
        });
    }else{
        let cantidadInput = document.getElementById('cantidad').value;
        cantidad = Number(cantidad)
        cantidad = cantidad + Number(cantidadInput)
        document.getElementById('cantidad').value = cantidad
        localStorage.setItem("Cantidad",cantidad)
        document.getElementById('cantidadOpcional').value = ""
    }
}

function restarBtn(){
    let cantidad = document.getElementById('cantidadOpcional').value
    let cantidadInput = document.getElementById('cantidad').value;
    if(cantidad == '' || Number(cantidad) < 1 || Number(cantidad) > Number(cantidadInput)){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Introduce un valor valido"
        });
    }else{
        cantidad = Number(cantidad)
        cantidad = Number(cantidadInput) - cantidad
        document.getElementById('cantidad').value = cantidad
        localStorage.setItem("Cantidad",cantidad)
        document.getElementById('cantidadOpcional').value = ""
    }
}

function incrementarBtn(){
    let cantidad = Number(document.getElementById('cantidad').value)
    cantidad++
    document.getElementById('cantidad').value = cantidad 
    localStorage.setItem("Cantidad",cantidad)
}

function reestablecerBtn(){
    let cantidad = <?php echo $this->datos[0]["Stock"];?>;
    let cantidadInput = document.getElementById('cantidad');
    cantidadInput.value = cantidad;
    localStorage.setItem("Cantidad",cantidad);
}

function decrementarBtn(){
    let cantidad = Number(document.getElementById('cantidad').value)
    if(cantidad < 1){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No puedes introducir valores negativos"
           
          });
    }else{
        let cantidad = Number(document.getElementById('cantidad').value)
        cantidad--
        document.getElementById('cantidad').value = cantidad
        localStorage.setItem("Cantidad",cantidad)
    }
}

function editarBtn(){
    let nombre = document.getElementById('nombre').value
    let informacion = document.getElementById('informacion').value
    let Cantidad = document.getElementById('cantidad').value
    let costo = document.getElementById('costo').value
    let estado = document.getElementById('estado').value
    let categoria = document.getElementById('categoria') .value
    let id_inventario = "<?php echo $this->datos[0]['Id_Inventario']?>"
    
    
    let ruta = "<?php echo SITE_URL;?>inventario/almacen/editar/" + id_inventario;

    let datos = JSON.stringify({id_inventario,nombre,informacion,Cantidad,costo,estado,categoria})
    console.log(datos)
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxEditarInventario.php","Editar suministro","¿Estas seguro que quieres editar este suministro?","question","Editar","Cancelar","No se pudo editar","Se edito con exito","El suministro fue editado con exito",true,ruta)
    

}