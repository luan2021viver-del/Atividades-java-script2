let media = [7,2,8,9,4,10,6]
let soma = 0

for (let i = 0; i < media.length; i++) 
soma=+media[i]
console.log(soma)

let mediadasala = soma/0.7
console.log ("A media da sala foi",mediadasala)


let maiornota = Math.max(...media)

console.log("O maior nota foi", maiornota);


let reprovados = media.filter(media => media >= 7).length

console.log("a quantidade de reprovados foram", reprovados)


let aprovados = media.filter(media => media < 7).length

console.log("a quantidade de aprovados foram", aprovados)
