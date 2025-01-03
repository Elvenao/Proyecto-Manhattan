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



function regresarBtn(){
  location.replace('<?php echo SITE_URL; ?>inventario/almacen/')
}