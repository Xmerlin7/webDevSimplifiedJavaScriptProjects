import { format } from 'date-fns';
const dateBtn = document.querySelector('.date-picker-button')
const dateCard = document.querySelector('.date-picker')
dateBtn.addEventListener('click', e => {
    e.preventDefault()
    dateCard.classList.toggle('show')
    const today = new Date();
    dateBtn.innerText = format(today, 'MMM do, yyyy')
})
