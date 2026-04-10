let num = [1, 2 ,3 , 4 , 5 ,6,7,8,9,10];
let soma = 0;

// FILTRA numeros pares
let Pares = num.filter(num => num % 2 === 0);

console.log(Pares);

for (let i = 0; i < Pares.length; i++) {
  soma += Pares[i];
}

console.log(soma);