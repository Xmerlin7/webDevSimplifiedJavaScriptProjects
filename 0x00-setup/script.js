setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
            setTimeout(() => {
                console.log(4)
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000)

const promise = new Promise((resolve, reject) => {
    const sum = 1 
    if (sum === 2){
        resolve('Success')
    }
    else{
        reject('Error')
    }
})
promise.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})
console.dir(promise)