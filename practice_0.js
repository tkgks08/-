const input = document.getElementById("input");
const form = document.getElementById("form");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo =>{
      add(todo);
    });
}

form.addEventListener("submit", function(){
    
    if (input.value.length > 0){
        add();
    }
});

  function add(todo){
    if(todo){
        input.value = todo;
    }

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
    saveData();
  }

  function saveData(){
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach (list => {
        todos.push(list.innerText);
    });
   localStorage.setItem('todos', JSON.stringify(todos));
  }

