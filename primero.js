
//Tomando como entrada un número entero, imprimir si es par o impar.

var numero = parseInt(prompt("Ingrese un numero"));
let aux=1,ant,num=1;
for(let i=3; i<numero;i++){

ant=aux;
aux=num;
num=aux+ant;
}
console.log(num);
