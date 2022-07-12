const myObj={
    fname:"Mure",
    lname:"Kirathe",
    id:20
}
//let destructure our object
const {fname}=myObj;
console.log(fname)

//Nested object and array destructuring

const metaData={
    title: "Scratchpad",
    translation:[{
        locale:'de',
        localisation_tag:[],
        last_edit:"2014-08-10T08:43:37"
    }],
    url: '/en-US/docs/Tools/Scratchpad'
}
//lets now destructure our nested object
let {
    //we are destructuring tittle to a variable named enTitle
    title: enTitle,
    translation:[
        {
            //we are destructuring last_edit to a variable last_seen
            last_edit: last_seen,
        }
    ],
}=metaData;

console.log(enTitle);
console.log(last_seen);

let student={
    Student_name:[{
        fname:"Mure",
        lname:"Sammy"
    }],
    address:[{
        box: "356 Moi's bridge",
        location:"Mois Bridge",
        state:"Kenya",
        region:"Trans-"

    }],
    course:"Mathematics and computer science"
}

/**
 * Let's destructure our object,
 * Let's fetch our fname to first name,location to origin and course to case_study
 */
let {
    Student_name:[{
        fname: first_name
    }],
    address:[{
        location: origin
    }],
    course: studying
}=student;


console.log(`${first_name},one taking ${studying} comes from ${origin}`)

//FOR OF ITERATOR AND DESTRUCTURING

const people=[
    {
        p_name:"Sammy Burugu",
        family:{
            father: "James Burugu",
            mother: "Cythia Burugu",
            sister: "Nyambura Burugu"
        },
        age: 23
    },
    {
        p_name:"Sammy Kirathe",
        family:{
            father: "Josphat Kirathe",
            mother: "Mercy Kiathe",
            sister: "Lucy Kirathe"
        },
        age: 21
    }
]

//let's now destructure using the for..of loop

for(const{p_name:name,family:{father: mzae},age:umri} of people){

    console.log(`${mzae} celebrates his son ${name} at his ${umri} birthday `)
}