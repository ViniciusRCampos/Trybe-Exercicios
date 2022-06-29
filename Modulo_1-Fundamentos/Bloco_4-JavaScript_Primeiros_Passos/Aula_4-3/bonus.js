//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:



//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let k=5;
let dim=1;
let espaco= ' ';
let estrela = '*';
for (let i3=1;i3<=k; i3+=2){
    if(i3 < k){
        console.log(espaco.repeat((k-(dim+i3))/2),estrela.repeat(i3));
    } else {
        console.log(estrela.repeat(i3));
    }
}