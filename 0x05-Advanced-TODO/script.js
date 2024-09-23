const todoForm = document.querySelector('#new-todo-form');
const todoList = document.querySelector('#list');
const todoInput = document.querySelector('#todo-input');
const todotemplate = document.querySelector('#list-item-template');
const darkBtn = document.getElementById('darkBtn');

// TODO: Add TODOS
todoForm.addEventListener('submit', e => {
    e.preventDefault()
    const todoText = todoInput.value
    renderTodo(todoText)

    todoInput.value = ''
})
function renderTodo(todoText){
    const clone = todotemplate.content.cloneNode(true)
    
    
}
// TODO: Delete TODOS
// TODO: complete TODOS
// TODO: Save TODOS
//TODO: Load TODOS











darkBtn.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('dark'); // Toggle the dark class on the body
});
