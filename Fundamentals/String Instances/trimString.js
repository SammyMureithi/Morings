/**
 * Removes white space from both ends of a string and retuns a new
 *  string without modifying the existing string
 */

const greet="  Hello world!  ";

console.log(greet.trim());

//we can also have trimStart which trims the start only
console.log(greet.trimStart());

//we can also have trimEnd which trims the end only

console.log(greet.trimEnd());