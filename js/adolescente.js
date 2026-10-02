const casilla = document.getElementById("frase");
const botonDdecir = document.getElementById("decir");
const respuesta = document.getElementById("respuesta");
const imagen = document.getElementById("imagen")

botonDdecir.addEventListener("click", function (){
    const frase = casilla.value.trim();
    const esPpregunta = frase.endsWith("?")
    const esGrito = frase === frase.toUpperCase() && frase !== frase.toLowerCase()

    if(esPpregunta && esGrito){
        respuesta.textContent = "¡Que si que ya voy Noa!";
        imagen.src = "img/agobiado.png"
    }else if(esGrito){
        respuesta.textContent = "Noa lo que tu digas.";
        imagen.src = "img/enfadado.png"
    }else if(frase === ""){
        respuesta.textContent = "¿que dices Noa?";
        imagen.src = "img/agobiado.png"
    }else if (esPpregunta) {
        respuesta.textContent = "¿que quieres Noa?"
        imagen.src = "img/contento.png"
    }else {
        respuesta.textContent = "lo que tu digas Pamela"
    }
});