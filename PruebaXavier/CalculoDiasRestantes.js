function CalculoDiasRestantes() {

    var hoy = new Date(FechaHoy);

    var UltimoDia = new Date('December 31, 2024');

    var DiferenciaDias = UltimoDia - hoy;

    console.log("Quedan un total de " + Math.floor(DiferenciaDias / 1000 / 60 / 60 / 24) + " dias hasta que acabe el año");

}

var FechaHoy = prompt("En que dia te encuentras?? (Año-Mes-Día)");

CalculoDiasRestantes();
