console.log("Starting")
setTimeout(() => {
    console.log("First setTimeout")
    setTimeout(() => {
        console.log("Second setTimeout")
        setTimeout(() => {
            console.log("Third setTimeout")
        }, 0)
    }, 0)
}, 0)