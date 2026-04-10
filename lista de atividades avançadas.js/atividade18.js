   for (let i = 0; i < numerodopedido.length; i++) {
                if (numerodopedido[i].prazos <= 2) {
                    console.log(` ${numerodopedido[i].prazos} está aprovado`);
                } else{
                    console.log(`O aluno ${numerodopedido[i].prazos} está reprovado`);
                }
            }
        }
        let pedidos = [];
         let pedidos = prompt('Digite o nome: ');