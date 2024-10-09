//Estructura de control while (sin if)

let letra = "s";

let intentos = 0;

let respuesta = prompt("En que letra estoy pensando?");

while (respuesta !== letra && intentos <9) {

    respuesta = prompt("Vuelve a intentarlo :/")
    console.log("Mas suerte a la próxima :/");
    intentos++;

}

if (respuesta === letra) {
    alert("Enhorabuena crack!!!");
} else {
    alert("Mas suerte a la proxima")
}