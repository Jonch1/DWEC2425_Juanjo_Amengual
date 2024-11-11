function EsBisiesto() {

    var UltimoDia = new Date('December 31,' + AñoCliente);

    var PrimerDia = new Date('January 01,' + AñoCliente);

    var Calculo = UltimoDia - PrimerDia;

    var Resultado = Math.floor(Calculo / 1000 / 60 / 60 / 24);

    if (Resultado === 365) {
        alert("El año "+ AñoCliente + " es bisiesto");
    }else {
        alert("El año "+ AñoCliente + " no es bisiesto");
    }

}

var AñoCliente = prompt("En que año te encuentras??");

EsBisiesto();