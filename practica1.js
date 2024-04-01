console.log("Hola Mundo");

console.error("Error en la consola");
console.info("Informacion en la consola");
console.warn("Advertencia en la consola");

//IF
console.info("IF");

let edad = 18;

if (edad >= 18){
    console.log("Eres mayor de edad");
};

//ELSE
console.info("ELSE");

let edad2 = 17;

if (edad2 >= 18){
    console.log( "Eres mayor de edad" );
}else{
    console.log( "No eres mayor de edad" );
};

//ELSE IF
console.info("ELSE IF");

let edad3 = 17;

if (edad3 >= 18) {
    console.log('Eres mayor de edad')
} else if (edad3 >= 16) {
    console.log('Eres casi mayor de edad')
} else {
    console.log('Eres menor de edad')
};

//Anidación de condicionales

const edad4 = 17
const tieneCarnet = true

if (edad4 >= 18) {
  if (tieneCarnet) {
    console.log('Puedes conducir')
  } else {
    console.log('No puedes conducir')
  }
} else {
  console.log('No puedes conducir')
};

/*En muchas ocasiones vas a querer evitar la anidación innecesaria de condicionales ya que se hacen difíciles
de leer y mantener. En estos casos es mejor utilizar operadores lógicos para crear la condición:*/

const edad5 = 17
const tieneCarnet5 = true

// si es mayor de edad y tiene carnet entonces...
if (edad5 >= 18 && tieneCarnet5) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
};

//Otra técnica muy interesante es la de guardar el resultado de la condición en una variable, 
//para que tus condiciones sean mucho más legibles:

const edad9 = 26
const tieneCarnet9 = true
const puedeConducir = (edad9 >= 18) && (tieneCarnet9 === true)

if (puedeConducir) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
};


//EJERCICIOS DE EGG (estan basados en PseInt, amoldarlos a js)

/**
 * 1. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de 
una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que para 
calcular el área y el perímetro se utilizan las siguientes fórmulas: 
area = PI * radio2
perimetro = 2 * PI * radio
2. 
 */

console.log("Ejercicio 1 EGG");

const PI = Math.PI
console.log(PI)
let radio = 4; //pedir al usuario

let area = PI * (radio * radio);

let perimetro = 2 * PI * radio;

console.log("El área de la circunferencia es: "+ area);
console.log("El perimetro de la circunferencia es: "+ perimetro);

/**
 * 2. Escribir un programa que calcule el precio promedio de un producto. El precio promedio se 
debe calcular a partir del precio del mismo producto en tres establecimientos distintos. 
 */

console.log("Ejercicio 2 EGG");

let precio1 = 10.300
let precio2 = 9.999
let precio3 = 11.000

let promedio = (precio1 + precio2 + precio3)/3
console.log("El precio promedio del producto es: $"+promedio);

/**
 * 3. A partir de una conocida cantidad de metros que el usuario ingresa a través del teclado se 
debe obtener su equivalente en centímetros, en milímetros y en pulgadas. 
Ayuda: 1 pulgada equivale a 2.54 centímetros.
 */
console.log("Ejercicio 3 EGG")

let metros = 15;

if(metros){
    let centimetros = metros * 100;
    let milimetros = metros * 1000;
    let pulgadas = metros * 39.3701;

    console.log(metros + " metros equivale a:");
    console.log("Centímetros: " + centimetros + " cm");
    console.log("Milímetros: " + milimetros + " mm");
    console.log("Pulgadas: " + pulgadas + " in");
}


/**
 * 4. Escribir un programa que calcule cuántos litros de combustible consumió un automóvil. El 
usuario ingresará una cantidad de litros de combustible cargados en la estación y una 
cantidad de kilómetros recorridos, después, el programa calculará el consumo (km/lt) y se lo 
mostrará al usuario.
 */
console.log("Ejercicio 4 EGG")
let litros = 5
let km = 8
let resultado = km/litros

console.log("El consumo es de: "+ resultado);

/**
 * 5. Escriba un programa que permita al usuario ingresar el valor de dos variables numéricas de 
tipo entero. Posteriormente, el programa debe intercambiar los valores de ambas variables y 
mostrar el resultado final por pantalla. 
Por ejemplo, si el usuario ingresa los valores num1 = 9 y num2 = 3, la salida a del programa 
deberá mostrar: num1 = 3 y num2 = 9
Ayuda: Para intercambiar los valores de dos variables se debe utilizar una variable auxiliar.
 */

console.log("Ejercicio 5 EGG")

let num1 = 20
let num2 = 15
let numx = 0

console.log("Los números ingresados en orden son: "+ num1 +"-"+num2);

numx = num1
num1 = num2
num2 = numx

console.log("El orden queda: "+ num1 +"-"+ num2);

//EJERCICIOS DE APRENDIZAJE EXTRA

/**
 * 1. Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso 
actual. Diseñar un algoritmo para este propósito. Recuerda que para calcular el porcentaje 
puedes hacer una regla de 3 simple. El programa debe solicitar al usuario que ingrese la 
cantidad total de niños, y la cantidad total de niñas que hay en el curso. 
 */
console.log("Ejercicio 1 EGG EXTRA")
let niños = 12;
let niñas = 9;

let total = niños + niñas;

let porcentajeNiños = niños * 100 / total;
let porcentajeNiñas = niñas * 100 / total;

console.log("El porcentaje de niños es: "+ porcentajeNiños + "%");
console.log("El porcentaje de niñas es: "+ porcentajeNiñas + "%");

/**
 * 2. Solicitar al usuario que ingrese la base y altura de un rectángulo, y calcular y mostrar por 
pantalla el área y perímetro del mismo
area = base * altura
perimetro = 2 * altura + 2 * base.
 */
console.log("Ejercicio 2 EGG EXTRA")
let base = 5;
let altura = 2;

let area2 = base * altura;
let perimetro2 = (2 * altura) + (2 * base);

console.log("El área del rectangulo es: "+ area2);
console.log("El perímetro del rectangulo es: "+ perimetro2);

/**
 * 3. Escribir un programa que calcule el volumen de un cilindro. Para ello se deberá solicitar al 
usuario que ingrese el radio y la altura. Mostrar el resultado por pantalla. 
volumen = π * radio2 * altura 
 */
console.log("Ejercicio 3 EGG EXTRA")
let radio3 = 5;
let altura3 = 10;

let volumen = Math.PI * (radio3 * radio3) * altura3
console.log("El volumen del cilindro es: "+ volumen)

/**
 * 4. A partir de una conocida cantidad de días que el usuario ingresa a través del teclado, escriba 
un programa para convertir los días en horas, en minutos y en segundos. Por ejemplo
1 día = 24 horas = 1440 minutos = 86400 segundos
 */
console.log("Ejercicio 4 EXTRA");

let dias = 1;

if(dias){
  let horas = dias * 24;
  let minutos = dias * 1440;
  let segundos = dias * 86400;

  console.log(dias + " dia/s equivale a:");
  console.log("Horas: " + horas);
  console.log("Minutos: " + minutos);
  console.log("Segundos: " + segundos);
};

/**
 * 5. Crear un programa que solicite al usuario que ingrese el precio de un producto al inicio del 
año, y el precio del mismo producto al finalizar el año. El programa debe calcular cuál fue el 
porcentaje de aumento que tuvo ese producto en el año y mostrarlo por pantalla. 
 */
console.log("Ejercicio 5 EXTRA")
let precioI = 1500
let precioF = 2000

let aumento = ((precioF - precioI)/precioI)*100

console.log("El porcentaje de aumento es de: "+ aumento + " %");
