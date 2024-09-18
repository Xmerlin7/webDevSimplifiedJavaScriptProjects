const form = document.querySelector('[data-form]');
const link = document.querySelector('[data-link]');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
});

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
});
