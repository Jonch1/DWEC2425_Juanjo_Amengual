function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');

    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

const texto = "A man, a plan, a canal, Panama";
const resultado = esPalindromo(texto);
console.log(resultado);