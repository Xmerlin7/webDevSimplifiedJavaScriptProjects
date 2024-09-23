const todoForm = document.querySelector('#new-todo-form');
const todoList = document.querySelector('#list');
const todoInput = document.querySelector('#todo-input');
const todotemplate = document.querySelector('#list-item-template');
const darkBtn = document.getElementById('darkBtn');
const KEY_PREFIX = 'ADVANCED_TODO'
const KEY_TODO = `&{KEY_PREFIX}-KEY`
let todos = loadTodos()
todos.forEach(renderTodo);
// TODO: Add TODOS
todoForm.addEventListener('submit', e => {
    e.preventDefault()
    const todoText = todoInput.value
    if(!todoText) return
    renderTodo(todoText)
    todos.push(todoText)
    saveTodos()
    todoInput.value = ''
})
function renderTodo(todoText){
    const clone = todotemplate.content.cloneNode(true)
    const cloneText = clone.querySelector('[data-list-item-text]')
    cloneText.innerText = todoText
    todoList.appendChild(clone)
    
}
// TODO: Save TODOS
function saveTodos(){
    localStorage.setItem(KEY_TODO, JSON.stringify(todos))
}
//TODO: Load TODOS
function loadTodos(){
    const loadedTodos = localStorage.getItem(KEY_TODO)
    return JSON.parse(loadedTodos) || []
}
// TODO: Delete TODOS
// TODO: complete TODOS











darkBtn.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('dark'); // Toggle the dark class on the body
});
