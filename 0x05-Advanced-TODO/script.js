const todoForm = document.querySelector('#new-todo-form')
const todoList = document.querySelector('#list')
const todoInput = document.querySelector('#todo-input')
const todotemplate = document.querySelector('#list-item-template')
const todoCheckBox = document.querySelector('[data-list-item-checkbox]')
let todos = []
todoForm.addEventListener('submit', e => {
    e.preventDefault()
    const todoText = todoInput.value
    todoInput.value = ''
    renderTodo(todoText)
    saveTodo()

})
function renderTodo(todoName){
    const templateClone = todotemplate.content.cloneNode(true)
    const textSpan = templateClone.querySelector('[data-list-item-text]')
    textSpan.innerText = todoName
    todoList.appendChild(templateClone)
}
function saveTodo(){
    // Empty
}