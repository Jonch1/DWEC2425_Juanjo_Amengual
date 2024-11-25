function validar() {
    var codigoPostal = document.getElementById('codigo-postal').value;
    var cpRGEX =  /^[0]{1}[7]{1}[0-9]{3}$/;
    var cpResult = cpRGEX.test(codigoPostal);
    alert("phone:" + cpResult);
    return cpResult;
}