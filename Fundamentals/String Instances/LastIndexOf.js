/**
 * Searcges the entere string and returns the index of the last occcurance of the
 * searching string 
 */
const sentence="A dog is pet,dog is human guard,dog can be good friends to human beings";

const str1='dog';
//let's check the fisrt occurence of our string
console.log("First occurence " +sentence.indexOf(str1));
//let's check the last occurence of our string
console.log("Last occurence of our string "+sentence.lastIndexOf(str1))