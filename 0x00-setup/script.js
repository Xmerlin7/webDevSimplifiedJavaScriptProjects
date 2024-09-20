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

setTimePromise(1000).then(() => {
    console.log(1);
})

function setTimePromise(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}