function regresarBtn(){
    localStorage.clear()
    location.replace('<?php echo SITE_URL; ?>inventario/productos/')
}

document.addEventListener("DOMContentLoaded",function(){
    let status = "<?php $status = $this->datos[0]['status']; if($status == 'TRUE')$status = 1; else $status = 0; echo $status;?>";
    document.getElementById('categoria').value = "<?php echo $this->datos[0]['PC_Id']?>"
    document.getElementById('status').value = status;
    let producto = "<?php echo $this->datos[0]['Nombre']?>"
    let precio = "<?php echo $this->datos[0]['Precio']?>" 
    let costo = "<?php echo $this->datos[0]['Costo']?>"
    let informacion = "<?php echo $this->datos[0]['Informacion']?>" 
    let categoria = "<?php echo $this->datos[0]['PC_Id']?>"
    if(localStorage.getItem('isStored') == null){
        localStorage.clear()
        localStorage.setItem('isStored',true)
        localStorage.setItem('Producto',producto)
        localStorage.setItem('Precio',precio)
        localStorage.setItem('Costo',costo)
        localStorage.setItem('Informacion',informacion)
        localStorage.setItem('Status',status)
        localStorage.setItem('Categoria',categoria)
    }else{
        document.getElementById('producto').value = localStorage.getItem('Producto')
        document.getElementById('precio').value = localStorage.getItem('Precio')
        document.getElementById('costo').value = localStorage.getItem('Costo')
        document.getElementById('informacion').value = localStorage.getItem('Informacion')
        document.getElementById('status').value = localStorage.getItem('Status')
        document.getElementById('categoria').value = localStorage.getItem('Categoria')
    }
})

document.getElementById('producto').addEventListener('input',function(){
    localStorage.setItem('Producto',this.value)
})

document.getElementById('precio').addEventListener('input',function(){
    localStorage.setItem('Precio',this.value)
})

document.getElementById('costo').addEventListener('input',function(){
    localStorage.setItem('Costo',this.value)
})

document.getElementById('informacion').addEventListener('input',function(){
    localStorage.setItem('Informacion',this.value)
})

document.getElementById('status').addEventListener('input',function(){
    localStorage.setItem('Status',this.value)
})

document.getElementById('categoria').addEventListener('input',function(){
    localStorage.setItem('Categoria',this.value)
})



function borrarBtn(){
   
    let id = "<?php echo $this->datos[0]['Id_Productos']?>"
    console.log(id)
    let action = "Borrar"
    let datos = JSON.stringify({id,action})
    let ruta = '<?php echo SITE_URL; ?>inventario/productos/'
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxProducto.php","Borrar producto","¿Estás seguro/a que quieres borrar este producto? No podras recuperar los datos","warning","Borrar","Cancelar","No se pudo borrar","Se borro con exito","El producto se borro exitosamente",true,ruta)
}

function editarBtn(){
    let id = "<?php echo $this->datos[0]['Id_Productos']?>"
    let producto = document.getElementById('producto').value
    let precio = document.getElementById('precio').value
    let costo = document.getElementById('costo').value
    let informacion  = document.getElementById('informacion').value
    let status 
    if(document.getElementById('status').value == 1){
        status = 'TRUE'
    }else{
        status = 'FALSE'
    }
    let categoria = document.getElementById('categoria').value
    let action = "Editar"
    let ruta = '<?php echo SITE_URL; ?>inventario/productos/editar/'+id
    console.log("SI")
    let datos = JSON.stringify({action,id,producto,precio,costo,informacion,status,categoria})
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxProducto.php","Editar producto","¿Estás seguro/a que quieres editar este producto?","question","Editar","Cancelar","No se pudo editar","Se edito con exito","El producto fue editado con exito",true,ruta)
}


function reestablecerBtn(){
    let status = "<?php $status = $this->datos[0]['status']; if($status == 'TRUE')$status = 1; else $status = 0; echo $status;?>"
    let producto = "<?php echo $this->datos[0]['Nombre']?>"
    let precio = "<?php echo $this->datos[0]['Precio']?>" 
    let costo = "<?php echo $this->datos[0]['Costo']?>"
    let informacion = "<?php echo $this->datos[0]['Informacion']?>" 
    let categoria = "<?php echo $this->datos[0]['PC_Id']?>"

    localStorage.setItem('Producto',producto)
    localStorage.setItem('Precio',precio)
    localStorage.setItem('Costo',costo)
    localStorage.setItem('Informacion',informacion)
    localStorage.setItem('Status',status)
    localStorage.setItem('Categoria',categoria)

    document.getElementById('producto').value = localStorage.getItem('Producto')
    document.getElementById('precio').value = localStorage.getItem('Precio')
    document.getElementById('costo').value = localStorage.getItem('Costo')
    document.getElementById('informacion').value = localStorage.getItem('Informacion')
    document.getElementById('status').value = localStorage.getItem('Status')
    document.getElementById('categoria').value = localStorage.getItem('Categoria')
}
