// 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre,
// apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku
// y mi edad 33”

// let usuario = (nombre, apellido, edad) => {
//     console.log(`Hola mi nombre es ${nombre} ${apellido} y mi edad es: ${edad}`);
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
//     console.log("El valor es: ", typeof(a));
// }

// console.log(typeof(valor(77)));

/*------------------------------------------------------------------------------------------------------------*/
//4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

// function suma(...rest) {
//         let suma = 0;
//         for ( i = 0; i < rest.length; i++) {
//             suma = suma + rest[i];
//         }
//         return suma;    
//     }
// console.log(suma(23,3,7));


/*------------------------------------------------------------------------------------------------------------*/
// 5. Crear una función que reciba una matriz de valores y filtre los valores que no son string

// let matriz = [33, "mario", true, "jose", "marianela", 44, false, "pepe", "marcos"];

// let result = matriz.filter(e => typeof e !== 'string');

// console.log(result);

/*------------------------------------------------------------------------------------------------------------*/
// 6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]



