document.addEventListener('click',  e => {
    if(e.target.matches('#btn1'))
        console.log('button 1 clicked');
})
sessionStorage.setItem('name', 'Merlin');