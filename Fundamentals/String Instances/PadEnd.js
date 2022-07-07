/**
 * pad the current string with the given string (repeated if needed) so that the resulting string reaches 
 * the given length  
 */
const str1="Breaded Mushroom";

console.log(str1.padEnd(25,'.'))
const str2='200';

console.log(str2.padEnd(5))
/**
 * Similar case to the pad start
 * pads the current string with another string (multiple times ,if need be)
 * until the resulting string reaches the given length
 * The padding is applied from the start of the current string
 */
console.log(str1.padStart(29,".*"))