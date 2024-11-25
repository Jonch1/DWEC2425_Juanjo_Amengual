function validar() {
    var correo = document.getElementById('correo').value;
    var correoRGEX =  /^[a-zA-Z0-9\.]{1,64}[@]{1}[a-zA-Z0-9]{1,64}[.]{1}[a-z]{1,4}$/;
    var correoResult = correoRGEX.test(correo);
    alert("correo:" + correoResult);
    return correoResult;
}