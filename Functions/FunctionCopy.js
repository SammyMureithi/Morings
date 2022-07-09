function calcSum(num1,num2){

    return num1+num2;
}
//we can copy our fuction inside another variable
let myCalc=calcSum;

//let call our function through the variable we had
console.log(myCalc(3,10));
//same output just like our variable
console.log(calcSum(3,10));