let vendanodia = [120,300,10,20,200,400,700]
let soma = 0
for (let i = 0; i < vendanodia.length; i++) {
 (soma+=vendanodia[i]); 
}
console.log("venda no total",soma) 

let mediapordia = soma / 7 
console.log ("A media por dia foi",mediapordia)

let maiorvalor = vendanodia(vendanodia => vendanodia >= 100)

console.log("O maior valor foi", maiorvalor);

let contardias = vendanodia.filter(vendanodia => vendanodia >= 100).length

console.log("dias que foram maior que 100 foi", contardias)

