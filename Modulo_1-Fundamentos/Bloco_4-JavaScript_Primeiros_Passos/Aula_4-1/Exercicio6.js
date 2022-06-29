/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let pecaXadrez = 'Torre';

switch (pecaXadrez.toLowerCase()) {
    case 'peao':
        console.log('Apenas para frente');
        break;
    case 'bispo':
        console.log('Diagonais');
        break;
    case 'rainha':
        console.log('Qualquer direção e sem limites de casas - Horizontal, Diagonal, Vertical');
        break;
    case 'king':
        console.log('Qualquer direção, mas apenas uma casa por vez');
        break;
    case 'cavalo':
        console.log('Apenas em L - 2 casas em um sentido (horizontal/vertical) e 1 casa no outro sentido');
        break;
    case 'torre':
        console.log('Qualquer número de casas no sentido Horizontal ou Vertical');
        break;
    default:
        console.log('Essa peça não existe no tabuleiro de xadrez');
        break;
}