const prompt = require("prompt-sync")();

let pedido = [];

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
            let prazos = Number(prompt("Digite o prazo: "));

        
            pedido.push({
                numerodopedido,
                material,
                quantidade1,
                tipodoproduto,
                prazos
            });
        }

    } else if (opcao === '2') {

        if (pedido.length === 0) {
            console.log("Nenhum pedido cadastrado.");
        } else {

            let intervalo1 = 0;
            let intervalo2 = 0;
            let intervalo3 = 0;
            let intervalo4 = 0;

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

                
                console.log("\n--- Pedido ---");
                console.log("Número:", pedido[i].numerodopedido);
                console.log("Material:", pedido[i].material);
                console.log("Quantidade:", pedido[i].quantidade1);
                console.log("Tipo:", pedido[i].tipodoproduto);
                console.log("Prazo:", pedido[i].prazos);
            }

            console.log("\n===== RELATÓRIO =====");
            console.log("Zona vermelha (URGENTE):", intervalo1);
            console.log("Zona laranja (ALTA):", intervalo2);
            console.log("Zona amarela (MÉDIA):", intervalo3);
            console.log("Zona verde (BAIXA):", intervalo4);
        }

    } else if (opcao !== '3') {
        console.log("Opção inválida!");
    }
}
