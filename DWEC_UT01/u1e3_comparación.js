//Creación de variables
var operacion1 = 10 == 10;
var operacion2 = 10 === 10;
var operacion3 = 10 === 10.0;
var operacion4 = "Laura" === "laura";
var operacion5 = "Laura" > "laura";
var operacion6 = "Laura" < "laura";
var operacion7 = "123" == 123;
var operacion8 = "123" === 123;
var operacion9 = parseInt("123") === 123;

alert("La operación 10 == 10 tiene como resultado:" + operacion1 + "\n" + //Devuelve un true ya que la comparación es correcta (10 es igual a 10)
    "La operación 10 === 10 tiene como resultado:" + operacion2 + "\n" + //Devuelve un true ya que la comparación es correcta (10 es igual a 10)
    "La operación 10 === 10.0 tiene como resultado:" + operacion3 + "\n" + //Devuelve un true ya que la comparación es correcta (10 es igual a 10.0)
    "La operación 'Laura' == 'laura' tiene como resultado:" + operacion4 + "\n" + //Devuelve un false ya que la comparación es incorrecta ("Laura" no es igual a "laura")
    "La operación 'Laura' > 'laura' tiene como resultado:" + operacion5 + "\n" + //Devuelve un false ya que la comparación es incorrecta ("Laura" no es mayor que "laura")
    "La operación 'Laura' < 'laura' tiene como resultado:" + operacion6 + "\n" + //Devuelve un true ya que la comparación es correcta ("Laura" es menor que "laura")
    "La operación '123' == 123 tiene como resultado:" + operacion7 + "\n" + //Devuelve un true ya que la comparación es correcta ("123" es igual a 123)
    "La operación '123' === 123 tiene como resultado:" + operacion8 + "\n" + //Devuelve un false ya que la comparación es incorrecta ("123" no es 'exactamente' igual a 123)
    "La operación parseInt('123') === 123 tiene como resultado:" + operacion9); //Devuelve un true ya que la comparación es correcta ("123" parseado es igual a 123)