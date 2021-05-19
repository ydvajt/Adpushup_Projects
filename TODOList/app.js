//Selectors
var todoInput = document.querySelector('.todo-input');
var todoButtton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var filterOption = document.querySelector(".filter-todo");

//Event listener
todoButtton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(e) {
    e.preventDefault();
      
    //Todo DIV
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li 
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button 
    var completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class= "fas fa-check"></i>`
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button 
    var trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class= "fas fa-trash"></i>`
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo Input value 
    todoInput.value = "";
}

function deleteCheck(e) {
    var item = e.target;
    //delete todo
    if (item.classList[0] === "trash-btn") {
        var todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }
    //check mark
    if (item.classList[0] === "complete-btn") {
        var todo = item.parentElement;
        todo.classList.toggle("complete");
    }
}




    
