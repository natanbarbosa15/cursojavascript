class List
{
    constructor()
    {
        this.data = [];
    }

    addData(data) 
    {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List
{
    constructor() 
    {
        super();

        this.usuario = 'Natan';
    }

    mostrarUsuario() 
    {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addData('Novo Todo');
}

MinhaLista.mostrarUsuario();