import axios from 'axios';

const buscaUsuario = async (usuario) => {
    try {
        var response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    }
    catch (error) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('natannmb15');
buscaUsuario('natannmb155');
   