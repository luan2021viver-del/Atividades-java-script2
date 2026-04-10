// ATIVIDADE PRÁTICA: OPERADORES E ATRIBUIÇÃO
// Nome: Victor Emanuel
// Turma:2 T.I B

// 1. Preço com desconto
let precoProduto = 100.50;
let desconto = 15.00;
let precoFinal = precoProduto - desconto;
console.log("1. Preço final:");
console.log(precoFinal);
console.log(typeof precoFinal);

// 2. Média aritmética
let nota1 = 8;
let nota2 = 9;
let nota3 = 7;
let nota4 = 10;
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("2. Média das notas:");
console.log(media);

// 3. Operadores de atalho (Atribuição)
let saldo = 500;
saldo += 200; // Adiciona 200
saldo -= 50;  // Subtrai 50
saldo *= 2;   // Multiplica por 2
console.log("3. Saldo final:");
console.log(saldo);

// 4. Par ou Ímpar (Módulo)
let numero = 17;
let resto = numero % 2;
console.log("4. Resto da divisão:");
console.log(resto); 
// Se o resto é 1, o número é Ímpar.

// 5. Expressão matemática
let n1 = 15, n2 = 5, n3 = 2, n4 = 121, n5 = 5;
let resultadoExpressao = (n1 + n2) * n3 / (n4 % n5);
console.log("5. Resultado da expressão:");
console.log(resultadoExpressao);
// O operador % pega o resto da divisão. 121 dividido por 5 sobra 1.

// 6. Constante e Erro
const nome = "Seu Nome";
let idade = 20;
// nome = "Outro Nome"; // 
console.log("6. Nome e Idade:");
console.log(nome, idade);

// 7. Celsius para Fahrenheit
let C = 30;
let F = (C * 9 / 5) + 32;
console.log("7. Fahrenheit:");
console.log(F);

// 8. IMC
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
console.log("8. IMC:");
console.log(imc);

// 9. String com +=
let frase = "JavaScript é";
frase += " uma linguagem poderosa!";
console.log("9. Frase:");
console.log(frase);

// 10. Aumento de 5%
let valor = 80.00;
valor *= 1.05; // Multiplica por 1.05 para dar 5% de aumento
console.log("10. Valor com aumento:");
console.log(valor);