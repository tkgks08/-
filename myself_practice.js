const form = document.getElementById("form");
const ul = document.getElementById("ul");
const input = document.getElementById("input");

const todos = JSON.parse(localStorage.getItem("todos"));

form.addEventListener("submit", function (event){
    event.preventDefault();
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
    saveData();
})

if (todos){
    todos.forEach(todo =>{
        const li = document.createElement("li");
        li.innerText = todo.text;
        li.classList.add("list-group-item");
        ul.appendChild(li);

        if (todo.completed){
            li.classList.add("text-decoration-line-through");
        }

        li.addEventListener("contextmenu", function (event){
            event.preventDefault();
            li.remove();
            saveData();
        });

        li.addEventListener("click", function (){
            li.classList.toggle("text-decoration-line-through");
            saveData();
        });

        saveData();
        });
}

function saveData(){
    let lists = document.querySelectorAll('li');
    console.log(lists);
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