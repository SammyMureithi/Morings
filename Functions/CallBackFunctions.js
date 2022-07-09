/**
 * A CALLBACK is a function passed to another function as an argument
 * the callback helps the main  function to determine which of the call back functions to execute
 */

let add=function(a,b){
    console.log("Addition in Progress...");
    return a+b;
}

let multiply=function(a,b){
    console.log("Multiplication in Progress...");
    return a*b;
}

let calc=function(num1,num2,callBack){
    if(typeof callBack ==="function"){

        return callBack(num1,num2);
    }
    else{
        return "Ops no such function";
    }

   
}

console.log(calc(20,17,multiply));
let areaCal=function(radius,callBack){

    return callBack(radius);
};

console.log(areaCal(24,function(radius){

    return (22/7)*radius*radius;
}))

