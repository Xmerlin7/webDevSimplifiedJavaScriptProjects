// function that takes arguments and passes them to the callback
function processData (dataA, dataB, callback) {


    // call the callback function with the processed data
    callback(dataA, dataB);
}
function processA (dataA, dataB){
    // perform some operations on the data
    let resultA = dataA * 2;
    let resultB = dataB;
    // display the results on console
    console.log('Processed Data:', resultA, resultB);
}
function processB (dataA, dataB){
    // perform some operations on the data
    let resultA = dataA;
    let resultB = dataB / 3;
    // display the results on console
    console.log('Processed Data:', resultA, resultB);
}
dataA = 5
dataB = 15
processData(dataA, dataB, processA);
processData(dataA, dataB, processB);