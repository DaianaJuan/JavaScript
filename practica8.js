console.log("Arrayas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

let numeros = [1, 2, 3, 4, 5];
const nombres = ['Silvia','Lara','Juan','Pablo','Ana','Marcos','Sofía'];
console.log(numeros);
console.log(nombres);

//Acceso a los elementos de un array

console.log("Imprime el indice 2 del array numeros");
console.log(numeros[2]); 
console.log("Imprime el indice 4 del array nombres");
console.log(nombres[4]); 

//Puedes usar variables para acceder a los elementos de un array.

console.log("Variables para acceder al elemento del array")
const numbers = [1, 2, 3, 4, 5]
let index = 2

console.log(numbers[index]) // 3

//Modificar elementos de un array
console.log("Imprimo array original");

const num = [1, 2, 3, 4, 5]
console.log(num);

num[0] = 10
num[2] = 30
console.log("Lo modifico e imprimo");
console.log(num) // [10, 2, 30, 4, 5]