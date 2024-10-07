let nombre = prompt("Cual es tu nombre?");

if (nombre === null) {
    nombre2 = "   ";
}

let decision = confirm("Quieres abandonar el programa?");

if (decision === true) {
    decision2 = "abandonar";

} else decision2 = "continuar"

alert("Muy bien," + nombre + " ,has decidido " + decision2);

let textoFin = "FIN DEL PROGRAMA"

let estilo = "font-weight: bold; text-decoration: underline blue"

console.log("%c" + textoFin, estilo);