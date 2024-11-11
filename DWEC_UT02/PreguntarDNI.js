var respuestaDNI;

let intervaloDNI;

let DNIs = [];


function preguntarDNI () {

    do {

        respuestaDNI = prompt("Cual es tu DNI?");

        DNIs.push(respuestaDNI);

        console.log(DNIs);

        if (respuestaDNI == "-1") {

            console.log("Has decidido detener");
            clearInterval(intervaloDNI);
        }

    } while (respuestaDNI.length > 9 );

    if (respuestaDNI.length < 9) {
        console.log("El DNI introducido no es valido");
        clearInterval(intervaloDNI);
    }

}

intervaloDNI = setInterval(preguntarDNI, 5000);