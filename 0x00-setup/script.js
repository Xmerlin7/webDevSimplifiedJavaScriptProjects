
document.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.id === '1')
        console.log('Button 1 clicked')
    else if (e.target.id === '2')   
        console.log('Button 2 clicked')
    else if (e.target.id === '3')
        console.log('Button 3 clicked')
    else if (e.target.id === '4')
        console.log('Button 4 clicked')
})
