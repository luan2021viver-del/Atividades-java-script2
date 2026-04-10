let tipoCliente = "PJ"; // "PF" ou "PJ"
let faturamento = 25000;

if (tipoCliente === "PF") {
    console.log("Plano Fixo: R$ 29,90");
} else {
    let valorPlano;
    if (faturamento < 10000) valorPlano = 99;
    else if (faturamento <= 50000) valorPlano = 199;
    else valorPlano = 399;
    
    console.log(Categoria: PJ | Valor do Plano: R$ ${valorPlano});
}