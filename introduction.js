/*var buttonElement = document.querySelector('#app button');
var div = document.querySelector('#ex');
var boxElement = document.createElement('div');

buttonElement.onclick = function(){
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = "red";

    div.appendChild(boxElement);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

boxElement.onmouseover = ()=>{
    boxElement.style.backgroundColor = `${getRandomColor()}`;
}

//var listElement = document.querySelector('#app2 ul');
//var nomes = ["Diego", "gabriel", "victor"];
var input = document.querySelector('#app2 input');

function listar(){
    listElement.innerHTML = '';
    for(nome of nomes){
        var li = document.createElement('li');
        var text = document.createTextNode(nome);

        li.appendChild(text);
        listElement.appendChild(li);
    }
}

//listar();

function addli(){
    var val = input.value;
    nomes.push(val);

    listar();
}

//buttonElement.onclick = addli;
var checkIdade = function(idade){
    return new Promise(function(resolve, reject){
        if(idade>=18){
            setTimeout(resolve("Maior que 18"), 10000);
        }else {
            setTimeout(reject("Menor que 18"), 10000);
        }
    });
};

checkIdade(22)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });
*/

var inputElement = document.querySelector('#app2 input');
var buttonElement = document.querySelector('#app2 button');
var listElement = document.querySelector('#app2 ul');

function api(){
    var inputValue = inputElement.value;
    axios.get(`https://api.github.com/users/${inputValue}/repos`)
    .then((response)=>{
        inputValue = '';
        listElement.innerHTML = '';
        for(repor of response.data){
            var todoElement = document.createElement('li');
            var textElement = document.createTextNode(repor.name);

            todoElement.appendChild(textElement);
            listElement.appendChild(todoElement);
        }
    })
    .catch((error)=>{
        console.log(error);
    });
}

buttonElement.onclick = api;