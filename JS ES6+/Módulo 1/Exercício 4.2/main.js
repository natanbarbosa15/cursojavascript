const mostraInfo = ({ nome, idade } = usuario) => `${nome} tem ${idade} anos.`;

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));