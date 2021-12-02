document.getElementById("boton").addEventListener("click", function() {
    let campo = document.getElementById("correo");
    let parrafo = document.getElementById("parrafo");
            
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (emailRegex.test(campo.value) === false) {
        parrafo.classList.remove("ver");
    }
    else {
        parrafo.classList.add("ver");
    }
});