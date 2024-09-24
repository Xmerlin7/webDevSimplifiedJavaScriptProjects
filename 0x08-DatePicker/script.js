console.log('hi')
const dateBtn = document.querySelector('.date-picker-button')
const dateCard = document.querySelector('.date-picker')
dateBtn.addEventListener('click', e => {
    e.preventDefault()
    dateCard.classList.toggle('show')
})