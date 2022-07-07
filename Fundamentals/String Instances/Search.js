// executes a search for a match between a regular expression and this String object
const paragraph = 'The quick brown fox jumps over ! the lazy dog. If the dog barked, was it really lazy?';
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
console.log(paragraph.charAt(paragraph.search(regex)));

let str="hey JudE";
let re=/[A-Z]/g;
let dot=/[.]/g;

console.log(str.search(re));

console.log(str.search(dot))