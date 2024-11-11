let numero =  new Number (prompt("Introduce un numero"));

let exponencial = numero.toExponential();

let decimales = numero.toFixed(4);

let binario = numero.toString(2);

let octal = numero.toString(8);

let hexadecimal = numero.toString(16);

console.log("Exponencial: " + exponencial);

console.log("Decimales(4): " +decimales);

console.log("Binario: " +binario);

console.log("Octal: " +octal);

console.log("Hexadecimal: 0x" +hexadecimal);