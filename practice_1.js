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
            li.innerText = todo.text;
        }else{
            li.innerText = input.value
        }
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value = "";

        li.addEventListener("click", function (){
            li.classList.toggle("text-decoration-line-through");
            saveData();
        });

        if (todo && todo.completed){
            li.classList.add("text-decoration-line-through");
        }

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
        let todo = {
            text: list.innerText, 
            completed: list.classList.contains("text-decoration-line-through")
        }
        todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

    
