const array=(function(thingsToAdd){
    const base=3;
    return [
        function(){
            return base+thingsToAdd;
        },
        function(){
            return base;
        },
    ];
})
(2);

console.log(array[0]());
console.log(array[1]());

// MDN Resource

var pet=function(name){
    //the outer function defines a variable called name
    var getName=function(){
        return name;
        //the inner variable has access to the "name" varible of the outer
    }
 return getName;
 //returning the inner function dtherby making it available to the outer scope   
}

var myPet=pet("Shaddy");

console.log(myPet());