const todoForm = document.querySelector('#new-todo-form');
const todoList = document.querySelector('#list');
const todoInput = document.querySelector('#todo-input');
const todotemplate = document.querySelector('#list-item-template');
const darkBtn = document.getElementById('darkBtn');

let todos = [];
const KEY_PREFIX = 'ADVANCED_TODO';
const TODO_KEY = `${KEY_PREFIX}-TODO`; // Corrected string interpolation

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const todoText = todoInput.value
    if (todoText === '') return; // Prevent adding empty todos
    todoInput.value = '';
    todos.push(todoText);
    renderTodo(todoText);
    saveTodo();
});

darkBtn.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('dark'); // Toggle the dark class on the body
});
function renderTodo(todoName) {
    const clone = todotemplate.content.cloneNode(true);
    const nodeList = clone.querySelector('.list-item');
    const list = nodeList.querySelector('[data-list-item-text]');
    list.innerText = todoName;
    todoList.appendChild(clone);
}

function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos)); // Save todos to local storage
}
