import axios from 'axios';

const getUserFromGithub = async (user) => {
    try {
        var response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('natannmb15');
getUserFromGithub('diego3g124123');
