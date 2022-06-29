//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num1 = 30;

if (num1 < 0) {
    console.log('Negative');
} else if (num1 > 0) {
    console.log('Positive');
} else {
    console.log('Zero');
}