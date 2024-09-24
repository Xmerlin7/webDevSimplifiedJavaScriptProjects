import { v4 as uuidv4 } from 'uuid';

const todoForm = document.querySelector('#new-todo-form');
const todoList = document.querySelector('#list');
const todoInput = document.querySelector('#todo-input');
const todoTemplate = document.querySelector('#list-item-template');
const darkBtn = document.getElementById('darkBtn');
const KEY_PREFIX = 'ADVANCED_TODO';
const KEY_TODO = `${KEY_PREFIX}-KEY`;
let todos = loadTodos();
todos.forEach(renderTodo);

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const todoText = todoInput.value.trim(); // Trim to avoid empty strings with spaces
    if (!todoText) return;

    const todoObj = {
        text: todoText,
        completed: false,
        id: uuidv4()
    };
    
    todos.push(todoObj);
    renderTodo(todoObj);
    saveTodos();
    todoInput.value = '';
});

// Function: Render a Todo Item
function renderTodo(todo) {
    const clone = todoTemplate.content.cloneNode(true); // Clone the template
    const cloneText = clone.querySelector('[data-list-item-text]');
    const cloneListItem = clone.querySelector('.list-item');
    const checkbox = clone.querySelector('[data-list-item-checkbox]');

    // Set attributes and text content based on todo object
    cloneListItem.dataset.id = todo.id; // Set the unique ID for identification
    cloneText.innerText = todo.text;
    checkbox.checked = todo.completed; // Set checkbox state based on completion

    todoList.appendChild(clone); // Add the cloned item to the list
}

// Function: Save TODOS to Local Storage
function saveTodos() {
    localStorage.setItem(KEY_TODO, JSON.stringify(todos));
}

// Function: Load TODOS from Local Storage
function loadTodos() {
    const loadedTodos = localStorage.getItem(KEY_TODO);
    return JSON.parse(loadedTodos) || [];
}

// Event Listener: Complete TODOS (Checkbox Change)
todoList.addEventListener('change', e => {
    // Ensure that the change event is on a checkbox
    if (!e.target.matches('[data-list-item-checkbox]')) return;

    // Find the closest list item and get its ID
    const listItem = e.target.closest('.list-item');
    const todoId = listItem.dataset.id;

    // Find the matching todo item and update its completed status
    const foundTodo = todos.find(todo => todo.id === todoId);
    if (foundTodo) {
        foundTodo.completed = e.target.checked; // Update the completed status
        saveTodos(); // Save the updated list to Local Storage
    }
});

// Event Listener: Delete TODOS
todoList.addEventListener('click', e => {
    if (!e.target.matches('[data-button-delete]')) return;

    // Find the closest list item and get its ID
    const listItem = e.target.closest('.list-item');
    const todoId = listItem.dataset.id;

    // Remove the item from the DOM
    listItem.remove();

    // Filter out the deleted item from the todos array and save
    todos = todos.filter(todo => todo.id !== todoId);
    saveTodos();
});

// Event Listener: Toggle Dark Mode
darkBtn.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('dark'); // Toggle the dark class on the body
});
