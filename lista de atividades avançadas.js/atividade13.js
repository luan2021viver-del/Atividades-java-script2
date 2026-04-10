let numeros = [10, 5, 30, 40, 35, 36, 70, 90, 92];

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];

    if (num <= 25) {
        intervalo1++;
    } else if (num <= 50) {
        intervalo2++;
    } else if (num <= 75) {
        intervalo3++;
    } else if (num <= 100) {
        intervalo4++;
    }
}

console.log("Dentro do Intervalo 1 (<=25) Tem:", intervalo1);
console.log("Dentro do Intervalo 2 (26-50) tem:", intervalo2);
console.log("Dentro do Intervalo 3 (51-75) tem:", intervalo3);
console.log("Dentro do Intervalo 4 (76-100) tem:", intervalo4);