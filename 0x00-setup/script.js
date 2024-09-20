const button = document.getElementById('button');
const callback = () => {
    alert('Button clicked');
}
function addClickEventListner(element, callback) {
    element.addEventListener('click', callback);
}
addClickEventListner(button, callback);