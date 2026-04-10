let kwhdias = [20,50,70,80,40,10]
let soma = 0

for (let i = 0; i < kwhdias.length; i++) 
soma+=kwhdias[i]
console.log("O consumo total foi",soma)

let mediapordia = soma/6
console.log ("A media por dia foi",mediapordia)

let consumoalto = kwhdias.filter(kwhdias => kwhdias >= 50).length
console.log("Os dias que foram consumo alto foi apenas",consumoalto)

let situaçãocritica = kwhdias.filter(kwhdias => kwhdias >= 58).length
console.log("Os dias que foram situções crticas foi apenas",situaçãocritica)


