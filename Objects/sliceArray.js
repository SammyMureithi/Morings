const prime=[1,23,43,981,846];

const newPrime=prime.slice();
//slice with no arguments copy the  whole array
console.log(newPrime)

const copyPrimeUsingSlice=prime.slice();

const copyPrimeUsingSpreadOperator=[...prime];
prime.push(5);

console.log(prime);
//the slice and  spread operator allows for shallow copy
//once you change one element in the master it doesn't copy the changes to the rest
console.log(copyPrimeUsingSlice);
console.log(copyPrimeUsingSpreadOperator)

/**
 * We could provide an argument to the slice operator
 * the first argurment is the index where the slice should begin 
 * the seccond is the index before which it should end 
 */
const weekDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

console.log(weekDays.slice(2,5))