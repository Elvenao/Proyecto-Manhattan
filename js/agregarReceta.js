let insumos = <?php echo json_encode($this->insumos); ?>;
let data = <?php echo json_encode($this->productos);?>;
let productos = JSON.parse(JSON.stringify(data));
let datos = JSON.parse(JSON.stringify(insumos))
let container = document.getElementById('prodBtn')
document.getElementById('categoria').addEventListener('change',function(){
    if(this.value != "0"){
        container.innerHTML = ""
        
        for(let i = 0; i < datos.length ;i++){
            if(datos[i].IC_Id == this.value){
                const button = document.createElement("button");
                button.className = "btn btn-light w-100 mb-2 text-start";
                button.textContent = datos[i].Nombre;
                
                button.value = JSON.stringify({
                    Id: datos[i].Id_Inventario,
                    Nombre: datos[i].Nombre,
                    Precio: datos[i].Stock,
                    Informacion: datos[i].Informacion,
                });
                button.onclick = ()=> {addProduct(button.value)}
                
                container.append(button)
            }   
        }
        
    }else {
        
        container.innerHTML = "";
    }
})

document.getElementById('categoriaProducto').addEventListener('change',function(){
    var productoSelect = document.getElementById('productoSelect')
    console.log(this.value)
    productoSelect.innerHTML = ""
    for(let i = 0; i < productos.length; i ++){
        console.log(productos[i].PC_Id)
        
        if(productos[i].PC_Id == this.value){
            console.log("HPLA")
            var option = document.createElement("option")
            option.value = productos[i].PC_Id
            console.log(productos[i].PC_Id)
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
        table.row(row).data(rowData).invalidate().draw();
        
    }else{
        
        // Crea una nueva fila
        const newRowData = [
            producto.Id,
            producto.Nombre,
            informacion,
            1,
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
    cantidad ++
    rowData[3] = cantidad
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
    console.log(cantidad)
    cantidad --
    rowData[3] = cantidad
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

function finalizar(){
    
}