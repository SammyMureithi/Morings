let add=function(a,b){
    console.log("Calculation in progress ...")
    return a+b;
}

let substract=function(a,b){
    console.log("Subtraction in progress ...");
    return a-b;
}

let calc=function(num1,num2,callback){

    return callback(num1,num2);
}

console.log(calc(10,16,add));

let area=function(radius,calculate){
    return calculate(radius);
}

console.log(area(10,function(rad){
    return (22/7)*rad*rad;
}))

let geometry=function(radius,cal){

    return cal(radius);
}

let perimeter=function(radius){
    return (22/7)*2*radius;
}
let area1=function(radius){
    return (22/7)*radius*radius
}

console.log(geometry(7,perimeter));