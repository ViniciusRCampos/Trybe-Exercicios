//🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ang1 = 30;
const ang2 = 60;
const ang3 = -180;

if (ang1 + ang2 + ang3 == 180 && Math.min(ang1,ang2,ang3)>0) {
    console.log(ang1 + ang2 + ang3 == 180 && Math.min(ang1,ang2,ang3)>0);
} else if (ang1 + ang2 + ang3 != 180 && Math.min(ang1,ang2,ang3)>0) {
    console.log (!(ang1 + ang2 + ang3 != 180) && Math.min(ang1,ang2,ang3)>0);
}else {
    console.log ('Nenhum ângulo pode ser negativo. Verifique os valores digitados.')
}