// var nome; //globalmente
// let nome; //de acordo com o escopo que ela se encontra
// const nome; //constante
// = ele atribui, == ele verifica os valor são iguais, 
//=== alem dele verificar os valores, ele verifica o tipo -> != , !==

// var sexo = 'M';
// var masculino = sexo === 'M'; //if

// return (sexo === 'M')? 'Masculino' : 'Feminino'; //if else condição ternária

//intervalo e timeout
// function exemplo(){
//     console.log('Hello world');
// }

//a cada 1s eu o js executa essa função
// setInterval(exemplo, 1000);

//ele dar um delay antes de executar esta função
// setTimeout(exemplo, 10000);
/*
function mostraAlerta(){
    alert('Botão clicado');
};

function input(){
    // var inputElement = document.getElementsByName('nome'); 
    //document.getElementsByClassName 
    //document.getElementsById('') 
    //getElementsByTagName('') -> pega os elementos pela tag = <input/>
    //, mas retorna um vetor[] 
    // var inputElement = document.querySelector('div#app input'); 
    //('input[name=nome]')
    var btn = document.querySelector('button.botao');
    
    btn.onclick = () => {
        alert('botão clicado');
    };
};*/
/*
function element(){
    var linkElement = document.createElement('a');

    linkElement.setAttribute('href', 'http://google.com.br');

    var textElement = document.createTextNode('Acessar Google');
    linkElement.appendChild(textElement);

    var containerElement = document.querySelector('#app');
    containerElement.appendChild(linkElement);

    var inputElement = document.querySelector('#nome');
    containerElement.removeChild(inputElement);
};

function resumeFaq(){
    var coll = document.getElementsByClassName("collapsible");
    var i;
    console.log(coll.length);
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
        });
    }
};

function exercicioOne(){

    var {value} = document.querySelector('input#nome');

    var endereco = {
        rua: 'Ruas dos Pinheiros',
        numero: 1293,
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP'
    };

    console.log(`O usuário ${value} mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua} com nº ${endereco.numero}`);
};

function pares(x,y){
    var par = [];

    while(x<=y){
        
        if(x%2===0){
            par.push(x);
        }

        x+=1;
    };

    console.log(`Quantos pares tem: ${par.length}`);

    par.map(number => {
        console.log(number);
    });
};

function temHabilidade(skill){

    var skillsLower = [];
    var skills = ["Javascript", "ReactJS", "React Native"];

    skills.map(skill=>{
        skillsLower.push(skill.toLowerCase());
    });

    return (skillsLower.indexOf(skill.toLowerCase()) === 0)? console.log(true): console.log(false);
};

function exp(anos){
    
    if([0,1].indexOf(anos) >= 0){
        return console.log("Iniciante");
    }else if([2,3].indexOf(anos) >= 0){
        return console.log("Intermediário");
    }else if([4,5,6].indexOf(anos) >= 0){
        return console.log("Avançado");
    }else{
        return console.log("Jedi Master");
    }

};

function exercFive(){
    var usuarios = [
        {
            nome: 'Diego',
            habilidades: ['Javascript', 'ReactJS', 'Redux']
        },
        {
            nome: 'Gabriel',
            habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
        }
    ];

    for(usuario of usuarios){
        console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`);
    }
};

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(position){
    todos.splice(position, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}*/
/*
var ajax = new XMLHttpRequest();

ajax.open('GET', 'https://api.github.com/users/victovf');
ajax.send(null);

//retorna o status do cliente
ajax.onreadystatechange = function(){
    if(ajax.readyState === 4){
        console.log(JSON.parse(ajax.responseText));
    }
}*/

//promises, funções assincronas
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
       var ajax = new XMLHttpRequest();

       ajax.open('GET', 'https://api.github.com/users/victovf');
       ajax.send(null);

       ajax.onreadystatechange = function(){
           if(ajax.readyState === 4){
               if(ajax.status === 200){
                   resolve(JSON.parse(ajax.responseText));
               } else{
                   reject('Erro na Requisição');
               };
           };
       };
    });
}
/*
minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });*/
//todo esse codigo usando o axios se torna isso:

axios.get('https://api.github.com/users/victorvf')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });