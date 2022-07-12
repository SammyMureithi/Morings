function sum(x,y,z){
    return x+y+z;
}

const numbers=[8,7,6];

console.log(sum(...numbers));

// function RestParam(master){
//     //const sum=0;
//    return master;
    
// }
// const num=(4,47,474,848)

// console.log(RestParam(master,...num));

function myFunction(x, y, z) { 
   return x+y+z;
}
let args = [0, 1, 2];
myFunction(...args);
console.log(myFunction(...args))