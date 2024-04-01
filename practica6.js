console.log("Return implícito");

// Vamos a pasar una función regular a una función flecha y vamos a ver cómo se ve finalmente con return implícito:

// Declaración de función regular
function sumar(a, b) {
    return a + b
  }
  
  // Función flecha
  const sumarFlecha = (a, b) => {
    return a + b
  }
  
  // Función flecha con return implícito
  const sumarFlecha1 = (a, b) => a + b

console.log("Función regular");
console.log(sumar(8,19));
console.log("Función flecha");
console.log(sumarFlecha(3,9));
console.log("Función flecha con return implícito");
console.log(sumarFlecha1(6,42));

/**Como podemos ver, la función flecha con return implícito es mucho más corta y fácil de leer que la función 
 * regular. Esto es especialmente útil cuando estamos trabajando con funciones de una sola línea. */