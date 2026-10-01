const casilla = document.getElementById("frase");
const botonDdecir = document.getElementById("decir");
const respuesta = document.getElementById("respuesta");

botonDdecir.addEventListener("click", function (){
    const frase = casilla.value;
    const esPpregunta = frase.endsWith("?")
    const esGrito = frase === frase.toUpperCase() && frase !== frase.toLowercase()

    if (esPpregunta) {
        respuesta.textContent = "ni idea.";
    }else {
        respuesta.textContent = "lo que tu digas.";

    }
    console.log("me has dicho: " + frase);
    respuesta.textContent = "Antonia ve mas lento.";
});