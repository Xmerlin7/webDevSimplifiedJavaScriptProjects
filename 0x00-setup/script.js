function setTimePromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(`Waited for ${time} ms`)
            , time);
    })
}
async function setTime(time) {
    const message = await setTimePromise(time);
    console.log(message);
}
setTime(200);