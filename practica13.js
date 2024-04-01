console.log("filter-----------------------------------------------")

const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})

console.log(evenNumbers); // [2, 4, 6]
//-------------------------------------------------------------------

console.log("SEGUNDO EJEMPLO DE .filter----------------------------") 

//--------------------------------------------------------------------------------------

const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato'];

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'));

console.log(stringsWithA); // ['hola', 'adiós', 'casa', 'gato']

//----------------------------------------------------------------------------------

console.log("map--------------------------------------------------")

const numeros = [4, 5, 15]

const dobleNumeros = numeros.map((number) => {
  return number * 2
})

console.log(dobleNumeros)

//----------------------------------------------------------------------------------

console.log("SEGUNDO EJEMPLO DE .map--------------------------------------------")

const cadenas = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = cadenas.map((cadena) => cadena.length)

console.log(stringsLength) // [4, 10, 4, 12]

//----------------------------------------------------------------------------------

console.log("map + filter----------------------------------------------------------")

const numbers1 = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers1
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]

//---------------------------------------------------------------------------------

console.log("SEGUNDO EJEMPLO DE map + filter-------------------------------------")

const numbers2 = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numbers2
  .filter(number => number % 2 === 0) // [2, 4, 6]
  .map(number => number * 2) // [4, 8, 12]

console.log(doubleEvenNumbers) // [4, 8, 12]

//----------------------------------------------------------------------------------

console.log("reduce--------------------------------------------------------------")

const numbers3 = [1, 2, 3]

const sum = numbers3.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6

//----------------------------------------------------------------------------------

console.log("EJEMPLO USANDO map Y filter-------------------------------------------")

const numbers4 = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers1 = numbers4.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // si no, devolvemos lo que ya teníamos
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers1) // [8, 12]

//-----------------------------------------------------------------------------------

console.log("EJERCICIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

/**
 * Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca 
 * el índice de la palabra en la lista. Después, usa ese índice (que será un número) y devuelve 
 * todas las palabras de words que sean más largas (length) que el número del índice.


Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario 
comprobar si existe o no.
*/

const words = ["Caro","Pablo","Leo","Santi","Dai"]

function buscaPalabras(words, word) {
    const indice = words.indexOf(word);
    if (indice === -1) {
        return [];
    }
    const palabrasMasLargas = words.filter(palabra => palabra.length > indice);
    
    return palabrasMasLargas;
}



