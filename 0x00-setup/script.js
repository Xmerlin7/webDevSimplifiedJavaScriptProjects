// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 console.log(4)
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000)

setTimePromise(1000)
    .then(() => {
        console.log(1);
        return setTimePromise(1000);
    }).then(() => {
        console.log(2);
        return setTimePromise(1000);
    }).then(() => {
        console.log(3);
        return setTimePromise(1000);
    }).then(() => {
        console.log(4);
    });


function setTimePromise(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}