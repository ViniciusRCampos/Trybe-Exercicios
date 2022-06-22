/* 
1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3 -Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
4 -Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5 -🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
6 -Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7 -Utilizando for, descubra qual o menor valor contido no array e imprima-o;
8 -Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
9 -Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

// 1 - Percorra o Array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// 2 - Some todos os valores do Array;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma);

// 3 - Media aritmetica Array;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma / numbers.length);

// 4 - Verificar se valor do exercicio 3 é Maior ou Menor que 20;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
let resultado = soma / numbers.length;

if (resultado > 20) {
  console.log("Valor Maior do que 20");
} else {
  console.log("Valor Menor do que 20");
}

//5 - Utilizando for, descubra o maior valor do Array;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior);

//6 - Quantos impares existem no Array;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
let listaImpar = [];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    listaImpar[impar] = numbers[index];
    impar += 1;
  }
}
if (impar === 0) {
  console.log("Nenhum valor é ímpar");
} else {
  console.log("Existem", impar, "valores ímpares");
  console.log("Os números ímpares são:", listaImpar);
}

//7 - Descubra o menor valor do Array;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 1000;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);

//8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (index = 0; index < 25; index += 1){
    array[index] = index + 1;
}
console.log(array);

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2;
let arrayExercicioNove = [];
let resultadoDivisao = [];
for (index = 0; index < 25; index += 1){
    arrayExercicioNove[index] = index + 1;
}
console.log(arrayExercicioNove);

for (index = 0; index < array.length; index += 1){
    resultadoDivisao[index] = arrayExercicioNove[index]/2;
}
console.log(resultadoDivisao);