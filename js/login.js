let checkbox = document.getElementById("showPasswd")
let pass = document.getElementById("pass")
let label = document.getElementById("showPasswdLbl")


function A(){
  label.addEventListener('click',function(){
    let checkbox = document.getElementById("showPasswd")
    if(checkbox.checked){
      checkbox.checked = false
      pass.setAttribute("type","password")
    }else{
      checkbox.checked = true
      pass.setAttribute("type","text")
    }
  })
  checkbox.addEventListener('change',function(){
    if(checkbox.checked){
        pass.setAttribute("type","text")
    }else{
        pass.setAttribute("type","password")
    }
  })
}

A()




function enviarRecuperacion(){
    let templateParams = {
        to_name: "Administrador",
        from_name: document.getElementById("recoveryUser").value,
        message: document.getElementById("recoveryUser").value + " olvido su contraseña"
    
    }
    
    if(document.getElementById("recoveryUser").value != ""){
        document.getElementById("recoveryUser").value = ""
        emailjs.send('service_dk5185q', 'template_kyynbmh', templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              Swal.fire({
                icon: "success",
                title: "El mensaje fue enviado con exito",
                text: "El mensaje fue enviado al administrador"
              })
              
    
            },
            (error) => {
              console.log('FAILED...', error);
              Swal.fire({
                icon: "error",
                title: "El mensaje no fue enviado",
                text: "El mensaje no fue enviado, intentalo mas tarde"
              })
            },
        );
    }else{
        Swal.fire({
            icon: "error",
            title: "Campo vacio",
            text: "Escribe el nombre del usuario"
          })
    }
}
