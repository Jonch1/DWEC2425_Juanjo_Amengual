var CumpleañosCliente = prompt("Cuando es tu cumpleaños?? (Año-Mes-Día)");

var Cumpleaños = new Date(CumpleañosCliente);

var UltimoDia = new Date('2100-01-01');

var CumpleañosRestantes = UltimoDia - Cumpleaños;

alert(Math.floor(CumpleañosRestantes / 1000 / 60 / 60 / 24 / 365));