var dia = new Date();
var mes = new Date();
var año = new Date();
var CorreccionMes = 1;

var NombreDia;
var NombreMes;

var FormatoSeleccionado = prompt("En qué formato quieres la fecha actual? \n"+
                                                 "1) 17/02/2016 \n"+
                                                 "2) Miercoles, 17 de febrero de 2016 \n"+
                                                 "3) Wednesday, February 17, 2016");

if (FormatoSeleccionado == "1") {

    alert (dia.getDate() + "/" + (mes.getMonth() + CorreccionMes) + "/" + año.getFullYear());

} else {

    if (FormatoSeleccionado == "2") {

        switch (dia.getDay()) {

            case 1:
                NombreDia = "Lunes";
                break;

            case 2:
                NombreDia = "Martes";
                break;

            case 3:
                NombreDia = "Miercoles";
                break;

            case 4:
                NombreDia = "Jueves";
                break;

            case 5:
                NombreDia = "Viernes";
                break;

            case 6:
                NombreDia = "Sabado";
                break;

            case 0:
                NombreDia = "Domingo";
                break;
        }

        switch (dia.getMonth()) {

            case 0:
                NombreMes = "Enero";
                break;

            case 1:
                NombreMes = "Febrero";
                break;

            case 2:
                NombreMes = "Marzo";
                break;

            case 3:
                NombreMes = "Abril";
                break;

            case 4:
                NombreMes = "Mayo";
                break;

            case 5:
                NombreMes = "Junio";
                break;

            case 6:
                NombreMes = "Julio";
                break;

            case 7:
                NombreMes = "Agosto";
                break;

            case 8:
                NombreMes = "Septiembre";
                break;

            case 9:
                NombreMes = "Octubre";
                break;

            case 10:
                NombreMes = "Noviembre";
                break;

            case 11:
                NombreMes = "Diciembre";
                break;
        }

        alert(NombreDia + ", " + dia.getDate() + " de " + NombreMes + " de " + año.getFullYear());


    } else {

        if (FormatoSeleccionado == "3") {

            switch (dia.getDay()) {

                case 1:
                    NombreDia = "Monday";
                    break;

                case 2:
                    NombreDia = "Tuesday";
                    break;

                case 3:
                    NombreDia = "Wednesday";
                    break;

                case 4:
                    NombreDia = "Thursday";
                    break;

                case 5:
                    NombreDia = "Friday";
                    break;

                case 6:
                    NombreDia = "Saturday";
                    break;

                case 0:
                    NombreDia = "Sunday";
                    break;
            }

            switch (dia.getMonth()) {

                case 0:
                    NombreMes = "January";
                    break;

                case 1:
                    NombreMes = "February";
                    break;

                case 2:
                    NombreMes = "March";
                    break;

                case 3:
                    NombreMes = "April";
                    break;

                case 4:
                    NombreMes = "May";
                    break;

                case 5:
                    NombreMes = "June";
                    break;

                case 6:
                    NombreMes = "July";
                    break;

                case 7:
                    NombreMes = "August";
                    break;

                case 8:
                    NombreMes = "September";
                    break;

                case 9:
                    NombreMes = "October";
                    break;

                case 10:
                    NombreMes = "November";
                    break;

                case 11:
                    NombreMes = "December";
                    break;
            }

            alert(NombreDia + ", " + NombreMes + " " + dia.getDate() + ", " + año.getFullYear());

        }

    }

}