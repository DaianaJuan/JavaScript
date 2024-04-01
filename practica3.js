console.log("practica3.js");

//confirm
//La función confirm muestra un cuadro de diálogo con dos botones: "Aceptar" y "Cancelar". Si el usuario pulsa 
//"Aceptar", la función devuelve true. Si pulsa "Cancelar", devuelve false.

//confirm("¿Te gusta JavaScript?");

//Llamar a la función confirm es una expresión y, por lo tanto, produce un valor que podemos guardar en una variable.

//let respuesta1 = confirm("¿Te gusta JavaScript?")
//console.log(respuesta) // -> true o false

//Usando do while
/*Vamos a hacer un programa que saldrá de un bucle do while cuando el usuario pulse "Cancelar" en el cuadro 
de diálogo que muestra la función confirm.*/

let respuesta

do {
  respuesta = confirm("¿Te gusta JavaScript?");
} while (respuesta)

/*Si el usuario pulsa "Aceptar", la variable respuesta valdrá true y el bucle se repetirá. Si el usuario pulsa 
"Cancelar", la variable respuesta valdrá false y el bucle se detendrá.*/

/*Declaraciones --------------------------------------------------------------------------------------------
Las declaraciones en JavaScript son sentencias que definen la creación de una variable, función o clase. 
Podríamos decir que las declaraciones son como las instrucciones que le damos a JavaScript para que haga algo.

Por ejemplo, una declaración de variable es una sentencia que le da un nombre y un valor a una variable. 
*/


/*Expresiones ------------------------------------------------------------------------------------------------
Las expresiones en JavaScript son sentencias que producen un valor. Las expresiones pueden ser tan simples como un 
solo número o una cadena de texto, o tan complejas como el cálculo de una operación matemática, la evaluación de 
diferentes valores o la llamada a una función.

Por ejemplo, una expresión numérica es una sentencia que produce un número:*/

2 + 3 // -> 5
//De hecho, lo que guardamos en las variables son expresiones. Por ejemplo, en el siguiente código, 
//la expresión 2 + 3 se evalúa y el resultado se guarda en la variable resultado:

let resultado = 2 + 3
//En ese código tenemos la declaración que queremos guardar en la variable resultado el resultado de la expresión 2 + 3.

/*Bucles con for

La estructura de control for en JavaScript es muy útil para ejecutar una serie de instrucciones un número determinado de 
veces. A diferencia de while que usa una condición para determinar si se ejecuta o no el bloque de código, for usa un 
contador que se incrementa en cada iteración hasta que se cumple una condición.

La sintaxis de for es la siguiente:

for (inicialización; condición; actualización) {
  // código a ejecutar
}
Importante, fíjate que for tiene tres partes separadas por ;:

La inicialización se realiza antes de que se inicie el bucle y se utiliza para declarar variables y asignar valores iniciales.

La condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la expresión se evalúa como true, se ejecuta el bloque de código dentro del bucle. Si la expresión se evalúa como false, el bucle termina.

La actualización se utiliza para actualizar el valor de la variable de control del bucle después de cada iteración. Normalmente, se incrementa o decrementa el valor de la variable de control del bucle.*/ 
console.log("Bucles For");
for (let number = 1; number <= 10; number++) {
    console.log(number)
};

//Iterando al revés
//El método for en JavaScript también se puede utilizar para iterar al revés Para ello, se utiliza la sintaxis i-- 
//en la sección de actualización del bucle en lugar de i++.

//La sintaxis del método for para iterar en reversa es la siguiente:
console.log("Iterar a la inversa");
for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log('¡Despegue 🚀!')
  } else {
    console.log('Faltan ' + i + ' segundos')
  }
}

/** La coma , nos permite declarar dos variables en la inicialización y actualizarlas en la actualización. 
 * En este caso la , es un operador que evalua cada uno de sus operandos (de izquierda a derecha) y retorna el valor 
 * del último operando.

No es muy común su uso, pero es bueno saber que existe.*/
console.log("Con dos variables");

for (let i = 0, j = 5; i < 5; i++, j--) {
    console.log(i, j);
};

//continue y break
console.log("Continue y break");

for (let i = 0; i < 10; i++) {
    const esPar = i % 2 === 0
    if (esPar) {
      continue
    }
  
    // Solo mostramos este consola.log si es impar
    console.log(i)
  
    // Salimos del bucle al llegar al 7
    if (i === 7) {
      break
    }
}

/**Bucles anidados con for
Imagina que quieres crear la tabla de multiplicar del 1 al 10. Para ello, necesitas un bucle que itere del 1 al 10 y, 
dentro de ese bucle, otro bucle que itere del 1 al 10. Esto se puede hacer con dos bucles for anidados (uno dentro del 
otro). */

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const resultado = i * j
      console.log(i + ' x ' + j + ' = ' + resultado)
    }
};

//Switch
console.log("SWITCH");
/*En JavaScript, la sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de 
código dependiendo del valor de una expresión. Esta estructura es útil cuando queremos realizar diferentes acciones 
basadas en una única variable.*/

/**Sintaxis
La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido. 
Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada 
caso y evitar que se sigan evaluando el resto de casos.

switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}
 */

const dia1 = "lunes"

switch (dia1) {
  case "lunes":
    console.log("¡Hoy es lunes! 😢")
    break

  default:
    console.log("No es lunes, YAY! 🚀")
    break
};

console.log("getDay()--------------------------------------------------------------");

/**Vamos a hacer esto un poco más interesante. En JavaScript podemos recuperar la información de la hora y 
 * la fecha usando el objeto Date. Este objeto tiene un método llamado getDay() que nos devuelve el día de la 
 * semana en formato numérico, siendo 0 el domingo y 6 el sábado.

Igual que console es un objeto. También Date lo es. Un objeto en JavaScript no es muy diferente a un objeto en 
la vida real. Tiene propiedades y funciones que podemos usar. En este caso, getDay() es una función que nos devuelve 
el día de la semana. */

const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log("¡Hoy es domingo! 😴")
    break
  case 1:
    console.log("¡Nooo, es lunes! 😢")
    break
  case 2:
    console.log("¡Hoy es martes! 🥵")
    break
  case 3:
    console.log("¡Hoy es miércoles! 🤓")
    break
  default:
    console.log("Se acerca el fin de! 🚀")
    break
};

console.log("Agrupando cases");
/** Agrupando cases
En ocasiones, queremos que varios casos ejecuten el mismo código. En lugar de repetir el mismo código en cada 
caso, podemos agruparlos usando el mismo case para cada uno de ellos.*/

const dia2 = new Date().getDay()

switch (dia2) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
};

console.log("El patrón switch(true)");
/**El patrón switch(true)
Existe un patrón que se usa a veces con switch que es switch(true). Esto es, en lugar de evaluar una expresión, 
evalúa una condición ignorando por completo el valor de la expresión. */

let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
};

