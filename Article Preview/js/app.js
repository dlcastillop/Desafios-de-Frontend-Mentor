document.getElementById("button").addEventListener("click", function() {
    document.getElementById("share").classList.toggle("visualizar");
});

let coordenadas = document.getElementById("button").getBoundingClientRect();

let coordenadasTop = String(coordenadas.top - 55) + "px";
let coordenadasLeft = String(coordenadas.left - 70) + "px";

document.getElementById("share").style.top = coordenadasTop;
document.getElementById("share").style.left = coordenadasLeft;