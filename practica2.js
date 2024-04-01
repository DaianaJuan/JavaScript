console.warn("practica2.js");

//WHILE

//El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple 
//una determinada condición.

//Vamos a crear la cuenta atrás de un cohete. Creamos una variable cuentaAtras que contenga el número de segundos 
//que faltan para el lanzamiento. En este caso, vamos a empezar con 10 segundos.

let cuentaAtras = 10
//Para quitarle un segundo a la cuenta atrás, vamos a utilizar el operador de resta (-) y el operador de asignación (=).

cuentaAtras = cuentaAtras - 1
console.log(cuentaAtras) // -> 9
//Sabiendo esto y cómo funciona el bucle while, podemos crear la cuenta atrás del cohete.

// iniciamos la variable fuera del bucle

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')
//Si ejecutas este código en consola, deberías ver los números del 10 al 1, y después el mensaje de despegue.

//Saliendo de un bucle con break
//Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break. Cuando el intérprete de 
//JavaScript encuentra la palabra break, sale del bucle y continúa ejecutando el código que haya después.

let cuentaAtras1 = 10

while (cuentaAtras1 > 0) {
  console.log(cuentaAtras1)
  cuentaAtras1 = cuentaAtras1 - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras1 === 5) {
    break // <---- salimos del bucle
  }
}

//Saltando una iteración con continue
//Igual que tenemos la posibilidad de "romper" el bucle con break, también podemos saltarnos una iteración con continue. 
//Cuando el intérprete de JavaScript encuentra la palabra continue, salta a la siguiente iteración del bucle.
console.log("whilw y contine!!!");
let cuentaAtras2 = 10

while (cuentaAtras2 > 0) {
  cuentaAtras2 = cuentaAtras2 - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras2 % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras2)
};

/*¿Qué aparece en la salida de la consola? El bucle está haciendo una cuenta atrás... 
pero le hemos dicho que si el número es par, se salte esa iteración y deje de ejecutar el código que le sigue.

Por ello, los números pares no aparecen en la consola.*/ 

/*Anidación de bucles
Podemos anidar bucles dentro de otros bucles. Imagina que en nuestra cuenta atrás para el cohete, 
tenemos que revisar que 3 cosas están en sus parámetros: el oxígeno, el combustible y la temperatura.*/ 

console.log("Anidación de bucles");

const NUMERO_REVISIONES = 3
let cuentaAtras3 = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras3 > 0) {
  // mostramos el valor de la cuenta atrás
  console.log(cuentaAtras3)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0
  

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras3 = cuentaAtras3 - 1
};    

/*Las variables creadas con let y const que se crean dentro de un bucle, solo existen dentro de ese bucle. 
Cuando el bucle termina, la variable desaparece. De hecho si intentas acceder a ella fuera del bucle, 
te dará un error.*/

//EJERCICIOS DE EGG (estan basados en PseInt, amoldarlos a js)

