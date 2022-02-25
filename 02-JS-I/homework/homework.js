// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1.05;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return str; 
}
devolverString('F');

function sumar(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sumat = x + y ;

  return sumat;//retorna con variable
}
sumar(1,5); //resultados

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restat = x - y;
 return restat; 
}
resta(3,2);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var producto = x * y;
  return producto;
}
multiplica(4,5);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var dividido = x / y;
  return dividido; //3
}
divide(6,2);


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if(x === y)
  {
    return true;//verdadero
    }
    return false;//falso
}
sonIguales(4,4);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  const nom1str = 'Perro';
  const nom2str = 'Rompo';

  var str1 = nom1str, str2 = nom2str;
  
  if(str1 = str2)
  {
     return true;
  }
  
      return false;
}
tienenMismaLongitud('perro','Rompo');

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if(num<=90)
  {
    return true;
  }
   return false;
  
}
menosQueNoventa(50);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>= 50)
  {
    return true;
  }
  return false;
}
mayorQueCincuenta(20);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
var residuo = x % y;
return residuo;  
}
obtenerResto(4,5);//residual

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
 if(num %2 == 0)
 {
   return true;
 }
  return false;
}
esPar(3);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
   
 if(num %3 == 0)
 {
   return true;
 }
  return false;
}
esImpar(3);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var powersquare = Math.pow(num,2);
  return powersquare;
}
elevarAlCuadrado(6);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
   var powerthird = Math.pow(num,3);
  return powerthird;
}
elevarAlCubo(7);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var powern = Math.pow(num,exponent);
  return powern;
  
}
elevar(8);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondo = Math.round(num);
  return redondo;

}
redondearNumero(3.141513);//3

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redonArrib = Math.floor(num);
  return redonArrib;
}
redondearHaciaArriba(5.9);//6

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var aleatorio = Math.random();
  return aleatorio;
}
numeroRandom(3);

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
  if(numero >= 0)
  {
    
    return "Es positivo";
  }
    
    return "Es negativo";
  
}
esPositivo(5)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
 return "Hello World" + str;
}
agregarSimboloExclamacion('!');

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  console.log(nombre + apellido);

}
   combinarNombres('Marco Antonio ', 'Banda');

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
   console.log('Hola '+ nombre);
   
}
obtenerSaludo('Marco');

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
  var rect;
  rect = alto * ancho;
  return rect;

}
obtenerAreaRectangulo(14,25);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var peri;
  peri = lado * 4;
return peri;
}
retornarPerimetro(25);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var tria, triangulo;
  tria = base * altura;
  triangulo = tria / 2 ;
  return triangulo;
}
areaDelTriangulo(7,4);


function deEuroAdolar(dolar){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var dolar;
  euro =  1.20 * dolar;
  return euro;
}
deEuroAdolar(5)


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
  if(letra.lenght !==1)
  {
    return "Dato Incorrecto";
  }
    if( letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u')
    {
      return "dato es correcto";
    }
}
esVocal('e');



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
