//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
console.log('Exercicio 1');

console.log('Seja bem vindo!', info.personagem);
console.log('_______________________________________"');

// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

console.log('Exercicio 2');

info['recorrente'] = 'Sim'

console.log(info.recorrente);


console.log('_______________________________________"');

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

console.log('Exercicio 3');

for (chave in info){
    console.log(chave);
}
console.log('_______________________________________"');

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

console.log('Exercicio 4');

for (chave in info){
    console.log(info[chave]);
}
console.log('_______________________________________"');

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
console.log('Exercicio 5');

let info1 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente:'Sim'
};
let resultado = {};
for (chave1 in info1){
    console.log(info[chave1], 'e',info1[chave1]);
    resultado[chave1] = info[chave1] + ' e ' + info1[chave1];
};
console.log('_______________________________________"');

//--------------------------------------------------------
//--------------------------------------------------------

//Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
//console.log(leitor.livrosFavoritos[0].titulo);

//🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log('Exercicio 6');

console.log('O livro favorito de', leitor['nome'], leitor['sobrenome'], 'se chama', leitor.livrosFavoritos[0].titulo);

console.log('_______________________________________"');

//🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
console.log('Exercicio 7');

leitor.livrosFavoritos[(leitor.livrosFavoritos.length)] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
};

console.log(leitor.livrosFavoritos);

console.log('_______________________________________"');

//🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(leitor.nome,'tem',leitor.livrosFavoritos.length,'livro(s) favorito(s)');