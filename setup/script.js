window.addEventListener('resize', () => {
    console.log('window resized')
})
const idOfDev = document.getElementById('div-id')
idOfDev.style.color = 'red'
const classIds = document.getElementsByClassName('div-class')


Array.from(classIds).forEach((Element) => {
    Element.style.color = 'green'  
})
classIds[0].style.color = 'blue'