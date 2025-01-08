function validar() {
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX =  /^[0-9]{9}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone:" + phoneResult);
    return phoneResult;
}