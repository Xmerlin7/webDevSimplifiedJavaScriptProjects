const btn = document.querySelector('[data-btn]')
function clicked(){
    console.log('Button Clicked')
}
btn.addEventListener('click', clicked)
btn.addEventListener('mouseenter', clicked)
