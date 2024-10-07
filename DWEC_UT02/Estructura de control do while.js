//Estructura de control while

let letra = "s";

let intentos = 0;

let respuesta = prompt("En que letra estoy pensando?");

do {
    intentos++;
    respuesta = prompt("Vuelve a intentarlo :/")
    console.log("Mas suerte a la próxima :/");

} while (respuesta != letra && intentos <10)