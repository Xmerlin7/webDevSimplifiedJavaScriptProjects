/**
 * @description: This is a function that returns another function.
 * The inner function has access to the outer function's variables.
 * This is called a closure that made me psyco.
 * 
 * @function
 */
function setup(varaiable) {

    let c = 10
    return function func(varaiable2) {
        console.log(varaiable)
        console.log(varaiable2)
        console.log(c)

    }
}
let closure = setup(1)
closure(2)
const a = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
console.log(a[1][2])
