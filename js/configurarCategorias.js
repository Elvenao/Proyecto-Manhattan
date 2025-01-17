let selectedTable2 = null
let selectedTable3 = null
let selectedRow2= null
let selectedRow3 = null
let id1= null, id2= null

$(document).ready(function() {
    
    var table2 = $('#categoriasInventario').DataTable();
    var table3 = $('#categoriasProducto').DataTable();
    
    $('#categoriasInventario tbody').on('click', 'tr', function() {
        if ($(this).hasClass('onClick')) {
            $(this).removeClass('onClick');
            document.getElementById("editarCategoriaIBtn").setAttribute("disabled","")
        } else {
            
            table2.$('tr.onClick').removeClass('onClick');
            selectedRow2 = $(this).addClass('onClick');
            document.getElementById("editarCategoriaIBtn").removeAttribute("disabled")
            document.getElementById("borrarCategoriaIBtn").removeAttribute("disabled")
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
            document.getElementById("borrarCategoriaPBtn").removeAttribute("disabled")
        }
        var data = table3.row(this).data();
        selectedTable3 = data[1]
        id2 = data[0]
        console.log(data[1]); 
    });
});

function regresarBtn(){
  location.replace("<?php echo SITE_URL;?>configuracion/")
}

function editarCategoriaIBtn(){
    let action = "Editar"
    let categoria = "Inventario"
    Alert("Editar categoria del Inventario", selectedTable2,"Editar","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>",'Categoria Actualizada',action,categoria,id1,true)
}

function editarCategoriaPBtn(){
    let action = "Editar"
    let categoria = "Producto"
    Alert("Editar categoria de Productos", selectedTable3,"Editar","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>",'Categoria Actualizada',action,categoria,id2,true)
}

function agregarCategoriaIBtn(){
    let action = "Agregar"
    let categoria = "Inventario"
    Alert("Agregar categoria del Inventario", '',"Agregar","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>",'Categoria Agregada',action,categoria,null,true)
}

function agregarCategoriaPBtn(){
    let action = "Agregar"
    let categoria = "Producto"
    Alert("Agregar categoria de Productos", '',"Agregar","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>",'Categoria Agregada',action,categoria,null,true)
}

function borrarCategoriaIBtn(){
    let categoria = "Inventario"
    Borrar("Borrar categoria del Inventario","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>","Se ha borrado la categoria del Inventario",categoria,id1,true)
}

function borrarCategoriaPBtn(){
    let categoria = "Producto"
    Borrar("Borrar categoria de Productos","<?php echo SITE_URL;?>_controller/ajaxCategorias.php?>","Se ha borrado la categoria de Productos",categoria,id2,true)
}

function Borrar(title,URL,titleSuccess,categoria,id,reload = false){
    Swal.fire({
        title: title,
        showConfirmButton: true,
        confirmButtonText: "Borrar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        preConfirm: async () => {
            let action = "Borrar"
            let json = JSON.stringify({id,categoria,action})
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

    }).then((result) =>{
        if (result.isConfirmed) {
            Swal.fire({
              title: titleSuccess,
              showconfirmButton: true,
              confirmButtonText: "Ok"
            }
          ).then((results) =>{
              if(reload && results.isConfirmed){
                  location.replace("<?php echo SITE_URL;?>configuracion/categorias/")
              }
        });
        }
    })
}

function Alert(title,value,confirmButton,URL,titleSuccess,action,categoria,id = null,reload = false){
    Swal.fire({
        title: title,
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        inputValue: value,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: confirmButton,
        showLoaderOnConfirm: true,
        preConfirm: async (data) => {
            let json = JSON.stringify({data,action,categoria,id})
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
            title: titleSuccess,
            showconfirmButton: true,
            confirmButtonText: "Ok"
          }
          
        ).then((results) =>{
            if(reload && results.isConfirmed){
                location.replace("<?php echo SITE_URL;?>configuracion/categorias/")
            }
        });
        }
        
      });
}
