/**
 * Function description here.
 * 
 * @function
 */
function func(x, callback) {
    console.log(callback(x));
}
func(2, variable => variable * 2);
