function setTimePromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(reject(`Waited for ${time} ms`)
            , time);
    })
}

function setTimePromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(reject(`Waited for ${time} ms`)
            , time);
    })
}
async function setTime(time) {
    try {
        let message = await setTimePromise(time);
        console.log(message);
        message = await setTimePromise(time);
        console.log(message);
    }catch (error) {
        console.error(error);
    }
}
setTime(200);