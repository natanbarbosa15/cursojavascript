const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

var arrayUsuarios = usuarios.filter(usuario => (usuario.idade >= 18 && usuario.empresa === "Rocketseat"));
console.log(arrayUsuarios);