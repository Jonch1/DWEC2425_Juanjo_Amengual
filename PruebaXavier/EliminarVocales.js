function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
}

// Ejemplo de uso:
const texto = "Hola Mundo";
const resultado = eliminarVocales(texto);
console.log(resultado);