let saldo = 100, valorCompra = 250, temLimite = true, limite = 200;

if (saldo >= valorCompra) {
    saldo -= valorCompra;
    console.log("Aprovado. Saldo final: R$ " + saldo);
} else if (temLimite && (saldo + limite) >= valorCompra) {
    saldo -= valorCompra;
    console.log("Aprovado usando limite. Saldo final: R$ " + saldo);
} else {
    console.log("Negado");
}