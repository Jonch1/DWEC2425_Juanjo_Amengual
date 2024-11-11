function calcularMedia(valores) {
    const suma = valores.reduce((acumulador, valor) => acumulador + valor, 0); // Suma todos los valores
    return suma / valores.length; // Calcula la media
}

// Ejemplo de uso:
const valores = [10, 20, 30, 40];
const media = calcularMedia(valores);
console.log(media);