const inputs=document.querySelectorAll("input");

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\d\w@-]{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email :/^\w{2,}[@]{1}\w{1,}[.][c]om$/gi
};
function validateMyInput(field,regex){
    if(regex.test(field.value)){
        field.className="valid";
    }
    else{
        field.className="invalid"
    }
}

//add an event listner to each input
inputs.forEach((input) =>{
    input.addEventListener('keyup',(e) =>{
        validateMyInput(e.target,patterns[e.target.attributes.name.value])
    })
})