function segundoMayor(array) {
    const numerosOrdenados = array.sort((a, b) => b - a);

    return numerosOrdenados[1];
}

const numeros = [10, 20, 30, 20, 30, 40];
const resultado = segundoMayor(numeros);
console.log(resultado);