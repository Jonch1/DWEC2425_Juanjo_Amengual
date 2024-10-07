// Estructura de control IF
let nombre = prompt("Cual es tu nombre");

let edad = prompt("Cuantos años tienes?");

let estado;

if (edad <= 12) {
    estado = "nin"
}

if (edad > 12 && edad <= 17) {
    estado = "adolescent"
}

if (edad > 18 && edad <=64) {
    estado = "treballador"
}

if (edad > 65) {
    estado = "jubilat"
}

let mensaje = "En " + nombre + " te " + edad + " anys i es un " + estado;

let estilo = "font-weight: bold; color: green"

console.log("%c" + mensaje, estilo);