//longitud  de un array

const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log("Longitud de una array con .length");
console.log(frutas.length) // 4

//cortar su longitud

const frutas2 = ["manzana", "pera", "plátano", "fresa"]
frutas2.length = 2

console.log(frutas2) // ["manzana", "pera"]
console.log(frutas2.length) // 2

console.log("METODOS");
console.log(".push() nos permite añadir un elemento al final de un array");

const frutas3 = ["plátano", "fresa"]
frutas3.push("naranja")
console.log(frutas3) // ["plátano", "fresa", "naranja"]

console.log(".pop() elimina y devuelve el último elemento de un array");

const frutas4 = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas4.pop()

console.log(frutas4) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"

console.log(".shift() elimina y devuelve el primer elemento de un array");

const frutas5 = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas5.shift()

console.log(frutas5) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"

console.log('.unshift() añade un elemento al principio de un array');

const frutas6 = ["plátano", "fresa", "naranja"]
frutas6.unshift("manzana")

console.log(frutas6) // ["manzana", "plátano", "fresa", "naranja"]

console.log("Podemos concatenar dos arrays usando el método concat().");

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers) // [1, 2, 3, 4, 5]

console.log(' usando el operador ... (spread operator)');

const numbers3 = [1, 2, 3]
const numbers4 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers1 = [...numbers3, ...numbers4]

console.log(allNumbers1) // [1, 2, 3, 4, 5]

/**
 * En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que
 *  recibe un pedido, que es un array de platos. Lo que debemos hacer es:

-El primer elemento lo sacamos del array, ya que es el nombre del cliente.
-Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
-Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado:

function procesarPedido(pedidos) {
  // tu código aquí
}
 */

function procesarPedido(pedidos){

    const nombreCliente = pedidos.shift();
    pedidos.unshift("bebida");
    pedidos.push(nombreCliente);
    return pedidos;

}