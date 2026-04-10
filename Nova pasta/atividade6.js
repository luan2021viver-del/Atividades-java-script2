let senha = "senha123";

if (senha.length < 8) {
    console.log("Senha inválida: muito curta.");
} else if (senha.includes("123")) {
    console.log("Senha inválida: contém sequência proibida '123'.");
} else {
    console.log("Senha válida");
}