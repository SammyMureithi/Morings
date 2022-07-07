//Creating strings
const strin1="Hello am a string";

const string2='Hello am also a string';

const string3= new String("Hello am also another string");

//we can access our characters 

console.log(strin1.charAt(9));

console.log(string2[2]);

//we could also compare our strings
if(strin1< string2){
    console.log("String1 is less than string2");
}
else if(strin1> string2){
    console.log("String2 is less than string1");
}
else{
    console.log("String1 is equal to string2")
}