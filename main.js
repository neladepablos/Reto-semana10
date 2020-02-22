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

//7. Optimizado:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function phonenumber(numbers) {
//     let three = numbers.slice(0,3).join('');
//     let rest = numbers.slice(3,6).join('');
//     let final = numbers.slice(6,10).join('');
//     let phone = `(${three}) ${rest} - ${final}`;
//     return phone; 
// }

// console.log(phonenumber(numbers));

/*------------------------------------------------------------------------------------------------------------*/
//8. Cree una función que tome una matriz de matrices con números.
//Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// let matriz = [[3,5,7], [3,1,9], [9,6,7]];

// function matrizUnica(matriz) {

//     let max = Math.max.apply(null, matriz[0]);
//     let max2 = Math.max.apply(null, matriz[1]);
//     let max3 = Math.max.apply(null, matriz[2]); 
    
//      return [max, max2, max3];
// }

// console.log(matrizUnica(matriz));

/*------------------------------------------------------------------------------------------------------------*/
// 9. Dada una palabra, escriba una función que devuelva el primer
// índice y el último índice de un carácter.

//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

// let palabra = "carnaval de las flores";


// function primUlt(palabra) {

//     let primera = palabra.charAt(0);
//     let ultima = palabra.charAt(palabra.length-1);


//     return [primera, ultima];
// }

// console.log(primUlt(palabra));

/*------------------------------------------------------------------------------------------------------------*/
//10. Escriba una función que convierta un objeto en una matriz,
// donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3    
// };
// function objectToMatriz(obj) {
//     let arr = [];
//     Object.keys(obj).forEach(function(key) {
//         let valor = obj[key];
//         let arr2 = [key, valor];
//         arr.push(arr2);      
//       });

//       return arr;
// }

// console.log(objectToMatriz(obj));

/*------------------------------------------------------------------------------------------------------------*/
// 11. Cree la función que toma una matriz con objetos y 
//devuelve la suma de los presupuestos de las personas.

// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]) ➞ 65700

// let arr = [
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 },
//     { name: "Mario",  age: 16, budget: 3000 }


// ];

// function sumaNumeros(arr) {
   
//     let suma = 0;
//     for(i = 0; i < arr.length; i++) {
//         suma = suma + arr[i].budget;
//     }

//     return suma;
// }

// console.log(sumaNumeros(arr));

/*------------------------------------------------------------------------------------------------------------*/
//12. Cree una función que tome una matriz de estudiantes y 
//devuelva una matriz de nombres de estudiantes.

// getStudentNames([
//     { name: "Steve" },
//     { name: "Mike" },
//     { name: "John" }
//   ]) ➞ ["Becky", "John", "Steve"]
  
// let students = [
//     {name: "Oscar"},
//     {name: "Marianela"},
//     {name: "Luis"},
//     {name: "pepe"}
// ];


// function NombreStudents(students) {
//      let arr = [];
//     for(i=0; i< students.length; i++) {     

//        arr.push(students[i].name);
//     }

//     return arr;
// }

// console.log(NombreStudents(students));

/*------------------------------------------------------------------------------------------------------------*/
// 13. Escriba una función que convierta un objeto en una matriz de claves y valores.

// objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
//   }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

/*------------------------------------------------------------------------------------------------------------*/
// 14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14

  

// function sumaCuadrados(n) {
//             let suma = 0;
//             for ( i = 1; i <= n; i++) {
//                 suma = suma + Math.pow(i,2);
//             }
//             return suma;    
//         }
        
// console.log(sumaCuadrados(3));

/*------------------------------------------------------------------------------------------------------------*/
// 15. Cree una función para multiplicar todos los valores en una matriz por la cantidad
// de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

// let arr = [2, 3, 1, 0];

// let resul = arr.map(function(x) {
//     return x * arr.length;
// });

// console.log(resul);

/*------------------------------------------------------------------------------------------------------------*/
//16 .Cree una función que tome un número como argumento y devuelva una matriz de 
//números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

// let number = parseInt(prompt("Ingrese el numero: "));
// function matrizNumbers(number) {    

        
//         for (i=number; i>= 0; i-- ) {
//         console.log(i);       
//      }
//      return [i]; }
//  console.log(matrizNumbers(number));

/*------------------------------------------------------------------------------------------------------------*/
// 17. Cree una función que tome una matriz y devuelva la diferencia entre los
// números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

// let numbers = [10, 4, 1, 4, -10, -50, 32, 21];

// function minMax(numbers) {
     
//     let min = Math.min.apply(null, numbers);
//     let max = Math.max.apply(null, numbers); 
//     let result = max - min;
//     return result;
// }

// console.log(minMax(numbers));

/*------------------------------------------------------------------------------------------------------------*/
// 18. Cree una función que filtre las cadenas de una matriz y devuelva una 
//nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

// let arr = [1, 2, 3, "x", "y", 10];

// let result = arr.filter(e => typeof e !== 'string');

// console.log(result);


/*------------------------------------------------------------------------------------------------------------*/
// 19. Cree una función que tome dos argumentos (elemento, tiempos). 
//El primer argumento (elemento) es el elemento que necesita repetirse, 
//mientras que el segundo argumento (veces) es la cantidad de veces que se
// debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]

// var repeatelem = function(elem, n){
//     // returns an array with element elem repeated n times.
//     var arr = [];

//     for (var i = 0; i < n; i++) {
//         arr = arr.concat(elem);
//     };

//     return arr;
// };

// console.log(repeatelem(13, 5))

/*------------------------------------------------------------------------------------------------------------*/
// 20. Escriba una función, .vreplace () que extienda el prototipo
// de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

//https://stackoverflow.com/questions/39624581/javascript-replace-characters-of-an-element-in-an-array/39624661

/*------------------------------------------------------------------------------------------------------------*/
// 22. Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"
//http://js.dokry.com/cmo-capitalizar-la-ltima-letra-de-cada-palabra-en-una-cadena.html


