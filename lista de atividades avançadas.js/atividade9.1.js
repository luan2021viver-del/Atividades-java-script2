const prompt = require("prompt-sync")();

let alunos = [];
let opcao = '';

while (opcao !== '3') {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Sair");
    opcao = prompt('Opção: ');

    if (opcao === '1') {
        let quantidade = Number(prompt("Quantos alunos deseja cadastrar? "));

        for (let i = 0; i < quantidade; i++) {
            let nome = prompt('Digite o nome: ');
            let nota = Number(prompt('Digite a nota: '));

            alunos.push({ nome, nota });
        }

    } else if (opcao === '2') {

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado.");
        } else {
            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].nota >= 7) {
                    console.log(`O aluno ${alunos[i].nome} está aprovado`);
                } else {
                    console.log(`O aluno ${alunos[i].nome} está reprovado`);
                }
            }
        }

    } else if (opcao !== '3') {
        console.log("Opção inválida!");
    }
}
