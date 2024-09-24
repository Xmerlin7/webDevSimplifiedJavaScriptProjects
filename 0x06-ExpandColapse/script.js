document.addEventListener('click', e => {
    e.preventDefault()
    //get the clicked button
    if(!e.target.matches('.expand-button')) return
    //toggle button
    toggleCard(e)
})
function showCard(e){
    // next class
    const nextSibling = e.target.parentElement.nextElementSibling;
    nextSibling.classList.add('show'); 
    e.target.innerText = 'Collapse'
    console.log(nextSibling)
}
function removeCard(e){

}
function toggleCard(e){
    if (e.target.innerText === 'Collapse'){
        //remove show
        removeCard(e)
    }else{
        showCard()
    }
}

