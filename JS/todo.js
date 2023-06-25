const toDoForm=document.querySelector("form#todo-form");
const toDoInput=document.querySelector("form#todo-form input");
const toDoList=document.querySelector("ul#todo-list");
const TODOS_KEY="todos";
let toDos=[];
function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((todo)=>todo.id!==parseInt(li.id));   
    saveToDos(); 
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText="  X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);


