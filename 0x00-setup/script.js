
document.addEventListener('click', function (e) {
    if (e.target.id === '1') {
        e.preventDefault(); // prevent the default action
        console.log('Link clicked');
    }});

