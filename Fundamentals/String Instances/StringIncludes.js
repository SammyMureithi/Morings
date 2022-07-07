/**
 * Performs a  case-sensitive search to check if a sting may be found 
 * within another string
 * Retuns true or false
 */

const sentence="The quick brown fox jumps over the lazy dog."
const word='fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
