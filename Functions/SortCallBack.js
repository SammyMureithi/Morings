let myArray=[
    {
        num: 7,
        fruit: "cabbage"
    },
    {
        num: 8,
        fruit:"Tomatoes"
    },
    {
        num:10,
        fruit: "Pineapples"
    }
]
myArray.sort(function(val1,val2){
    if(val1.num>val2.num){
        return -1;
    }
    else{
        return 1;
    }
})

console.log(myArray)