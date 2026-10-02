const casilla = document.getElementById("frase");
const botonDdecir = document.getElementById("decir");
const respuesta = document.getElementById("respuesta");
const imagen = document.getElementById("imagen")

botonDdecir.addEventListener("click", function (){
    const frase = casilla.value.trim();
    const esPpregunta = frase.endsWith("?")
    const esGrito = frase === frase.toUpperCase() && frase !== frase.toLowerCase()

    if(esPpregunta && esGrito){
        respuesta.textContent = "¡Que si que ya voyyy!";
        imagen.src = "img/agobiado.png"
    }else if(esGrito){
        respuesta.textContent = "lo que tu digas.";
        imagen.src = "img/enfadado.png"
    }else if(frase === ""){
        respuesta.textContent = "Antonia ve mas lento";
        imagen.src = "img/agobiado.png"
    }else if (esPpregunta) {
        respuesta.textContent = "¿que dices?"
        imagen.src = "img/contento.png"
    }else {
        respuesta.textContent = "lo que tu digas Antonia"
    }
});