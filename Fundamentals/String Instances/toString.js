/**
 * The toString() method returns a string representing the specified object.
 */
const myObj=new String('foo');

const convertedToString=myObj.toString();

console.log(typeof myObj);
console.log(typeof convertedToString); 
//The following display the binary objectof a string object

const x = new String('13');

console.log(parseInt(x).toString(2))
//console.log(parseInt(x)+13)