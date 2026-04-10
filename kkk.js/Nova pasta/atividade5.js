let consumoKwh = 150;
let valorTotal = 0;

if (consumoKwh <= 100) {
    valorTotal = consumoKwh * 0.60;
} else if (consumoKwh <= 200) {
    valorTotal = consumoKwh * 0.75;
} else {
    valorTotal = consumoKwh * 0.90;
}

console.log(Valor total da conta: R$ ${valorTotal.toFixed(2)});