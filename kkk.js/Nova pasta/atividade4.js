let bairro = Brotas;
let valorPedido = 90.00;
let frete = 0;

if (valorPedido >= 80) {
    frete = 0;
} else {
    if (bairro === Centro) frete = 5;
    else if (bairro === Brotas) frete = 8;
    else if (bairro === tapuã )frete = 12;
    else frete = 15;
}

console.log(Frete: R$ ${frete} | Total: R$ ${valorPedido + frete});