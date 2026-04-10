let num1 = 10;
let num2 = 0;
let operacao = "/";

let resultado;

if (operacao === "+") {
    console.log (resultado = num1 + num2)

} else if (operacao === "-") {
    console.log (resultado = num1 - num2)

} else if (operacao === "*") {
    console.log(resultado = num1 * num2)

} else if (operacao === "/") {
    if (num2 === 0) 
        console.log("Erro: divisão por zero");
        resultado = undefined; // garante que não continue
    } else {
    console.log(resultado = num1 / num2)
    }
