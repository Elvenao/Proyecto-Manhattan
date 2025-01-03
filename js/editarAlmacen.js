function regresarBtn(){
    location.replace('<?php echo SITE_URL; ?>inventario/almacen/')
    localStorage.removeItem("Cantidad")
    localStorage.removeItem("Informacion")
    localStorage.removeItem("Nombre")
    localStorage.removeItem("Costo")
    localStorage.removeItem("Estado")
    localStorage.removeItem("Categoria")
}

document.addEventListener("DOMContentLoaded",function(){
    let cantidadInput = document.getElementById('cantidad')
    let informacionInput = document.getElementById('informacion')
    let nombreInput = document.getElementById('nombre')
    let costoInput = document.getElementById('costo')
    let estadoInput = document.getElementById('estado')
    let categoriaInput = document.getElementById('categoria')
    let cantidad = <?php echo $this->datos[0]["Stock"]?>;
    let nombre = "<?php echo $this->datos[0]["Nombre"];?>"
    let informacion = "<?php echo $this->datos[0]["Informacion"];?>"
    let costo = "<?php echo $this->datos[0]["Costo"];?>"
    let estado = "<?php if($this->datos[0]["status"] === 'TRUE') echo 1; else echo 0;?>"
    
    let categoria = "<?php echo $this->datos[0]["IC_Id"];?>"
    if(localStorage.getItem("Cantidad") == null){
        cantidadInput.value = cantidad
        informacionInput.value = informacion
        nombreInput.value = nombre
        costoInput.value = costo
        estadoInput.value = estado
        categoriaInput.value = categoria

        localStorage.setItem("Cantidad",cantidad); 
        localStorage.setItem("Informacion",informacion)
        localStorage.setItem("Nombre",nombre)
        localStorage.setItem("Costo",costo)
        localStorage.setItem("Estado",estado)
        localStorage.setItem("Categoria",categoria)

    }else if(Number(cantidadInput.value) !== cantidad || informacionInput.value !== informacion || nombreInput.value !== nombre || Number(costoInput.value) !== costo || estadoInput != estado || categoriaInput.value != categoria){
        cantidadInput.value = localStorage.getItem("Cantidad");
        informacionInput.value = localStorage.getItem("Informacion")
        nombreInput.value = localStorage.getItem("Nombre")
        costoInput.value = localStorage.getItem("Costo")
        document.getElementById('estado').value = Number(localStorage.getItem("Estado"))
        categoriaInput.value = Number(localStorage.getItem("Categoria"))
    }else{
        localStorage.setItem("Cantidad",cantidad); 
        localStorage.setItem("Informacion",informacion); 
        localStorage.setItem("Nombre",nombre);
        localStorage.setItem("Costo",costo);
        localStorage.setItem("Estado",estado);
        localStorage.setItem("Categoria",categoria);

    }
    
    
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
    let cantidad = "<?php echo $this->datos[0]["Stock"];?>"
    let nombre = "<?php echo $this->datos[0]["Nombre"];?>"
    let informacion = "<?php echo $this->datos[0]["Informacion"];?>"
    let costo = "<?php echo $this->datos[0]["Costo"];?>"
    let estado = "<?php echo $this->datos[0]["status"];?>"
    let categoria = "<?php echo $this->datos[0]["IC_Id"];?>"

    localStorage.setItem("Nombre",nombre)
    localStorage.setItem("Informacion",informacion)
    localStorage.setItem("Costo",costo)
    localStorage.setItem("Cantidad",cantidad);
    localStorage.setItem("Estado",estado);
    localStorage.setItem("Categoria",categoria);

    let cantidadInput = document.getElementById('cantidad');
    let informacionInput = document.getElementById('informacion')
    let nombreInput = document.getElementById('nombre')
    let costoInput = document.getElementById('costo')
    let estadoInput = document.getElementById('estado')
    let categoriaInput = document.getElementById('categoria')

    cantidadInput.value = cantidad;
    informacionInput.value = informacion
    nombreInput.value = nombre
    costoInput.value = costo
    estadoInput.value = estado
    categoriaInput.value = categoria
    localStorage.setItem("Cantidad",cantidad); 
    localStorage.setItem("Informacion",informacion); 
    localStorage.setItem("Nombre",nombre);
    localStorage.setItem("Costo",costo);
    localStorage.setItem("Estado",estado);
    localStorage.setItem("Categoria",categoria);
}

document.getElementById('informacion').addEventListener("input",function(){
    localStorage.setItem("Informacion",this.value)
})

document.getElementById('nombre').addEventListener("input",function(){
    localStorage.setItem("Nombre",this.value)
})

document.getElementById('costo').addEventListener("input",function(){
    localStorage.setItem("Costo",this.value)
})

document.getElementById('estado').addEventListener("change",function(){
    localStorage.setItem("Estado",this.value)
})

document.getElementById('categoria').addEventListener("change",function(){
    localStorage.setItem("Categoria",this.value) 
})

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
    let action = "Insertar"
    
    let ruta = "<?php echo SITE_URL;?>inventario/almacen/editar/" + id_inventario;

    let datos = JSON.stringify({action,id_inventario,nombre,informacion,Cantidad,costo,estado,categoria})
    console.log(datos)
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxAlmacen.php","Editar suministro","¿Estás seguro/a que quieres editar este suministro?","question","Editar","Cancelar","No se pudo editar","Se edito con exito","El suministro fue editado con exito",true,ruta)
}

function borrarBtn(){
    let action = "Borrar"
    let id_inventario = "<?php echo $this->datos[0]["Id_Inventario"]?>";
    let datos = JSON.stringify({action,id_inventario})
    let ruta = "<?php echo SITE_URL;?>inventario/almacen/";
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxAlmacen.php","Borrar suministro","¿Estás seguro/a que quieres borrar este suministro? No podras recuperar los datos","warning","Borrar","Cancelar","No se pudo borrar","Se borro con exito","El suministro se borro exitosamente",true,ruta)
}