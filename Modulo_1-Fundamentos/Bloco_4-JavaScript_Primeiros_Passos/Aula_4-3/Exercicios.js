//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
let fatorial = 10;



//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Vinicius';
let palavraReversa = '';

for (index = word.length -1; index >= 0; index -=1){
    palavraReversa += word[index];
}
console.log(palavraReversa);

//3- Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let lista = [5,9,12,0,-1,35];
console.log(Math.max(lista));

for (index = 0; index < array.length; index +=1){
    console.log(array[index]);
    console.log(array[index].length);

    }



