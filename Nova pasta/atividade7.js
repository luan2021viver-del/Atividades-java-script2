let valorBoleto = 200.00;
let diasAtraso = 5;
let valorFinal;

if (diasAtraso === 0) {
    valorFinal = valorBoleto;
} else {
    let multa = valorBoleto * 0.02;
    let juros = valorBoleto * (0.001 * diasAtraso);
    valorFinal = valorBoleto + multa + juros;
}

console.log(Valor final: R$ ${valorFinal.toFixed(2)})
