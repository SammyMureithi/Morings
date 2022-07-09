function count(){
    return function(n){
        if(n<=1){
            return 1
        }
        return n*arguments.callee(n-1);
    }
}

console.log(count()(5));

//lets check a nested function

function addSquare(a,b){
    function square(x){
        return x*x;
    }
    return square(a)+square(b);
}

console.log(addSquare(2,3));

function satrurday(activity="roller-skate"){
  

     return ('This Saturday I want to ' +activity);
}
console.log(satrurday());