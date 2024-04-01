
//crear matriz
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

//para acceder a un numero de la matriz uso 2 indices
let numero = matriz[1][2]
console.log(numero); // -> 6

console.log("Recorre la matriz con el bucle for e imprime el valor de cada posición")

for (let i = 0; i < matriz.length; i++) { // {1}
    for (let j = 0; j < matriz[i].length; j++) { // {2}
        console.log(matriz[i][j])
    }
}

console.log("Ejemplo práctico de Matrices")

const tablero = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
]

// Verifica las líneas horizontales
for (let i = 0; i < 3; i++) {
    if (
        tablero[i][0] === tablero[i][1] &&
        tablero[i][1] === tablero[i][2]
    ) {
        console.log(`El ganador es: ${tablero[i][0]}`);
    }
}

// Verifica las líneas verticales
for (let i = 0; i < 3; i++) {
    if (
        tablero[0][i] === tablero[1][i] &&
        tablero[1][i] === tablero[2][i]
    ) {
        console.log(`El ganador es: ${tablero[0][i]}`);
    }
}

// Verifica la diagonal de arriba izquierda a derecha abajo
if (
        tablero[0][0] === tablero[1][1] &&
        tablero[1][1] === tablero[2][2]
) {
        console.log(`El ganador es: ${tablero[0][0]}`);
}

// Verifica la diagonal de derecha arriba a izquierda abajo
    if (
        tablero[0][2] === tablero[1][1] &&
        tablero[1][1] === tablero[2][0]
) {
        console.log(`El ganador es: ${tablero[0][2]}`);
}

//lo ideal seria jugar con la maquina (su opcion podria ser aleatorea) y pedirle al usuario que ingrese 
//su opcion(ACORDATE DE INTENTARLO!!!!!!!)

console.log("EJERCICIO")

/**
 * Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" 
 * en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de 
 * la columna.
 */

let matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]

let position = findJavaScript(matrix)


function findJavaScript(matrix) {
    
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[j].length; j++){

            if (matrix[i][j] === 'JavaScript'){
                return [i,j];
            
            }
    }
}
if (matrix[i][j] != 'JavaScript'){
    return [-1,-1]
}
}

if(position === undefined){
    console.log("La palabra no se encuentra en la matriz")
}else{
    console.log("La posicion en la matriz de la palabra JavaScript es: ", position) // -> [0, 2]
}