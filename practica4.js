function saludar() {
    console.log('Hola Daiana')
};

saludar();

//DEVOLVIENDO UN RESULTADO
function sumar() {
    return 1 + 1
};

// podemos guardar el resultado en una variable
const resultado = sumar()

// o ver en consola directamente el resultado
console.log(sumar()) // -> 2


//IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//función que nos devuelva un número aleatorio del 1 al 10:
function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318
  
    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318
  
    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6
  
    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7
  
    // devolvemos el resultado
    return result
}

console.log(getRandomNumber()); // -> cualquier número entre 1 y 10