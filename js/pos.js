document.getElementById('categoria').addEventListener('change',function(){
    if(this.value != "carga"){
        let action = "Select";
        let value = this.value
        let datos = JSON.stringify({value, action});
        let ruta = '<?php echo SITE_URL; ?>notas/pos/'
        llamadaAjax(datos, "<?php echo SITE_URL;?>_controller/ajaxPOS.php", false, ruta);
    }else {
        let sel = document.getElementById("prodBtn");
        sel.innerHTML = "";
    }
})

function addProducto(value) {
    const producto = JSON.parse(value);
    const tableBody = document.querySelector("#tablapos tbody");

    // Verificar si el producto ya existe en la tabla
    const existingRow = Array.from(tableBody.rows).find(
        (row) => row.cells[0].textContent === producto.Id.toString()
    );

    if (existingRow) {
        // Si existe, aumentar la cantidad
        const cantidadCell = existingRow.children[2];
        const importeCell = existingRow.children[4];
        const precio = parseFloat(existingRow.children[3].textContent);

        let cantidad = parseInt(cantidadCell.textContent);
        cantidad += 1;

        cantidadCell.textContent = cantidad;
        importeCell.textContent = (cantidad * precio).toFixed(2);
    } else {
        // Si no existe, agregar una nueva fila
        var table = $('#tablapos').DataTable();

        // Crea una nueva fila
        const newRowData = [
            producto.Id,
            producto.Nombre,
            1,
            producto.Precio,
            producto.Precio,
            `<a href="#" class="btn btn-outline-success fw-bold agregarBtn" onclick="updateCantidad(this, 1)">+</a>
            <a href="#" class="btn btn-outline-primary fw-bold restarBtn" onclick="updateCantidad(this, -1)">-</a>
            <button onclick="deleteCantidad(this)" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>`
        ];
        
        // Agrega la nueva fila a DataTable
        table.row.add(newRowData).draw();
    }

    calcularTotal(); // Actualizar el total al agregar producto
}

function updateCantidad(element, delta) {
    const table = $('#tablapos').DataTable(); // Instancia de DataTable
    const row = $(element).closest('tr'); // Fila correspondiente
    const rowData = table.row(row).data(); // Obtiene los datos de la fila

    const cantidadCell = rowData[2]; // Columna de cantidad
    const importeCell = rowData[4]; // Columna de importe
    const precio = parseFloat(rowData[3]); // Precio

    let cantidad = parseInt(cantidadCell);
    cantidad = Math.max(0, cantidad + delta); // Evitar valores negativos

    // Actualiza los datos de la fila
    rowData[2] = cantidad;
    rowData[4] = (cantidad * precio).toFixed(2);

    // Actualiza la fila con los nuevos datos
    table.row(row).data(rowData).invalidate().draw();

    if (cantidad === 0) {
        // Elimina la fila si la cantidad es cero
        table.row(row).remove().draw();
    }

    calcularTotal(); // Actualizar el total al cambiar cantidad
}

// Función para eliminar la cantidad
function deleteCantidad(element) {
    const table = $('#tablapos').DataTable(); // Instancia de DataTable
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

    calcularTotal();
}

function calcularTotal() {
    const tableBody = document.querySelector("#tablapos tbody");
    let total = 0;

    Array.from(tableBody.rows).forEach((row) => {
        const importeCell = row.children[4]; // Verificar índice
        if (importeCell) {
            total += parseFloat(importeCell.textContent) || 0; // Manejar valores no numéricos o vacíos
        } else {
            console.warn("Celda de importe no encontrada en la fila:", row);
        }
    });

    const totalInput = document.querySelector("#totalNota + input");
    if (totalInput) {
        totalInput.value = total.toFixed(2);
    } else {
        console.error("Elemento para mostrar el total no encontrado.");
    }
}
function calcularTotalTicket() { 
    const tableBody = document.querySelector("#tablapos tbody"); 
    let total = 0; 
    Array.from(tableBody.rows).forEach((row) => { 
        const importeCell = row.children[4]; 
        if (importeCell) { total += parseFloat(importeCell.textContent) || 0;
        } else { 
            console.warn("Celda de importe no encontrada en la fila:", row); 
        } 
    }); 
        return total.toFixed(2); 
    
    }

function obtenerDatosTabla() {
    const table = $('#tablapos').DataTable(); // Instancia de DataTable
    const rows = table.rows().data(); // Obtiene todos los datos de las filas
    const productos = []; // Arreglo para almacenar los productos

    // Recorre las filas de la tabla
    rows.each(function(rowData) {
        // Obtiene los valores de cada fila
        const descripcion = rowData[1]; // Nombre del producto (columna 1)
        const cantidad = rowData[2];    // Cantidad (columna 2)
        const precio = parseFloat(rowData[3]); // Precio (columna 3)
        const total = parseFloat(rowData[4]);  // Total (columna 4)

        // Verifica si los valores de cantidad y precio son números antes de agregarlos
        if (!isNaN(cantidad) && !isNaN(precio)) {
            // Crea el objeto con los datos del producto
            productos.push({
                descripcion: descripcion,
                cantidad: cantidad,
                precio: precio,
                total: total
            });
        }
    });

    // Devuelve el arreglo en formato JSON
    return JSON.stringify(productos);
}



function finalizar() {
    let json = obtenerDatosTabla();
    console.log(json);
    let total = calcularTotalTicket();
    console.log(total);
    let action = "Ticket"
    let datos = JSON.stringify({action, json, total});
    let ruta = '<?php echo SITE_URL; ?>notas/pos/'
    llamadaASweetAlert(datos,"<?php echo SITE_URL;?>_controller/ajaxPOS.php","Finalizar Nota","¿Estás seguro/a de dar de alta esta venta?","warning","Aceptar","Cancelar","No se pudo crear nota","Se creo la nota con exito","La nota se creo exitosamente",true,ruta);
}