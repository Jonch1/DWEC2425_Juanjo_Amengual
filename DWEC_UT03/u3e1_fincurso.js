var hoy = new Date();

var UltimoDia = new Date('June 24, 2025');

var DiferenciaDias = UltimoDia - hoy;

console.log("Quedan un total de " + Math.floor(DiferenciaDias / 1000 / 60 / 60 / 24) + " dias");