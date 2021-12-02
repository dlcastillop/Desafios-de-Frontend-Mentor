document.getElementById("boton").addEventListener("click", function() {
    let entradas = document.getElementsByTagName("input");
    let parrafos = document.getElementsByClassName("parrafos");
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (entradas[0].value === "") {
        parrafos[0].classList.remove("ver");
        entradas[0].classList.add("error");
    }
    else {
        parrafos[0].classList.add("ver");
        entradas[0].classList.remove("error");
    }

    if (entradas[1].value === "") {
        parrafos[1].classList.remove("ver");
        entradas[1].classList.add("error");
    }
    else {
        parrafos[1].classList.add("ver");
        entradas[1].classList.remove("error");
    }
    
    if (emailRegex.test(entradas[2].value)) {
        parrafos[2].classList.add("ver");
        entradas[2].classList.remove("error");
    }
    else {
        parrafos[2].classList.remove("ver");
        entradas[2].classList.add("error");
    }

    if (entradas[3].value === "") {
        parrafos[3].classList.remove("ver");
        entradas[3].classList.add("error");
    }
    else {
        parrafos[3].classList.add("ver");
        entradas[3].classList.remove("error");
    }
});