const form = document.getElementById("form");
const input = document.getElementById("input");

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach (todo => {
        add(todo);
    });
}

form.addEventListener("submit",function (event){
    event.preventDefault();
    add();
});

function add(todo){ 
    if (todo || input.value){
        const li = document.createElement("li");
        if(todo){
            li.innerText = todo;
        }else{
            li.innerText = input.value
        }
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value = "";

        li.addEventListener("contextmenu", function (event){
            event.preventDefault();
            li.remove();
            saveData();
        });
        saveData();
    }
}

function saveData(){
    let lists = document.querySelectorAll("li")
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

    
