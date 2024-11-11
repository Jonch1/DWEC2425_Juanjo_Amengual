function CalculoDistancia() {

    let ResultadoDistancia = valorX - valorY;

    if (ResultadoDistancia > 0) {

        alert ("La distancia entre " + valorX + " y " + valorY + " es de aproximadamente" + Math.floor(ResultadoDistancia) + " metros.");

    } else {

        ResultadoCorregido = ResultadoDistancia * -1;

        alert ("La distancia entre " + valorX + " y " + valorY + " es de aproximadamente" + Math.floor(ResultadoCorregido) + " metros.");
    }

}

let valorX = prompt("Cual es el primer punto?");

let valorY = prompt("Cual es el segundo punto?");

CalculoDistancia();
