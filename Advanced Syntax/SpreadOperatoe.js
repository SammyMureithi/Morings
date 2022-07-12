const arr=[1,2,31,4];
arr.push(6);

console.log(arr);

const arr1=[...arr,7]

console.log(arr1);

//we could also spread an Object

let carObj={
    name: "BMW",
    color: "green"
}
//we are changing the property color from green to red
let carObj1={...carObj,brand: "Toyota",year: 2021,color: "red"};

console.log(carObj1);

//we can access the object properties with destructuring
let {year,name}=carObj1;

console.log(name);
console.log(year);
//we could also destructer our array
let [num1,num2,num3]=arr;

console.log(num3);
