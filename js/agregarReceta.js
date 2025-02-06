let insumos = <?php echo json_encode($this->insumos); ?>;
let data = <?php echo json_encode($this->productos);?>;
let productos = JSON.parse(JSON.stringify(data));
let datos = JSON.parse(JSON.stringify(insumos))
let container = document.getElementById('prodBtn')
document.getElementById('categoria').addEventListener('change',function(){
    container.innerHTML = ""
    
    for(let i = 0; i < datos.length ;i++){
        if(datos[i].IC_Id == this.value){
            const button = document.createElement("button");
            button.className = "btn btn-light w-100 mb-2 text-start";
            button.textContent = datos[i].Nombre;
            let costo = (datos[i].Costo)? datos[i].Costo : "Sin costo"
            button.value = JSON.stringify({
                Id: datos[i].Id_Inventario,
                Nombre: datos[i].Nombre,
                Precio: datos[i].Stock,
                Informacion: datos[i].Informacion,
                Costo: costo
            });
            button.onclick = ()=> {addProduct(button.value)}
            container.append(button)
        }   
    }
})

document.getElementById('productoSelect').addEventListener('change',function(){
    let selectedOption = this.options[this.selectedIndex];
    document.getElementById('productoNombre').innerHTML = "Receta de "+selectedOption.innerHTML
})

document.getElementById('categoriaProducto').addEventListener('change',function(){
    document.getElementById('productoNombre').innerHTML = "Receta de..."
    var productoSelect = document.getElementById('productoSelect')
    productoSelect.innerHTML = ""
    var producto = document.createElement("option")
    producto.value = 0
    producto.innerHTML = "Producto"
    producto.setAttribute('selected','')
    producto.setAttribute('disabled','')
    productoSelect.append(producto)
    for(let i = 0; i < productos.length; i ++){
        if(productos[i].PC_Id == this.value){
            var option = document.createElement("option")
            option.value = productos[i].ID
            option.innerHTML = productos[i].Nombre
            productoSelect.append(option)
        }
    }
})

function addProduct(value){
    let producto = JSON.parse(value)
    let informacion = producto.Informacion ?? "Sin informacion"
    let table = $('#tablaReceta').DataTable();
    let tableBody = document.querySelector("#tablaReceta tbody");
    let existingRow = Array.from(tableBody.rows).find(
        (row) => row.cells[0].textContent == producto.Id.toString()
    );
    if(existingRow){
        const row = $(existingRow);
        const rowData = table.row(row).data();
        rowData[3] = Number(rowData[3]) + 1;
        if(rowData[4] != "Sin costo"){
            rowData[4] = Number(rowData[3]) * Number(producto.Costo)
        }
        
        table.row(row).data(rowData).invalidate().draw();
        
    }else{
    
        // Crea una nueva fila
        const newRowData = [
            producto.Id,
            producto.Nombre,
            informacion,
            1,
            producto.Costo,
            `<a href="#" class="btn btn-outline-success fw-bold agregarBtn" onclick="addStock(this)">+</a>
            <a href="#" class="btn btn-outline-primary fw-bold restarBtn" onclick="substractStock(this)">-</a>
            <button onclick="deleteStock(this)" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>`
        ];
        
        // Agrega la nueva fila a DataTable
        table.row.add(newRowData).draw();
    }
}

function addStock(element){
    const table = $('#tablaReceta').DataTable(); // Instancia de DataTable
    const row = $(element).closest('tr'); // Fila correspondiente
    const rowData = table.row(row).data(); // Obtiene los datos de la fila
    
    let cantidad = Number(rowData[3])
    let costo = Number(rowData[4]) / cantidad
    cantidad ++
    rowData[3] = cantidad
    if(rowData[4] != "Sin costo"){
        rowData[4] = Number(cantidad) * Number(costo)
    }
    if (cantidad > 0) {
        table.row(row).data(rowData).invalidate().draw();
    } else {
        table.row(row).remove().draw(); // Eliminar fila si la cantidad es 0
    }
}

function substractStock(element){

    const table = $('#tablaReceta').DataTable(); // Instancia de DataTable
    const row = $(element).closest('tr'); // Fila correspondiente
    const rowData = table.row(row).data(); // Obtiene los datos de la fila

    let cantidad = Number(rowData[3])
    let costo = Number(rowData[4]) / cantidad
    cantidad --
    rowData[3] = cantidad
    if(rowData[4] != "Sin costo"){
        rowData[4] = Number(cantidad) * Number(costo)
    }
    table.row(row).data(rowData).invalidate().draw();
    if (cantidad > 0) {
        table.row(row).data(rowData).invalidate().draw();
    } else {
        table.row(row).remove().draw(); // Eliminar fila si la cantidad es 0
    }
}

function deleteStock(element){
    const table = $('#tablaReceta').DataTable(); // Instancia de DataTable
    const row = $(element).closest('tr'); // Fila correspondiente
    const rowData = table.row(row).data(); // Obtiene los datos de la fila

    // Establecer la cantidad a cero y actualizar el importe
    rowData[2] = 0;
    rowData[4] = (0 * parseFloat(rowData[3])).toFixed(2);

    // Actualiza la fila con los nuevos datos
    table.row(row).data(rowData).invalidate().draw();

    if (rowData[2] === 0) {
        // Elimina la fila si la cantidad es cero
        table.row(row).remove().draw();
    }
}

function obtenerDatosTabla() {
    const table = $('#tablaReceta').DataTable(); // Instancia de DataTable
    const rows = table.rows().data(); // Obtiene todos los datos de las filas
    const productos = []; // Arreglo para almacenar los productos

    // Recorre las filas de la tabla
    rows.each(function(rowData) {
        // Obtiene los valores de cada fila
        const idInsumo = rowData[0]; 
        const nombre = rowData[1];    
        const cantidad = rowData[3]; 
        if (!isNaN(cantidad)) {
            productos.push({
                id: idInsumo,
                nombre: nombre,
                cantidad: cantidad
            });
        }
    });

    // Devuelve el arreglo en formato JSON
    return productos;
}

function finalizar(){
    let productos = obtenerDatosTabla()
    console.log(productos)
    let ruta = "<?php echo SITE_URL;?>inventario/recetas/" 
    let idProducto = document.getElementById('productoSelect').value
    idProducto = Number(idProducto)
    let select = document.getElementById('productoSelect');
    let nombreProducto = select.options[select.selectedIndex].innerHTML;
    if(idProducto != null && productos != '[]'){
        let action = "Agregar"
        let datos = JSON.stringify({productos,idProducto,action,nombreProducto})
        console.log(datos)
        llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxRecetas.php","Agregar Receta","Agregar Receta","question","Agregar","Cancelar","No se pudo agregar","Se agrego con exito","La receta fue agregada con exito",true,ruta)
    }else{
        Swal.fire({
            icon: "error",
            title: 'No es posible agregar la Receta',
            text: "Asegurate de no dejar ningun campo vacio"
          });
    }
    
    
    
}