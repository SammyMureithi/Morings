/**
 * The split() method takes a pattern and divides a String into an ordered 
 * list of substrings by searching for 
 * the pattern, puts these substrings into an array, and returns the array.
 */
 const str = 'The quick brown fox jumps over the lazy dog.';

 const words = str.split(' ');
 console.log(words[3]);
 console.log(words)
 // expected output: "fox"
 
 const chars = str.split('');
 console.log(chars[8]);
 console.log(chars)
 // expected output: "k"
 
 const strCopy = str.split();
 console.log(strCopy);

 const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand';

 const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)
console.log(nameList)
 