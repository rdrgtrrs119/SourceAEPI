//Ejercicio 1: Declaración de variables
let edad;
let peso;
console.log(`Edad: ${edad}, Peso ${peso}`)

//Ejercicio 2: Almacenando datos

let mes = 10;
let dia = 'Lunes';

console.log(`mes: ${mes}, dia ${dia}`)

edad = 20;
peso = 40;

//Ejercicio 3: Otro tipo de dato
let saludo = 'Hola Mundo!';
console.log(saludo);


//Ejercicio 4: Intercambiando valores
let numeroA = 30;
let numeroB = 45;
let aux;

aux = numeroA;
numeroA = numeroB;
numeroB = aux;

console.log(numeroA);
console.log(numeroB);

//Ejercicio 5: Más tipos de datos
let meGustaElHelado = true;
console.log(meGustaElHelado);

//Ejercicio 6: variables y operadores.
let suma = 5 + 10;
let resta = 20 - 5;
let num1 = 5;
let num2 = 10;
let mult = num1 * num2;

let compara1 = 2 > 1;
console.log(compara1);

let compara2 = 1 > 1;
console.log(compara2);

//Ejercicio 7: mostrar información con Javascript
// let edadUser = prompt('Inserta tu edad');
// alert('Gracias por tu respuesta');
console.log('Necesito utilizar variables para procesar tu edad');

//Ejercicio 8:
const euro = 7;
let dolares = euro * 2;


//Ejercicio 9:
const precioIni = 100;
let iva = 100 * 21 / 100;
let precioDolares = precioIni + iva;
console.log('Precio con IVA: ' + precioDolares);

//Ejercicio 10:
const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';

console.log(`${nombre} ha pedido una caja ${material} con unas dimensiones
            ${dimensiones}. ${comentario}`);

//Ejercicio 11:
let n1 = 23;
let n2 = 15;
let n3 = 3;
let n4 = 2;
let n5 = 10;
let resultado = (23 + (15 * (3 / 2)) - 10);

// alert('El resultado es: ' + resultado);
//console.log(resultado);

let etiqueta = `<p> El resultado de restar - 5 es : ${(resultado - 5)} </p>`
 //console.log(etiqueta);
 document.write(etiqueta);



console.log('Decremetno: ' + --resultado);

//Ejercicio 12:
let enero = 1;
let febrero = 2;
let marzo = 3;
let abril = 4;
let mayo = 5;
let junio = 6;
let julio = 7;
let agosto = 8;
let septiembre = 9;
let octubre = 10;
let noviembre = 11;
let diciembre = 12;

console.log('Enero es mayor que diciembre: ' + (enero > diciembre));
console.log('Junio es menor que julio: ' + (junio < julio));