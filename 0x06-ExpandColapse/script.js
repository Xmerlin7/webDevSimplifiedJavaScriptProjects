document.addEventListener('click', e => {
    e.preventDefault()
    //get the clicked button
    if(!e.target.matches('.expand-button')) return
    // get the id of the clicked button
    const hitId = e.target.dataset.id
    // next class
    const nextSibling = e.target.parentElement.nextElementSibling;
    console.log(nextSibling)
    //add show
})