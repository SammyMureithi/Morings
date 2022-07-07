const sentence="Hello am a ninja,as you know ninja lllove Food,a ninja is a Happy animal,happy ginjall";

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