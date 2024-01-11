document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.getElementById("create-task-form" );
const todoList = document.querySelector('#tasks');
const todoDiv = document.getElementById('list');
const todoInput = document.getElementById('new-task-description');

// add eventlistener
form.addEventListener('submit', addTask)
todoList.addEventListener('click', deleteTask)

// create a function add
function addTask(event){
  event.preventDefault();
  // create a list
  let todoLi = document.createElement('li')
  todoLi.innerText = todoInput.value
  todoLi.classList.add('todo-list');
  // create delete button
  let delBtn= document.createElement('delete');
  delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
  delBtn.classList.add('todo-btn');
  todoLi.appendChild(delBtn)
  // append document
  todoList.appendChild(todoLi);

  // clear value
  todoInput.value = ''
}
function deleteTask(e){
  const item = e.target;
  if(item.classList[0] === 'todo-btn'){
    const todoRemove = item.parentElement;
    todoRemove.remove()
  }

}
});
