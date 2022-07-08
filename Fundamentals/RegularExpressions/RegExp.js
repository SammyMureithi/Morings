const sentence="Hello am a ninja,as you know ninja llove Food,a ninja is a Happy animal,happy ginjall";
const sent5="Hello";
const sent6="Hello1";

const regex=/[ng]inja/g;

console.log(sentence.replace(regex,"Dog"));

const rangeRegex=/[A-Z]/g;

console.log(sentence.replace(rangeRegex,"p"));
//we trying to match characters btn k-u that is repeated 3 times 
const rangeRepeatRegExp=/[k-u]{3}/g;

console.log(sentence.replace(rangeRepeatRegExp,"121"));
//we are finding the match that has characters btn 'a-l' with repeating 2-3 times
const rangeRepeatRangeRegExp=/[a-l]{2,3}/g;

console.log(sentence.replace(rangeRepeatRangeRegExp,"7070"));

const filter=/l+/g;

console.log(sentence.replace(filter,'L'))

//we are trying to match only 5 word character nothing more nothing less

const fiveWord=/^[a-z]{5}$/ig;

console.log(sent5.replace(fiveWord,"00000"));

//let's check if this would work for a 6 character word
console.log(sent6.replace(fiveWord,"11111"));
//The above does not replace since it does not meet our regex condition