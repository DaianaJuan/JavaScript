function saludar(nombre) {
    console.log("Hola " + nombre)
};

saludar('Miguel'); // -> Hola Miguel
saludar('Itziar'); // -> Hola Itziar
saludar('Carmen'); // -> Hola Carmen

/**Las funciones son la base de la programación y nos permiten crear programas complejos a partir de pequeñas piezas. */

/**Por ejemplo, para crear una calculadora, deberíamos empezar a crear funciones que realicen las operaciones básicas. 
* En este caso necesitaremos parametrizar la función para que acepte los dos números para hacer la operación. */
console.log("CALCULADORA");
function sumar(a, b) {
    return a + b
};
  
function restar(a, b) {
    return a - b
};

//Y ya podríamos usarlas:

const resultadoSuma = sumar(2, 3)
console.log(resultadoSuma) // -> 5

const resultadoResta = restar(5, 2)
console.log(resultadoResta) // -> 3


console.log("PARAMETROS Y ARGUMENTOS");
/**Parámetros y argumentos
En el ejemplo anterior, hemos visto que podemos pasarle valores a la función cuando la llamamos. A estos 
valores se les llama argumentos. Y a los valores que recibe la función, se les llama parámetros. */

// la función suma tiene dos parámetros: a y b
function sumar2(a, b) {
    return a + b
  }
  
// cuando llamamos a la función, le pasamos dos argumentos: 2 y 3
const resultadoSuma2 = sumar2(2, 3);
console.log(resultadoSuma2); // -> 5

console.log("Orden en los parámetros!!!!!!!!");

/**Vamos a crear una función que simule un microondas. Le pasaremos el plato, tiempo y potencia. Y nos 
 * devolverá el resultado del plato cocinado. */

function cocinarMicroondas(plato, tiempo, potencia) {
    if (plato === '🐥' && tiempo === 1 && potencia === 5) {
      return '🍗'
    }
  
    if (plato === '🥚' && tiempo === 2 && potencia === 3) {
      return '🍳'
    }
  
    return '❌ Plato no soportado'
};

/**Sí, puedes hacer un return dentro de un condicional. Esto hace que la función se detenga y devuelva el valor 
 * indicado en el return. */

//Si usamos bien los parámetros, la función funciona correctamente:

const resultado = cocinarMicroondas('🐥', 1, 5);
console.log(resultado); // -> 🍗

//Pero si cambiamos el orden de los parámetros, la función no funciona:

const resultado2 = cocinarMicroondas(1, 5, '🐥');
console.log(resultado2); // -> '❌ Plato no soportado'

/**Esto es porque la función espera que el primer parámetro sea el plato, el segundo el tiempo y el tercero la 
 * potencia. Si cambiamos el orden, podemos tener comportamientos inesperados o errores. */


//function expression --------------------------------------------------------------------------------------------------

console.log("FUNCTION EXPRESSION");

// esto es una function expression
const sum = function (a, b) {
    return a + b
};
  
// esto es una declaración de función
/*function sum(a, b) {
    return a + b
};*/

sum(1, 2); // 3
console.log(sum(1, 2)); // 3

//Hoisting
console.log("HOISTING");

sum1(5, 2) // 3

function sum1(a, b) {
  return a + b
}

console.log(sum1(5,2));
