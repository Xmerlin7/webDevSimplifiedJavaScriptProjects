document.addEventListener('click', e => {
    e.preventDefault()
    //get the clicked button
    if(!e.target.matches('.expand-button')) return
    // get the id of the clicked button
    //add show
    showCard(e)
    //remove show
    removeCard(e)
    //toggle button
    toggleCard(e)

})
function showCard(e){
    const hitId = e.target.dataset.id
    // next class
    const nextSibling = e.target.parentElement.nextElementSibling;
    nextSibling.classList.add('show'); 
    console.log(nextSibling)
}
