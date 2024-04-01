let numeros = [5, 10, 2, 25, 7]

numeros.sort(function(a, b) {
  return a - b
})

console.log(numeros) // [2, 5, 7, 10, 25]

let numeros0 = [5, 10, 2, 25, 7]

numeros.sort(function(a, b) {
  return b - a
})

console.log(numeros) // [25, 10, 7, 5, 2]

let numeros1 = [5, 10, 2, 25, 7]

let numerosOrdenados = numeros.toSorted((a, b) => {
  return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros1) // [5, 10, 2, 25, 7]

let numeros2 = [5, 10, 2, 25, 7]

const copiaNumeros = [...numeros]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeros2) // [5, 10, 2, 25, 7]

console.log('EJERCICIO--------------------------------------------------------------------')

/**
 * Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto. 
 * Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.


Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].


Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
*/

let numeros3 = [-152, 33, -55, 78, 4, 12, -9, 60, -46]

function sortAbsoluteNumbers(numeros3) {
    // Se crea una copia del arreglo para no modificar el original
    let numerosEnOrden = numeros3.slice();
    
    // Se utiliza la función Math.abs para obtener el valor absoluto de cada número
    numerosEnOrden.sort((a, b) => Math.abs(a) - Math.abs(b));
    
    // Se devuelve el arreglo ordenado
    return numerosEnOrden;
}

console.log(sortAbsoluteNumbers(numeros3)) 

/**
 * Se utilizó Math.abs() para obtener el valor absoluto de cada número.
Se corrigió el método de ordenamiento con sort().
Se añadió return para devolver el arreglo ordenado.
Se utilizó slice() para crear una copia del arreglo original y evitar modificarlo directamente.
 */