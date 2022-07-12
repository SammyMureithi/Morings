let a,b,rest;
[a,b]=[10,20];

console.log(b);
//we are asssignimng the rest of the array to a variable named "rest"
[a,b,...rest]=[29,83,3,23,12,83,92,39]

console.log(rest);

//we could also use destructuring to swap variables
let a1=2,b1=4;
[a1,b1]=[b1,a1];

console.log(a1);

//Parse an array returned from a function

function f(){

    return [23,3,32]
}
const [a2,b2,c2]=f()

console.log(a2);

//we could also ignore some return value,let ignore the second element in our array
const [a3,,c3]=f()
console.log(c3);

//object destructuring
console.log("Object destructuring")
const credientials={
    id:42,
    isVerified: true
}
const {id,isVerified}=credientials;

console.log(id);
