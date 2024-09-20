function setTimePromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(`Waited for ${time} ms`)
            , time);
    })
}

function setTimePromiseError(time) {
    return new Promise((resolve, reject) => {
        setTimeout(reject(`Waited for ${time} ms`)
            , time);
    })
}

async function setTime(time) {
    try {
        console.log('Start before error');
        let message = await setTimePromise(time);
        console.log(message);
        message = await setTimePromiseError(time);
        console.log(message);
        message = await setTimePromise(time);
        console.log(message);
    }catch (error) {
        console.error(error);
    }
}
setTime(200);