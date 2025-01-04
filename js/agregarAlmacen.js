function agregarBtn(){
  let action = "Agregar"
  let nombre = document.getElementById('nombre').value
  let stock = document.getElementById('cantidad').value
  let informacion = document.getElementById('informacion').value
  let costo = document.getElementById('costo').value
  let status = document.getElementById('status').value
  let categoria = document.getElementById('categoria').value
  if(nombre === '' || informacion === '' ){
    Swal.fire({
      icon: "error",
      title: "Faltan Datos",
      text: "Asegurate de escribir todos los datos"
      
    });
    
  }else if(isNaN(stock) || isNaN(costo) || stock < 0 || costo < 1){
    Swal.fire({
      icon: "error",
      title: "Datos invalidos",
      text: "Asegurate de escribir datos validos"
      
    });
  }else{
    let datos = JSON.stringify({action,nombre,stock,informacion,costo,status,categoria})
    console.log(datos)
    let ruta = "<?php echo SITE_URL;?>inventario/almacen/"
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxAlmacen.php","Agregar Suministro","¿Estás seguro que quieres agregar este suministro?","question","Agregar","Cancelar","No fue posible agregar este suministro","Suministro agregado","El suministro fue agregado con éxito",true,ruta)
  }
  
}

document.getElementById('nombre').addEventListener('input',function(){
  localStorage.setItem('Nombre',this.value)
})

document.getElementById('cantidad').addEventListener('input',function(){
  localStorage.setItem('Cantidad',this.value)
})

document.getElementById('informacion').addEventListener('input',function(){
  localStorage.setItem('Informacion',this.value)
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


function regresarBtn(){
  location.replace('<?php echo SITE_URL; ?>inventario/almacen/')
  localStorage.clear()
}


document.addEventListener('DOMContentLoaded',function(){
  if(localStorage.getItem("Nombre") == null || localStorage.getItem('Cantidad') == null || localStorage.getItem('Informacion') == null || localStorage.getItem('Costo') == null || localStorage.getItem('Status') == null || localStorage.getItem('Categoria') == null){
    localStorage.clear()
    document.getElementById('status').value = 1
    document.getElementById('categoria').value = 1
    localStorage.setItem('Nombre','')
    localStorage.setItem('Cantidad','')
    localStorage.setItem('Informacion','')
    localStorage.setItem('Costo','')
    localStorage.setItem('Status',1)
    localStorage.setItem('Categoria',1)
  }else{
    document.getElementById('nombre').value = localStorage.getItem("Nombre")
    document.getElementById('cantidad').value = localStorage.getItem("Cantidad")
    document.getElementById('informacion').value = localStorage.getItem("Informacion")
    document.getElementById('costo').value = localStorage.getItem("Costo")
    document.getElementById('status').value = localStorage.getItem("Status")
    document.getElementById('categoria').value = localStorage.getItem("Categoria")
  }
})