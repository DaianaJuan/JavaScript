//Condición Simple

/**
 * 1. Un hombre desea saber si su sueldo es mayor al sueldo mínimo, el programa le pedirá al 
usuario su sueldo actual y el sueldo mínimo. Si el sueldo es mayor al mínimo se debe 
mostrar un mensaje por pantalla indicándolo.
 */
console.log("EJERCICIO 1")

let sueldoActual = 150000
let sueldoMin = 700000

if(sueldoActual > sueldoMin){
    console.log("Su sueldo actual ($" + sueldoActual + ") es mayor al sueldo mínimo ($" + sueldoMin)
}else{
    console.log("Su sueldo actual ($" + sueldoActual + ") es menor al sueldo mínimo ($" + sueldoMin)
};

//Condicional Doble
/**
 * 2. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario 
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla que 
diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
 */
console.log("EJERCICIO 2")

let letra = 'S'

if(letra === 'S' || letra === 'N'){
    console.log("CORRECTO")
}else{
    console.log("INCORRECTO")
}

/**
 * 3. Realizar un programa que pida un número y determine si ese número es par o impar. 
Mostrar en pantalla un mensaje que indique si el número es par o impar. (para que un 
número sea par, se debe dividir entre dos y su resto debe ser igual a 0).
 */
console.log("EJERCICIO 3")

let num = 3

if(num % 2 === 0){
    console.log("El numero "+num+" es par")
}else{
    console.log("El numero "+num+" es impar")
}

/**
 * 4. Realizar un programa que pida introducir solo frases o palabras de 6 caracteres. Si el 
usuario ingresa una frase o palabra de 6 caracteres se deberá de imprimir un mensaje por 
pantalla que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. 
Nota: investigar la función Longitud() de PseInt.
 */
console.log("EJERCICIO 4")

let palabra = "Batman"

if(palabra.length === 6){
    console.log("CORRECTO")
}else{
    console.log("INCORRECTO")
}

/**
 * 5. Realizar un programa que pida una frase o palabra y si la frase o palabra es de 4 
caracteres de largo, el programa le concatenara un signo de exclamación al final, y si no 
es de 4 caracteres el programa le concatenara un signo de interrogación al final. El 
programa mostrará después la frase final. Nota: investigar la función Longitud() y 
Concatenar() de PseInt.
 */
console.log("EJERCICIO 5")

let pal = "Sherlock"

if(pal.length === 4){
    console.log(pal.concat("!"))
}else{
    console.log(pal.concat("?"))
}

/**
 * 6. Escriba un programa que pida 3 notas y valide si esas notas están entre 1 y 10. Si están 
entre esos parámetros se debe poner en verdadero una variable de tipo lógico y si no 
ponerla en falso. Al final el programa debe decir si las 3 notas son correctas usando la 
variable de tipo lógico.
 */
console.log("EJERCICIO 6")

let nota1 = 8
let nota2 = 2
let nota3 = 7

if((nota1 > 0 & nota1 < 11) & (nota2 > 0 & nota2 < 11) & (nota3 > 0 & nota3 < 11)){
    resultado = true;
    console.log(resultado)
}else{
    resultado = false;
    console.log(resultado)
};

/**
 * 7. Escriba un programa que pida una frase o palabra y valide si la primera letra de esa frase 
es una ‘A’. Si la primera letra es una ‘A’, se deberá de imprimir un mensaje por pantalla 
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. Nota: 
investigar la función Subcadena de PseInt.
 */
console.log("EJERCICIO 7")

let frase = "Africa"

if (frase.charAt(0) === 'A' || frase.charAt(0) === 'a') {
    console.log("CORRECTO");
} else {
    console.log("INCORRECTO");
}

/**
 * 8. Continuando el ejercicio anterior, ahora se pedirá una frase o palabra y se validara si la 
primera letra de la frase es igual a la última letra de la frase. Se deberá de imprimir un 
mensaje por pantalla que diga “CORRECTO”, en caso contrario, se deberá imprimir 
“INCORRECTO”. 
 */
console.log("EJERCICIO 8")

let frasse = "El tomate perita es altamente superior al resto de los tomates";

let primeraLetra = frasse.charAt(0);
let ultimaLetra = frasse.charAt(frasse.length - 1); // Obtener la última letra

if (primeraLetra.toLowerCase() === ultimaLetra.toLowerCase()) {
    console.log("CORRECTO");
} else {
    console.log("INCORRECTO");
}

// charAt(0) para obtener la primera letra de la frase y charAt(frase.length - 1) 
//para obtener la última letra. Luego, comparamos estas dos letras utilizando toLowerCase() 
//para asegurarnos de que las comparaciones sean insensibles a mayúsculas y minúsculas.

//Condicional Múltiple

/**
 * 9. Construir un programa que simule un menú de opciones para realizar las cuatro 
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
numéricos enteros. El usuario, además, debe especificar la operación con el primer 
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.
 */

//Condicionales Anidados

/**
 * 10. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. 
Nota: investigar la función mod de PSeInt
 */

/**
 * 11. Escriba un programa para obtener el grado de eficiencia de un operario de una fábrica de 
tornillos, de acuerdo a las siguientes dos condiciones que se le imponen para un período 
de prueba:
• Producir menos de 200 tornillos defectuosos.
• Producir más de 10000 tornillos sin defectos.
• El grado de eficiencia se determina de la siguiente manera:
• Si no cumple ninguna de las condiciones, grado 5.
• Si sólo cumple la primera condición, grado 6.
• Si sólo cumple la segunda condición, grado 7.
• Si cumple las dos condiciones, grado 8
Nota: para trabajar este ejercicio de manera prolija, ir probando cada inciso que pide el 
ejercicio. No hacer todos al mismo tiempo y después probar.
p¿Lograste los objetivos de la guía?p
¡Terminamos los ejercicios fundamentales de esta guía! Te invitamos a ir a 
tu aula virtual y contestar una breve encuesta para revisar los objetivos 
de la esta guía, reflexiona sobre cada uno de ellos haciéndote la siguiente 
pregunta ¿Pude aplicar este objetivo al realizar los ejercicios? Si es así, 
¡Excelente! 
¿Terminaste con los ejercicios fundamentales? hay más ejercicios para que 
puedas seguir practicando.
p¿No pudiste cumplir los objetivos de la guía?p
Si aún no has logrado tildar los objetivos propuestos, no te preocupes, a 
través de Slack contacta a un Coach para que te ayude a diseñar una 
estrategia personalizada para entender qué pasó y poder avanzar.
PEJERCICIOS DE APRENDIZAJE 
 */

//EJERCICIOS DE APRENDIZAJE EXTRAP

//Condicional Doble

/**
 * 1. Realizar un programa que pida tres notas y determine si un alumno aprueba o reprueba un 
curso, sabiendo que aprobará el curso si su promedio de tres calificaciones es mayor o 
igual a 70; y reprueba en caso contrario. 
 */

/**
 * 2. Una tienda ofrece para los meses de septiembre, octubre y noviembre un descuento del 
10% sobre el total de la compra que realiza un cliente. Solicitar al usuario que ingrese un 
mes y el importe de la compra. El programa debe calcular cuál es el monto total que se 
debe cobrar al cliente e imprimirlo por pantalla. 
 */

/**
 * 3. Solicitar al usuario que ingrese dos números enteros y determinar si ambos son pares o 
impares. Mostrar en pantalla un mensaje que indique “Ambos números son pares” siempre 
y cuando cumplan con la condición. En caso contrario se deberá imprimir el siguiente 
mensaje “Los números no son pares, o uno de ellos no es par”.
 */

/**
 * 4. La empresa “Te llevo a todos lados” está destinada al alquiler de autos y tiene un sistema 
de tarifa que consiste en cobrar el alquiler por hora. Si el cliente devuelve el auto dentro 
de las 2 horas de uso el valor que corresponde pagar es de $400 pesos y la nafta va de 
regalo. Cuando el cliente regresa a la empresa pasadas las 2 horas, se ingresan la 
cantidad de litros de nafta gastados y el tiempo transcurrido en horas. Luego, se le cobra 
40 pesos por litro de nafta gastado, y la hora se fracciona en minutos, cobrando un total 
de $5,20 el minuto de uso. Realice un programa que permita registrar esa información y el 
total a pagar por el cliente.
 */

//Condicional Múltiple

/**
 * 5. Solicitar al usuario que ingrese un valor entre 1 y 7. EL programa debe mostrar por pantalla 
un mensaje que indique a qué día de la semana corresponde. Considere que el número 1 
corresponde al día “Lunes”, y así sucesivamente.
 */

/**
 * 6. Leer tres números que denoten una fecha (día, mes, año) y comprobar que sea una fecha 
válida. Si la fecha no es válida escribir un mensaje de error por pantalla. Si la fecha es 
válida se debe imprimir la fecha cambiando el número que representa el mes por su 
nombre. Por ejemplo: si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”.
 */

/**
 * 7. Hacer un algoritmo que lea un número por el teclado y determine si tiene tres dígitos.
 */

//Condicionales Anidados

/**
 * 8. Si se compran menos de cinco llantas el precio es de $3000 cada una, si se compran 
entre 5 y 10 el precio es de $2500, y si se compran más de 10 el precio es $2000. 
Obtener la cantidad de dinero que una persona tiene que pagar por cada una de las 
llantas que compra, y el monto total que tiene que pagar por el total de la compra.
 */

/**
 * 9. Realice un programa que, dado un año, nos diga si es bisiesto o no. Un año es bisiesto 
bajo las siguientes condiciones: Un año divisible por 4 es bisiesto y no debe ser divisible 
por 100. Si un año es divisible por 100 y además es divisible por 400, también resulta 
bisiesto. Nota: recuerde la función mod de PseInt
 */