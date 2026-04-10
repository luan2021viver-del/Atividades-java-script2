let num = [6, 7, 7]

let resultado = num[0] + num[1] + num[2]

if (resultado >= 21) {
    console.log("aprovado")
} 
else if (resultado > 0 && resultado < 21) {
    console.log("reprovado")
} 
else if (resultado<= 0) {
    console.log("recuperação")
}