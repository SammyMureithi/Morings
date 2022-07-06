const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
/**
 * Here we are instucting js to remove the elements next after index specified (4) 
 * remove 2 elements from the array
 * Add the rest of the elements specified
 */
const returnValue=days.splice(4,2,"Hello","World","Happy","Hours");
console.log(days)
//it returns the removed elements from our array
console.log(returnValue)

//Combining splice with spread operator

const menu=[
    "Waru",
    "Nyama",
    "Ugali",
    "Chapo",
    "Madondo"
];

const newMenu=[
    ...menu.slice(0,1),
    "Mchele",
    "Ndengu",
    "Githeri",
    "Mayai"
]

console.log(newMenu)