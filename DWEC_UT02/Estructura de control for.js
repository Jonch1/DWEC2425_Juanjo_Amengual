//Estructura de control for

let contador = 0;

let resultado;

for (resultado = 1; resultado <= 100; resultado++) {
    if (resultado % 7 === 0) {
        alert("De momento vamos por el " + resultado + ", pulsa 'Aceptar' para continuar");
        contador++;
    }
}

alert("Total de múltiplos de 7 encontrados: " + contador);