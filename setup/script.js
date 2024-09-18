const test = document.querySelectorAll('button')
test.forEach((button) => {
    button.addEventListener('click', () => {
        const currentClicks = parseInt(button.dataset.clicks);
        button.dataset.clicks = currentClicks + 1;
    });
});