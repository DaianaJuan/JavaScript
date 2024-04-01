console.log("EJEMPLO DE RECURSIVIDAD");
//Ejemplo de recursividad
//Vamos a crear una función que cuente desde un número hasta cero.

function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es
    // menor de 0 entonces salimos de la función
    if (numero < 0) { return }
  
    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)
  
    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
};

cuentaAtras(10);  //Llamamos a la función

/**
 * La ejecución la veríamos así:

cuentaAtras(3) -> (muestra 3)
               \ 
          cuentaAtras(2) -> (muestra 2)
                       \
                  cuentaAtras(1) -> (muestra 1)
                               \
                          cuentaAtras(0) -> (muestra 0)
                                        \
                                   cuentaAtras(-1) -> salida
 */

/**
 * El factorial de un número es el resultado de multiplicar ese número por todos los anteriores hasta llegar a 1. 
 * Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120
 */

console.log("FACTORIAL DE UN NÚMERO CON RECURSIVIDAD");

function factorial(n) {
    // Condición base: Si el número es 0 o 1, devolvemos 1
    // y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
      return 1
    } else {
      // Si el número es mayor que 1, llamamos a la función
      return n * factorial(n - 1)
    }
  }
  
  console.log(factorial(5)) // Resultado: 120
  console.log(factorial(3)) // Resultado: 6

/**
 * factorial(3) --------------------------> 6
        \ 
  3 * factorial(2) ---------------> 6
          \
    2 * factorial(1) -----------> 2
            \
      1 * factorial(0) -------> 1
*/

//EJERCICIO 1: Escribe una función que calcule la suma de los primeros n 
//números enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

console.log("Ejercicio 1");
function suma(n){
    if (n === 1) {
        return 1
    }else{
        return n + suma(n-1)
    }
}

console.log(suma(3));

//EJERCICIO 2: Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. 
//La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)

console.log("Ejercicio 2 - Fibonacci");

//algoritmo ppal
let num; // Definir la variable num fuera del bucle

do {
    num = prompt("Ingrese un número entero mayor a 0");
    if (num <= 0 || isNaN(num) || !Number.isInteger(parseFloat(num))) {
        alert("Error, ingrese un número válido");
    } else {
        alert("El número " + num + " ingresado es correcto");
    }
} while (num <= 0 || isNaN(num) || !Number.isInteger(parseFloat(num)));

for (let i = 0; i<=num; i++){
    console.log(fibo(i));
};

//function recursiva
function fibo(i){
    if (i===0 || i===1){
        return 1;
    }else{
        return fibo(i-2) + fibo(i-1);
    };
};



