/**
 * returns a part of the string between the start and end index
 * or to the end of the string
 */
const str="Mozilla";

console.log(str.substring(3));

console.log(str.substring(3,5));
/**
 * We observe that slice and sub string are almost similar
 * With subString it swips whenever the start index is greater than the end index unlike with
 *  slice it prints an empty string
 */

console.log("Operation with subString "+str.substring(5,2));

console.log("Operation with Slice "+str.slice(5,2))

/**
 * If either or both the arguments are negative or NaN ,sub String treats them as if the are zero
 * Slice also treats NaN as zero but whenever a negative is placed as an argument it counts it
 * from the backwards 
 */
console.log(str.substring(-2,5));

console.log(str.slice(-5,-2));