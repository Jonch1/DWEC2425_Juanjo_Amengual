//Estructura de control do while

let letra = "s";

let intentos = 0;

let respuesta = "";

do {
    respuesta = prompt("En que letra estoy pensando?")
    console.log("Mas suerte a la próxima :/");
    intentos++;

} while (respuesta !== letra && intentos <9);

if (respuesta === letra) {
    alert("Enhorabuena crack!!!");
} else {
    alert("Mas suerte a la proxima")
}