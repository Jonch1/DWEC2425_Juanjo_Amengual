let Radio = prompt("Cual quieres que sea el valor del radio??");

let Diametro = Math.floor(Radio * 2);

let Perimetro = Math.floor(2 * Math.PI * Radio);

let AreaCirculo = Math.floor(Math.PI * Math.pow(Radio, 2));

let AreaEsfera = Math.floor(4 * Math.PI * Math.pow(Radio, 2));

let VolumenEsfera = Math.floor(4/3 * Math.PI * Math.pow(Radio, 3));

alert("Diámetro de la circunferencia: " + Diametro + "\n" +
    "Perímetro de la circunferencia: " + Perimetro + "\n" +
    "Área de la circunferencia: " + AreaCirculo + "\n" +
    "Área de la esfera: " + AreaEsfera + "\n" +
    "Volumen de la esfera: " + VolumenEsfera);