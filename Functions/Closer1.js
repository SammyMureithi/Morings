const pet=function(name){
    //outer function defines a variable 'name'
    const getName=function(){
        return name;
    }
    return getName();
}

console.log(pet("Mure"));

function outerFun(outerFun){
    const greetings="Hello";

    return function inner(innerFun){
        console.log("Am form Inner Fun " + innerFun);
        console.log("Am from outer function " + outerFun);
        console.log(greetings)
    }

}

const newFun=outerFun("myOuter");
newFun("myInnerFun");