/**
 * Returns a new string with some or all matches of a pattern replaced by the replacement
 * The pattern can be a string or RegExp
 * 
 */
 const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?Dog';
const regExp=/dog/ig;
 console.log(p.replace('dog', 'monkey'));
 console.log(p.replace(regExp,'monkey'))
 //replaceAll ==>Works the same just ike for replace