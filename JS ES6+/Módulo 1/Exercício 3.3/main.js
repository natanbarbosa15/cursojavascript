const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome: nome, idade: idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));