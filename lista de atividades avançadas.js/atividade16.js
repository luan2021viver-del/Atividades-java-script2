const prompt = require("prompt-sync")();

let pedido = [];

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;

let opcao = '';

while (opcao !== '3') {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Sair/Relatório final");
    opcao = prompt('Opção: ');

    if (opcao === '1') {

        let quantidade = Number(prompt("Quantos pedidos você deseja cadastrar? "));

        for (let i = 0; i < quantidade; i++) {

            let numerodopedido = Number(prompt('Digite o numero do pedido: '));
            let material = prompt('Digite o nome do material: ');
            let quantidade1 = Number(prompt('Digite a quantidade de material: '));
            let tipodoproduto = prompt('Digite o tipo do produto: ');
            let prazos = Number(prompt("Digite o prazo: " ));

            pedido.push({ numerodopedido, material, quantidade1, tipodoproduto, prazos });
        }

    } else if (opcao === '2') {

        if (pedido.length === 0) {
            console.log("Nenhum pedido cadastrado.");
        } else {

        
            intervalo1 = 0;
            intervalo2 = 0;
            intervalo3 = 0;
            intervalo4 = 0;

            for (let i = 0; i < pedido.length; i++) {

                let dias = pedido[i].prazos;

                if (dias <= 2) {
                    intervalo1++;
                } else if (dias <= 5) {
                    intervalo2++;
                } else if (dias <= 10) {
                    intervalo3++;
                } else {
                    intervalo4++;
                }
            }

            console.log("Zona vermelha (Prioridade:URGENTE):", intervalo1);
            console.log("Zona laranja (Prioridade:ALTA):", intervalo2);
            console.log("Zona amarela (Prioridade:MÉDIA):", intervalo3);
            console.log("Zona verde (Prioridade:BAIXA):", intervalo4);
        }

    } else if (opcao !== '3') {
        console.log("Opção inválida!");
        
    }
}