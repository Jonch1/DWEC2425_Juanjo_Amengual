function validar() {
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX =  /^[(]{0,1}[+]{0,1}[0-9\-]{0,6}[)]{0,1}[(]{0,1}[0-9]{3}[(]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone:" + phoneResult);
    return phoneResult;
}