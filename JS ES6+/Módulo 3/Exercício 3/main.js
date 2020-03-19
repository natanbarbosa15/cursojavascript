import axios from 'axios';

class Github {
    static getRepositories = async (repo) => {
        try {
            var response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch (error) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('natannmb15/tcc-pytradebot');
Github.getRepositories('rocketseat/dslkvmskv');
   