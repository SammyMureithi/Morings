const superman=["Catwoman","Storm","Jessie Jones"];
superman.push("Wonder woman");
//push addds the element at the end of the array
console.log(superman)
//It returns the length of the array after the amnipulation
console.log(superman.push("Mure"))
//we can also add our elements using the unshift() method

superman.unshift("Kamaa");
//you notice that unshift adds the element at the beginning of our array
//It retuns the length of our new array after the manipulation
console.log(superman)

//we can also use the spread operator to add elements to our array

const myCities=["Nairobi","Mombasa"];
const allCities=[...myCities,"Kisumu","Nakuru"]
console.log(allCities);

//we can remove element of our array using shift() and pop() method
/**
 * they both don't take arguments
 * they remove a single element
 * they return the element that is removed 
 * they are destructive methods
 */
//Pop()
console.log(superman.pop()+ " Am the removed  last element from the array");
console.log(superman);

//Unshift()
console.log(superman.shift()+" Am the removed first element of the arrray")
console.log(superman)