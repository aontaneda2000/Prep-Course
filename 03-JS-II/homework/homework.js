// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  //estudiar
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y ) {
    return x;
  }else if(y > x){
    return y;
  }
  else {
    return x || y;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    return "Allowed";
  }else{
    return "Not allowed";

  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1) {
    return "Online";
 }
  if (status === 2) {
    return "Away";
    
  } else {
    return "Offline";
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === "aleman") {
    return "Guten Tag!";
  }
  else if (idioma === "mandarin") {
    return "Ni Hao!";
  }
  else if (idioma === "ingles") {
    return "Hello!";
  }else{
    return "Hola!";
  }


}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  if (color === "blue") {
    return "This is blue";
  }
  else if(color === "red"){
    return "This is red";
  }
  else if(color === "green"){
    return "This is green";
  }
  else if(color === "orange"){
    return "This is orange";
  }else{
    return "Color not found";
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5 ) {
    return true;
  }else{
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  }else{
    return false;
  }
}

function esEntero(numero) {
  //estudiar
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código (check):
  //hacer cuenta que en la función ya mandan un valor por ejp: 5.5 , cuando va a evaluar la condición compara si 5 es igual 5 si es verdad retorna true y si es mentira retorna false.
  if (numero === Math.floor(numero)) {
    return true;
  }else{
    return false;
  }
}

function fizzBuzz(numero) {
  //estudiar ==================
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
 
  //9 / 3 = 3*3 = 9 -> 0
  if(numero % 3 === 0 && numero % 5 === 0){
    return "fizzbuzz";
  }
  else if (numero % 3 === 0) {

    return "fizz";
  }else if(numero % 5 === 0){
    return "buzz";
  
  }else{
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  
if(num1 === 0 || num2 ===0 || num3===0){
    return "Error";
  }else if(num1 < 0 || num2 < 0 || num3 < 0){
    return "Hay negativos";
  
  }
  else if(num1 > num2 && num1 > num3 && num1 > 0){
    return "Número 1 es mayor y positivo";

  }else if(num3>num1 && num3 > num2){
    return num3+1;
  }else{
    return false;
  }
  



}
//var numero = 4;
function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
        
  if(numero ===2){
    return true;
  }else if(numero < 2){
    return false;
  }

  for(var i = 2; i<numero; i++){
    if(numero % i === 0 ){
      return false;
    }
  }
  return true;



}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor===true){
    return "Soy verdadero";
  }else if(valor===false){
    return "Soy falso";
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  //array vacio en el que se irá almacenando las operaciones del ciclo for.
  var array = [];

//variable "i" incrementará en 1 hasta que la condición sea false y posteriormente será multiplicada por 6.

  for(let i = 0; i<11; i++){
       array.push(6 * i) //método push permite introducir los resultados de la operación en el arreglo que se desea.
  }

  return array; //devuelve los resultados de las operaciones
  
}
                            
function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  //Ala variable (número) se convertirá a "texto" con el método toString(), y luego se mide la "longitud" con .length y luego se compara si la longitud es "igual" a 3 dará true.
  //.length devuelve la longitud o caracteres de un texto.
  if (numero.toString().length === 3) {
    return true;
  }else{
    return false;

  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  

  //condición a evaluar: contador tiene que ser ("false" osea "0") para que deje de ejecutarse el bucle.

  //ciclo: La variable "resultado" incrementará hasta un límite de 8 veces que será contabilizado con una variable inicializada en 8. 

  //mientras la variable resultado incrementará de 5 en 5.
  //y la variable contador decrementará hasta valer "0".

  var contador = 8;
  //asignación de otra variable con el mismo valor recibido por parametro "5". ("var numero = 5;");
  //despues de asignarle un valor a una variable se puede asignar el mismo valor a otra.
  var resultado = numero; //

  do {
      resultado += 5;
      contador -= 1;

//cuando variable contador decremente hasta 0. evalua la condición y si es diferente sale del ciclo y devuelve el valor que incremento.
  } while (contador!==0);


return resultado;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
