function regresarBtn(){
    location.replace("<?php echo SITE_URL;?>inventario/productos/")
    localStorage.clear()
}

document.getElementById('producto').addEventListener('input',function(){
    localStorage.setItem('Producto',this.value)
})

document.getElementById('informacion').addEventListener('input',function(){
    localStorage.setItem('Informacion',this.value)
})

document.getElementById('precio').addEventListener('input',function(){
    localStorage.setItem('Precio',this.value)
})

document.getElementById('costo').addEventListener('input',function(){
    localStorage.setItem('Costo',this.value)
})

document.getElementById('status').addEventListener('input',function(){
    localStorage.setItem('Status',this.value)
})

document.getElementById('categoria').addEventListener('input',function(){
    localStorage.setItem('Categoria',this.value)
})

document.addEventListener('DOMContentLoaded',function(){
    
    if(localStorage.getItem("isStored") == null){
        localStorage.clear()
        localStorage.setItem("isStored",true)
        document.getElementById('status').value = 1
        document.getElementById('categoria').value = 1
        localStorage.setItem('Producto','')
        localStorage.setItem('Informacion','')
        localStorage.setItem('Precio','')
        localStorage.setItem('Costo','')
        localStorage.setItem('Status',1)
        localStorage.setItem('Categoria',1)
    }else{
        document.getElementById('producto').value = localStorage.getItem("Producto")
        document.getElementById('informacion').value = localStorage.getItem("Informacion")
        document.getElementById('precio').value = localStorage.getItem("Precio")
        document.getElementById('costo').value = localStorage.getItem("Costo")
        document.getElementById('status').value = localStorage.getItem("Status")
        document.getElementById('categoria').value = localStorage.getItem("Categoria")
    }
})

function agregarBtn(){
    let producto = document.getElementById('producto').value 
    let informacion = document.getElementById('informacion').value
    let precio = document.getElementById('precio').value 
    let costo = document.getElementById('costo').value
    let status  
    if(document.getElementById('status').value == '1'){
        status = 'TRUE'
    }else{
        status = 'FALSE'
    }
    let categoria = document.getElementById('categoria').value
    let action = "Agregar"
    let ruta = "<?php echo SITE_URL;?>inventario/productos/"
    let datos = JSON.stringify({action,producto,informacion,precio,costo,status,categoria})
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxProducto.php","Agregar Producto","¿Estás seguro que quieres agregar este producto?","question","Agregar","Cancelar","No fue posible agregar este producto","producto agregado","El producto fue agregado con éxito",true,ruta)
}