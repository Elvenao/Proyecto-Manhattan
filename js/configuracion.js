let selectedTable1 = null
let selectedTable2 = null
let selectedTable3 = null
let selectedRow1 = null
let selectedRow2= null
let selectedRow3 = null
let id1= null, id2= null



$(document).ready(function() {
    
    var table = $('#meinTable').DataTable();
    var table2 = $('#categoriasInventario').DataTable();
    var table3 = $('#categoriasProducto').DataTable();
    
    $('#meinTable tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("editarBtn").setAttribute("disabled","")
        } else {
            
            table.$('tr.onClick').removeClass('onClick');
            selectedRow1 = $(this).addClass('onClick');
            document.getElementById("editarBtn").removeAttribute("disabled")
        }
        var data = table.row(this).data(); 
        selectedTable1 = data[1]
        console.log(data[1]); 
    });

    $('#categoriasInventario tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("editarCategoriaIBtn").setAttribute("disabled","")
        } else {
            
            table2.$('tr.onClick').removeClass('onClick');
            selectedRow2 = $(this).addClass('onClick');
            document.getElementById("editarCategoriaIBtn").removeAttribute("disabled")
        }
        var data = table2.row(this).data();
        selectedTable2 = data[1]
        id1 = data[0]
        console.log(data[1]); 
    });

    $('#categoriasProducto tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("editarCategoriaPBtn").setAttribute("disabled","")
        } else {
            
            table3.$('tr.onClick').removeClass('onClick');
            selectedRow3 = $(this).addClass('onClick');
            document.getElementById("editarCategoriaPBtn").removeAttribute("disabled")
        }
        var data = table3.row(this).data();
        selectedTable3 = data[1]
        id2 = data[0]
        console.log(data[1]); 
    });
});

function editarBtn(){  
    location.replace("editar/" + selectedTable)
}

function agregarBtn(){
    location.replace("agregar/")
}

function editarCategoriaIBtn(){
    let action = "Editar"
    let categoria = "Inventario"
    Alert("Editar Categoria Inventario", selectedRow2,"Editar","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>",'Categoria Actualizada',action,categoria,id1)
}

function editarCategoriaPBtn(){
    let action = "Editar"
    let categoria = "Productos"
    Alert("Editar Categoria Productos", selectedRow2,"Editar","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>",'Categoria Actualizada',action,categoria,id2)
}

function Alert(title,value = '',confirmButton,URL,titleSuccess,action,categoria,id){
    Swal.fire({
        title: title,
        input: "text",
        inputValue: value,
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: confirmButton,
        showLoaderOnConfirm: true,
        preConfirm: async (data) => {
            let json = JSON.stringify(data,action,categoria,id)
          try {
            let actionURL = URL
            const response = await fetch(actionURL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: json,
            });
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: titleSuccess
          });
        }
      });
}
