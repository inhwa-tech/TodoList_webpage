const toDoFrom = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoFrom.querySelector("input");
const TODOS_KEY = "todos";

let toDos = [];  //todo 배열 

function saveToDos() { //todo list 저장
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) { //todo list 삭제 
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) { //todo list 화면에 표현
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✔️"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { //todo 입력 
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

//todo 엔터시 저장 이벤트 
toDoFrom.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

