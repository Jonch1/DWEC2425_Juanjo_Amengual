class Disco {

    constructor() {
        this.nombre = "";
        this.grupo = "";
        this.anioPublicacion = "";
        this.tipoMusica = "";
        this.localizacion = 0;
        this.prestado = false;


        this.incluirInformacion= function (nombre, grupo, anioPublicacion, tipoMusica) {
            this.nombre = nombre;
            this.grupo = grupo;
            this.anioPublicacion = anioPublicacion;
            this.tipoMusica = tipoMusica;

        };


        this.cambiarLocalizacion = function (nuevaLocalizacion) {
            this.localizacion = nuevaLocalizacion;
        };


        this.cambiarPrestado = function (estadoPrestado) {
            this.prestado = estadoPrestado;
        };


        this.mostrarInformacion = function () {
        return `

        Nombre del disco: ${this.nombre} "<br>"
        Grupo o cantante: ${this.grupo} "<br>"
        Año de publicación: ${this.anioPublicacion} "<br>"
        Tipo de música: ${this.tipoMusica} "<br>"
        Localización: ${this.localizacion} "<br>"
        Prestado: ${this.prestado ? "Sí" : "No"}
        `;

        };
    }

}


const miDisco1 = new Disco();
const miDisco2 = new Disco();
const miDisco3 = new Disco();
const miDisco4 = new Disco();

miDisco1.incluirInformacion('Thriller', 'Michael Jackson', '1982', 'Pop');
miDisco2.incluirInformacion('Parklife', 'Blur', '1994', 'Pop');
miDisco3.incluirInformacion('Forever changes', 'Love', '1967', 'Rock');
miDisco4.incluirInformacion('Ramones', 'Ramones', '1976', 'punk');

miDisco1.cambiarLocalizacion(5);
miDisco2.cambiarLocalizacion(2);
miDisco3.cambiarLocalizacion(8);
miDisco4.cambiarLocalizacion(1);

miDisco1.cambiarPrestado(true);
miDisco2.cambiarPrestado(false);
miDisco3.cambiarPrestado(true);
miDisco4.cambiarPrestado(false);

//console.log(miDisco1.mostrarInformacion());