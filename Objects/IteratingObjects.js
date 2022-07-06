let myArray=['a','b','c','d','e','f'];

for (let i =0;i<myArray.length;i++){
    console.log(myArray[i]);
}

//we can also use the while loop
console.log('Using While loop')
let j=0;
let myNewArray=['a','b','c','d','e','f'];
while(j<myNewArray.length){
    console.log(myNewArray[j++])
}
//We can easly do this using the for ..of 

console.log('using for ..of');

for(element of myArray){
    console.log(element);
}

//We can also use for .. of to iterate over a string

for (const myChar of 'Hello Sammy'){
    console.log(myChar);
}

//we can use for ... of or for ...in to iterate through the properties of an object

const Address={
    street1: '11 Broadways',
    street2 : '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: '254'
}

for(const key in Address){
    console.log(key)
}
console.log(Object.keys(Address))

//We could also access the properrty values of our objects
for(const key in Address){
    console.log( key +":"+ Address[key])
}