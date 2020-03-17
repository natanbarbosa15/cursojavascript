function pesquisar() {
    var user = document.querySelector('input[name="user"]');
    var divPrincipal = document.querySelector('div#principal');
    var lista = document.querySelector('div#principal ul');

    // Verifica se já existe a mensagem de erro e remove
    if(document.contains(document.querySelector('div#principal h1'))) {
        document.querySelector('div#principal h1').remove();
    }

    // Remove itens da lista
    lista.innerHTML = '';

    // Mensagem carregando
    var carregando = document.createElement('li');
    carregando.innerHTML = "Carregando ...";
    lista.appendChild(carregando);

    // GET request
    axios({
        method: 'GET',
        url: 'https://api.github.com/users/' + user.value +'/repos',
        responseType: 'JSON'
    })
    .then(function (response) {
        carregando.remove();
        var repositorios = response.data;
        // Verifica todos os repositórios do usuário
        for(const repo of repositorios) {
            var item = document.createElement('li');
            item.innerHTML = repo.name + " - " + repo.description + " - " + repo.language;
            lista.appendChild(item);
        }
    })
    .catch(function (error) {
        carregando.remove();
        var mensagemErro = document.createElement('h1');
        mensagemErro.innerHTML = "Erro de requisicao ao servidor."
        mensagemErro.setAttribute('style', 'color: #f00');
        divPrincipal.appendChild(mensagemErro);
    });
}