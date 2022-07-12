/**
 * Rest parameters allows us to add any number of parameters to our function
 * not a specified number of parameters
 */

function myArgs(...restParam){

    return restParam.map((x) => 10*x);
}
let calc=myArgs(2,7,3,7,4,8,4);

console.log(calc);

function sum(...theArgs){
    let total=0;
    for (const args of theArgs){
        total+=args
    }
    return total;
}

console.log(sum(2,7,3,7,4,8,4));

//Rest parameter combination with other parameter
function mutiplier(mult,...restParam){
    return restParam.map((res) => mult*res)
}

console.log(mutiplier(2,7,3,7,4,8,4))