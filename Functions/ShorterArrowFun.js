const array=[
    "Hydrogen",
    "Helium",
    "Berylium",
    "Boron"
]

const result=array.map(function(s){
    return s.length;
})

console.log(result);
const result1=array.map((s) => s.length);

console.log(result1);