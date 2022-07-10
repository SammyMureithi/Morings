let sunday=(name)=>{
    return `Hello,${name}.It's a Sunday,lets visit the chaurch`
}

let monday=(name)=>{
    return `Hello,${name}.It's a Monday,lets visit the library`
}
let friday=(name)=>{
    return `Hello,${name}.It's a Friday,lets start our project`
}

let dayCheck=(username,callback)=>{
    if(typeof callback ==="function"){
        return callback(username);
    }
    else{
        return "Day to code please "+username;
    }
    
}
console.log(dayCheck("Mure",friday));