const campoNombre = document.getElementById('nombre'); //Obtenemos el valor del campo "nombre" y lo metemos en la variable CampoNombre

campoNombre.addEventListener('blur', function() { //Mediante el evento blur indicamos que cuando se pierda el focus del campo "nombre" este pasará a tener el contenido en mayúscula
    this.value = this.value.toUpperCase();  //El evento "blur" se activa cuando el campo pierde el enfoque (es decir, cuando el cursor o la selección deja de estar en ese campo).
});

const campoEmail = document.getElementById('email');  //Obtenemos el valor del campo "email" y lo metemos en la variable campoEmail

const campoEntradas = document.getElementById('entradas'); //Obtenemos el valor del campo "entradas" y lo metemos en la variable campoEntradas

const asientos = document.querySelectorAll('.seat'); //Obtenermos el valor de los campos "seat" y lo metemos dentro de la variable "asientos"

const campoTelefono = document.getElementById('telefono'); //Obtenemos el valor del campo "telefono" y lo metemos en la variable campoTelefono


// Función para obtener el valor de una cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Función para establecer una cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Evento al enviar el formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const cookieName = 'intentosEnvio';

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Obtener el contador actual de intentos
            let attempts = parseInt(getCookie(cookieName)) || 0;

            // Incrementamos el contador de intentos
            attempts++;

            // Guardamos el nuevo valor en las cookies
            setCookie(cookieName, attempts, 14); // La cookie tiene una duración de 7 días

            // Condicion que establece que si el campo nombre no se ha rellenado te salta el error y te devuelve al campo mediante focus()
            if (campoNombre.value === '') {
                document.getElementById("errores").innerHTML = 'Debes rellenar el campo NOMBRE!!';
                campoNombre.focus();
            } else {

                var correo = document.getElementById('email').value; // Cogemos el valor del campo "email" y lo metemos en la variable correo
                var correoRGEX =  /^[a-zA-Z0-9\.]{1,64}[@]{1}[a-zA-Z0-9]{1,64}[.]{1}[a-z]{1,4}$/; //Le establecemos cual es el formato que debe seguir (dd/mm/aaaa)
                var correoResult = correoRGEX.test(correo); //Mediante la funcion test probamos si el correo que introduce el usuario coincide con el formato establecido

                // Condicion que establece que si el campo correo no cumple con el formato te salta el error y te devuelve al campo mediante focus()
                if (correoResult === false) {
                    document.getElementById("errores").innerHTML = 'El formato de correo que estas utilizando no es el correcto o está vacío';
                    campoEmail.focus();
                } else {
                    // Condicion que establece que si el campo entradas es 0 te salta el error y te devuelve al campo mediante focus()
                    if(campoEntradas.value === "0" /*||asientos.value !== campoEntradas.value*/) {
                        document.getElementById("errores").innerHTML = 'No has puesto cuantas entradas quieres o el numero de entradas es diferente al de asientos';
                        campoEmail.focus();
                    }else {

                        var fecha = document.getElementById('fecha-evento').value;
                        var fechaRGEX =  /[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/;
                        var fechaResult = fechaRGEX.test(fecha);

                        // Condicion que establece que si el campo fecha no cumple con el formato te salta el error y te devuelve al campo mediante focus()
                        if (fechaResult === false) {
                            document.getElementById("errores").innerHTML = 'El formato de fecha que estas utilizando no es el correcto o ya ha pasado (dd/mm/aaaa)';
                            campoEmail.focus();
                        } else {

                            var tel = document.getElementById('telefono').value; // Cogemos el valor del campo "telefono" y lo metemos en la variable tel
                            var telRGEX =  /^[0-9]{9}$/; //Le establecemos cual es el formato que debe seguir (9 digitos)
                            var telResult = telRGEX.test(tel);

                            // Condicion que establece que si el campo telefono no cumple con el formato te salta el error y te devuelve al campo mediante focus()
                            if (telResult === false) {
                                document.getElementById("errores").innerHTML = 'El formato de telefono que estas utilizando no es el correcto ';
                                campoTelefono.focus();
                            }else {

                            // Mostrar el contador actualizado
                            document.getElementById("intentos").innerHTML = `Intentos de envío: ${attempts}`; }}}}}

        });
    }
});