const  userInfo={
    firstName: "Mure",
    lastName: "Sammy",
    company: {
        name: 'Turing',
        jobTitle: "Full stack web Dev"
    },
    friends: [
        {
            firstName: 'Zac',
            lastName: 'Mwangi',
            company:{
                name: 'Turing',
               jobTitle: "Full stack web Dev" 
            }
        },
        {
            firstName: 'Sam',
            lastName: 'Kamaa',
            company:{
                name: 'Turing',
               jobTitle: "Full stack web Dev" 
            }   
        }
    ],
    projects: [
        {
            title: 'DevDan Enterprises',
            description: "A real estate management system"
        },
        {
            title: "Sabugo",
            description: "Gas station selling sytem"
        }
    ]
};

console.log(Object.keys(userInfo))

for(const key in userInfo){
    console.log(userInfo[key])
}

//lets access our data in the object
console.log(userInfo.projects[0].title)

function shallowIterator(target){
    for(const key in target){
        if(typeof target[key] === "object"){
            for(const nestedKey in target[key]){
                console.log(target[key][nestedKey])
            }
        }
        else{
            console.log(target[key])
        }
    }
   
}
//we can also have our recursion function --better version than shallowIterator
function deepIterator(target){
    if(typeof target ==="object"){
        for(const key in target){
            deepIterator(target[key])
        }
    }
    else{
        console.log(target)
    }
}
shallowIterator(userInfo)
console.log("===!!!!!=====!!!!!=====");
deepIterator(userInfo)