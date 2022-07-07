function payFee(isMember){
    return (isMember ? "Your fee has beeen Paid": "Please pay your Fee");
}

console.log(payFee(true));
console.log(payFee(false));

function canVote(isMinor){
    return (isMinor ?"Cannot Vote": "Eligible to vote");
}

console.log(canVote(false));

//Dealing with null values
let greeting= person=>{
    let name= person? person.name: "Stranger"
    return 'Howldy '+name
}
console.log(greeting(null))