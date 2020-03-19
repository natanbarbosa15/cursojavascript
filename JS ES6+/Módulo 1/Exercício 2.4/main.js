const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

var arrayUsuarios = usuarios
                    .map(usuario => ({ ...usuario , idade: usuario.idade * 2 }))
                    .filter(usuario => usuario.idade <= 50);

console.log(arrayUsuarios);