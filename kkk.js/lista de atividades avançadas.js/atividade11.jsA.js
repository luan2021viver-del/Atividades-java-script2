let idades = [12, 18, 25, 10, 30, 15,70];

//FILTRA idades que sejam maior que 18

let maioridade = idades.filter(idade => idade >= 18);

console.log(maioridade);

let contaridade = idades.filter(idade => idade >= 18).length;

console.log("Existe"  + contaridade +  "de maior idade");

//contar quantas idades são maiores que 18