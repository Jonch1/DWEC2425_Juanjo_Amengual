function inversaLetras(cadena) {
    var palabras = cadena.split(" "); // Dividimos la cadena en palabras
    var letrasInversas = palabras.map(palabra => palabra.split("").reverse().join("")); // Invertimos las letras de cada palabra
    var cadenaInversa = letrasInversas.join(" "); // Volvemos a unir las palabras con los espacios correspondientes
    return cadenaInversa;
}

var texto = prompt("Escribe la palabra o palabras que quieres invertir");
var textoInverso = inversaLetras(texto);
alert(textoInverso);