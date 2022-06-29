/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

//1-Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudaTexto(tag, indice, texto) {
  let textoTag = (document.getElementsByTagName(tag)[indice].innerText = texto);
  return textoTag;
}
//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudaCorVerde(classElement, indice) {
  let elemento = (document.getElementsByClassName(classElement)[
    indice
  ].style.backgroundColor = "rgb(76,164,109)");
  return elemento;
}
//3. Crie uma função que mude a cor do quadrado vermelho para branco.
function mudaCorBranco(classElement, indice) {
  let elemento = (document.getElementsByClassName(classElement)[
    indice
  ].style.backgroundColor = "white");
  return elemento;
}
//4. Crie uma função que corrija o texto da tag <h1>.
//###A Função 1 resolve esse problema também###

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function textoLowerCase(tag, indice) {
    
  if (indice === null) {
    for (let index in document.getElementsByTagName(tag)) {
        document.getElementsByTagName(tag)[index].innerText = 
        document.getElementsByTagName(tag)[index].innerText.toLowerCase();
    }
  } else {
    document.getElementsByTagName(tag)[indice].innerText = document
      .getElementsByTagName(tag)
      [indice].innerText.toLowerCase();
  }
}
//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function conteudoTag(tag){   
    for (let index = 0; index < document.getElementsByTagName(tag).length; index += 1){
     console.log(document.getElementsByTagName(tag)[index].textContent);
    }
}