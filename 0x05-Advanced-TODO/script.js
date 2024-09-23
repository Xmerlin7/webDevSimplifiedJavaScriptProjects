const todoForm = document.querySelector('#new-todo-form')
const todoList = document.querySelector('#list')
const todoInput = document.querySelector('#todo-input')
const todotemplate = document.querySelector('#list-item-template')
const todoCheckBox = document.querySelector('[data-list-item-checkbox]')

todoForm.addEventListener('submit', e => {
    e.preventDefault()
    const todoText = todoInput.value
    console.log(todoText)
    renderTodo(todoText)
    todoInput.value = ''
})
function renderTodo(){
    // No operation
}