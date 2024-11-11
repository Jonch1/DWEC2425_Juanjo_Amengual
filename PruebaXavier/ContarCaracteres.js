function contarCaracteres(cadena) {
    const recuento = {};

    for (const caracter of cadena) {
        if (recuento[caracter]) {
            recuento[caracter]++;
        } else {
            recuento[caracter] = 1;
        }
    }

    return recuento;
}

const texto = "hola mundo";
const resultado = contarCaracteres(texto);
console.log(resultado);
