const prompt = require("prompt-sync")();

let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let entradadenumeros = Number(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(entradadenumeros);
}

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("Números digitados:", numeros);
console.log("A soma total dos valores é:", soma);
