var Horas = new Date();
var Minutos = new Date();
var Segundos = new Date();

var Formato = Horas.getHours() + " : " + Minutos.getMinutes() + " : " + Segundos.getSeconds();

var FormatoSeleccionado = parseInt(prompt("En qué formato quieres la fecha actual? \n" +
    "1) 14:35:07 \n" +
    "2) 02:35 PM \n"));

switch (FormatoSeleccionado) {

    case 1:
        alert(Formato);
        break;

    case 2:
        if (Horas.getHours() < 12) {

            alert(Formato + " AM");

        } else {

            alert(Formato + " PM");

        }

        break;

}