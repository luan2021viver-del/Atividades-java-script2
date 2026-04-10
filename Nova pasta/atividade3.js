let idade = 16;
let temAutorizacao = true;

if (idade >= 18) {
    console.log("Acesso liberado");
} else if (idade >= 16 && temAutorizacao) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}