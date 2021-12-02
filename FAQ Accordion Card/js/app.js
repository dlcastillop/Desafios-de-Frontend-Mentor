function manejarClick() {
    this.classList.toggle("negrita");

    if (this.id === "q1") {
        document.getElementById("p1").classList.toggle("ver");
        document.getElementById("i1").classList.toggle("rotar");
    }

    else if(this.id === "q2") {
        document.getElementById("p2").classList.toggle("ver");
        document.getElementById("i2").classList.toggle("rotar");
    }

    else if(this.id === "q3") {
        document.getElementById("p3").classList.toggle("ver");
        document.getElementById("i3").classList.toggle("rotar");
    }

    else if(this.id === "q4") {
        document.getElementById("p4").classList.toggle("ver");
        document.getElementById("i4").classList.toggle("rotar");
    }

    else if(this.id === "q5") {
        document.getElementById("p5").classList.toggle("ver");
        document.getElementById("i5").classList.toggle("rotar");
    }
}

let botones = document.getElementsByTagName("button");

for (let i=0; i<botones.length; i++) {
    botones[i].addEventListener("click", manejarClick);
}