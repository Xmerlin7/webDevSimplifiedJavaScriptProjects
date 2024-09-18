//! Select All Elements
const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')
const list = document.querySelector('#list')
//! When the user submit the form add the task to the list

form.addEventListener('submit', e => {
    e.preventDefault()
    //?create Item which inserted in input
    const item = document.createElement('div')
    item.innerText = input.value
    
        //? add a new Item to the list
    item.classList.add('list-item') 

    //? clear the input 
    input.value = ''
    //? remove the task if finished
    item.addEventListener('click', () => {
        item.remove()
    })
})
