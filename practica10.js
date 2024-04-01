//alert("Iteración de Arrays");

console.log("while!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

let frutas = ['Uva','Manzana','Banana','Durazno' ];
let i = 0;

while(i < frutas.length){
    console.log(frutas[i]);
    i++;
}

console.log("Bucle for!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

let mascotas = ['Gato','Perro','Cuyi','Caballo' ];

for (let i = 0; i < mascotas.length ; i++){
    console.log(mascotas[i]);
}

console.log("En orden inverso con i--");

for (let i = mascotas.length - 1 ; i >= 0; i--){
    console.log(mascotas[i])
}

console.log("Bucle for...of!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

let colores = ['Rojo','Azul','Negro','Naranja' ];

for ( let color of colores) {
    console.log(color);
}

console.log("El método array.forEach()!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

let flores =  [ 'Rosa', 'Tulipán', 'Flor de Mayo'];


flores.forEach(function(flor,index,originalArray){
    console.log(flor);
}); //el parentesis cierra al final

console.log('Usando una arrow function');

let citricos =  ['Limón', 'Naranja', 'Mandarina', 'Lima'];

citricos.forEach((citrico) => {
    console.log(citrico);
});

/**
 * EJERCICIO:
 * Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números 
 * pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, 
 * si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.
 */
console.log("EJERCICIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
let numeros =  [1,2,3,4,5,6,7,8,9,10];
function sumarPares(numeros) {
    
    let suma = 0
    for (let i = 0;  i < numeros.length; i++) {

        if (numeros [i] % 2 == 0 ) {
            console.log("El número "+ numeros[i] + " es par");
            suma = suma + numeros[i];
        } else{
            console.log("El número "+ numeros[i]+" es impar");
        };
   
  }
  return suma

};

console.log("El resultado de la suma de los nùmeros pares es: "+sumarPares(numeros));