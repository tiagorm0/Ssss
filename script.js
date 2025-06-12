let desplazamientoX = 10;
let desplazamientoY = 10;

function respuestaSi() {
    alert("Sabia que lo harías,no me gusta que estemos así, te kiero mucho mi niña y aunque estes molesta siempre seguiré amándote con todo mi corazón porque tu eres mi princesa hermosa y quiero vivir el resto de mis dias a tu lado porque eres y seras la unica mujer para la que yo tendré ojos <3");
}

function moverBoton() {
    let botonNo = document.getElementById("noBtn");
    desplazamientoX += Math.random() * 50;
    desplazamientoY += Math.random() * 30;
    
    botonNo.style.position = "absolute";
    botonNo.style.left = `${desplazamientoX}px`;
    botonNo.style.top = `${desplazamientoY}px`;
}
