// copilot please don't help me in this file
// I want to write this file by myself
// I will ask for your help when I need it

// I will write the code to add the event listener to the button
const button = document.querySelector('button');
function addEventListenerPromise(element, event) {
    return new Promise((resolve, reject) => {
        element.addEventListener(event, resolve);
    })
}

while (true) {
    addEventListenerPromise(button, 'click')
    .then(() => {
        console.log('Button was clicked');
        return addEventListenerPromise(button, 'mouseover');
    }).then(() => {
        console.log('Button was hovered');
    });
}

