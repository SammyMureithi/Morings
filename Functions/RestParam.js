/**
 * Rest parameters allows us to add any number of parameters to our function
 * not a specified number of parameters
 */

function myArgs(master,...restParam){

    return restParam.map((x) => master*x);
}
let calc=myArgs(2,7,3,7,4,8,4);

console.log(calc);