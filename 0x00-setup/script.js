function setTimePromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })
}
setTimePromise(1000)
    .then(() => {
        console.log('Hello World');
    })