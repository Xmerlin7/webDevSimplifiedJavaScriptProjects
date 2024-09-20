const button = document.getElementById('button');
callback = () => {
    alert('Button clicked');
}
function addClickEventListner(element, callback) {
    element.addEventListener('click', callback);
}
addClickEventListner(button, callback);