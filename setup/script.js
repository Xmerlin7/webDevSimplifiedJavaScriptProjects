/**
 * Function description here.
 * 
 * @function
 */
function func(x, callback){
    console.log(callback(x));
}
func(2, fn  => fn + 1 )
