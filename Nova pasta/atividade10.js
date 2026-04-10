let distanciaKm = 7;
let orcamento = 15;

if (distanciaKm <= 2) {
    console.log("Sugestão: A pé");
} else if (distanciaKm <= 8 && orcamento >= 10) {
    console.log("Sugestão: Ônibus");
} else if (distanciaKm <= 15 && orcamento >= 25) {
    console.log("Sugestão: Moto/Carro por app");
} else {
    console.log("Não é possível com esse orçamento");
}