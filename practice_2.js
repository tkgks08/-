form = document.getElementById("form");
input = document.getElementById("input");
ul = document.getElementById("ul");

todos = JSON.parse(localStorage.getItem("todos"));

form.addEventListener("submit", function (event){
    event.preventDefault();
    if (input.value.length > 0){
        add();
    }
});

if(todos){
    todos.forEach(todo=>{
        add(todo)
    });
}

function add(todo){
    const li = document.createElement("li");
    if (todo){
        li.innerText = todo.text;
    }else{
        li.innerText = input.value;
    }
    if(todo.completed){
        li.classList.add("text-decoration-line-through");
    }
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value ="";
    
    li.addEventListener("contextmenu", function (event){
        event.preventDefault();
        this.remove();
        saveData();
    });

    li.addEventListener("click", function (){
        li.classList.toggle("text-decoration-line-through");
        saveData();
    });
saveData();
}

function saveData(){
    const lists = document.querySelectorAll('li');
    let todos = [];

    lists.forEach(list =>{
      let todo = {
            text: list.innerText, 
            completed: list.classList.contains("text-decoration-line-through")
        }
        todos.push(todo);
    });
localStorage.setItem("todos", JSON.stringify(todos))
}
