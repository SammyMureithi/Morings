const myObj={
    street:{
        line1: '4th Line',
        line2: 'Happy Hours'
    },
    state: 'Kenya',
    county: 'Nairobi',
    city: 'Juja'
}

console.log(myObj.street);

//Accessing object within  an object

console.log(myObj.street.line1)

//We can also acccess the other elements

console.log(myObj.city)

//We acn also use the brace notation to access our objects
console.log(myObj['county'])

console.log(myObj['street']['line1'])

//We could also have nonstandard keys

const wildKeys={
    "Cash rules everthing around me" :"Wu",
    "C.R.M.E": "Tang",
    "Get the money": "For",
    "$ $ bill, y'all!": "Ever"
}
//It is impossible to access this property with dot notations

console.log(wildKeys['C.R.M.E']);

//we could also access our property in this mannner

console.log(myObj['coun'+ 'ty']);

//We can use the bracket notation to compute the value of varialble on the fly

const meal={
    breakFast: "Oatmeal",
    lunch: "Caesar Salad",
    dinner : "Chimichanges"
};
let mealName ='lunch';

console.log(meal[mealName])

//we can use the bracket notation to assing oropert name

const userName="UserName"
const fullName="Full_Name"
const constact="Contacts"
const email="Email"
 const details={
    [userName] :'Mure',
    [fullName] : 'Mureithi',
    [constact] :'0768397675',
    [email]: 'sammymureithi20@gmail.com'
 }

 console.log(details);

 const WednesdayMenu={
    cheesePlate: {
        soft: "Bries",
        semiSoft: "Fontana",
        hard: "Provolone"
    },
    fries: "Sweet Patatoes",
    salad: "SouthWestern"
 }

 console.log(Object.keys(WednesdayMenu))