// 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre,
// apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku
// y mi edad 33”

// let usuario = (nombre, apellido, edad) => {
//     return `Hola mi nombre es ${nombre} ${apellido} y mi edad es: ${edad}`;
// }

// console.log(usuario("sebastian", "yabiku", 30));

/*------------------------------------------------------------------------------------------------------------*/

//2. Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// function sumaCubos(...rest) {
//         let suma = 0;
//         for ( i = 0; i < rest.length; i++) {
//             suma = suma + Math.pow(rest[i],3);
//         }
//         return suma;    
//     }
    
//     console.log(sumaCubos(1,2,3,4,5,6));


/*------------------------------------------------------------------------------------------------------------*/
//3. Crear una funcion que me retorne el tipo de valor entregado, 
//utilizar la función e imprimir los distintos tipos de JS.

// let valor = (a) => {
//     return "El valor es: " + typeof(a);
// }

// console.log(valor(77));

/*------------------------------------------------------------------------------------------------------------*/
//4. Crear una función que reciba n cantidad de argumentos
// y los sume ( utilizar parametros rest)

// function suma(...rest) {
//         let suma = 0;
//         for ( i = 0; i < rest.length; i++) {
//             suma = suma + rest[i];
//         }
//         return suma;    
//     }
// console.log(suma(23,3,7));


/*------------------------------------------------------------------------------------------------------------*/
// 5. Crear una función que reciba una matriz de valores
// y filtre los valores que no son string

// let matriz = [33, "mario", true, "jose", "marianela", 44, false];

// let result = matriz.filter(e => typeof e !== 'string');

// console.log(result);

/*------------------------------------------------------------------------------------------------------------*/
// 6. Cree una función que tome una matriz de números y devuelva
// los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// let numeros = [7, 21, 2, 3, 9, 6, 23, 44];

// function minMax(numeros) {
//     
//     let min = Math.min.apply(null, numeros);
//     let max = Math.max.apply(null, numeros); 
    
//     return [min, max];
// }

// console.log(minMax(numeros));

/*------------------------------------------------------------------------------------------------------------*/
// 7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9)
// y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function formatPhoneNumber(m){
//     return `(${m[0]}${m[1]}${m[2]}) ${m[3]}${m[4]}${m[5]}-${m[6]}${m[7]}${m[8]}${m[9]}`;
// }

// console.log(formatPhoneNumber(numeros));

/*------------------------------------------------------------------------------------------------------------*/
//8. Cree una función que tome una matriz de matrices con números.
//Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

let matriz = [[3,5,7], [3,1,9], [9,6,7]];