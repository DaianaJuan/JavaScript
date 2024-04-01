console.log("(1) indexOf--------------------------------------------------------------------------")

const emojis = ['✨', '🥑', '😍']

const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon) // -> 2

console.log("(2) includes---------------------------------------------------------------------------")

const nombres = ['Lau','Dai','Vero','Fer','Mari']

const tieneNombre = nombres.includes('Mari')
console.log(tieneNombre) // -> true

console.log("(3) some---------------------------------------------------------------------------------")

const numeros = [9, 38, 15, 43, 666, 101]

const tieneNumero = numeros.some(numero => numero === 666)
console.log(tieneNumero) // -> true

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
  return number > 5
})

console.log(tieneNumeroMayorA5) // -> true

console.log("(4) every---------------------------------------------------------------------------------")

// ¿Todos los emojis son felices?
const emojis1 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis1.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers1 = [2, 4, 7, 10, 12]
const todosSonPares = numbers1.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names1 = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names1.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

console.log("(5) find--------------------------------------------------------------------------------------")

const numbers2 = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers2.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10

console.log('Si no encuentra ningún elemento que cumpla con la condición, el método find retorna undefined')

const numbers3 = [13, 27, 44, 81]
// encuentra el primer número negativo
const firstNegativeNumber1 = numbers3.find(number => number < 0)

console.log(firstNegativeNumber1) // -> undefined

console.log('(6) findIndex-----------------------------------------------------------------------------------')

const numbers4 = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex2 = numbers4.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex2) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers4[firstNegativeNumberIndex2]) // -> -10

console.log('Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.')

const numbers0 = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers0.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> -1

console.log('EJERCICIO')

/**
 * Crear una función que reciba un array de palabras y devuelva true si todas las palabras 
 * terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".


   Usa el método endsWith() de string para resolverlo.
 */

const palabras = ['Fría', 'Flora', 'Lisa', 'Marea','Aguila']
function acabanEnA(palabras) {

  const todasTerminanConA = palabras.every(palabra => palabra.endsWith('a'))

  if(todasTerminanConA === true){
    return true;
  }else{
    return false;
  }
  
}

console.log(acabanEnA(palabras));