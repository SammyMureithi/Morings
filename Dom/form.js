let inputs=document.querySelectorAll("form > input");


function validate(){
    inputs.forEach(element => {
        if(element.value === ""){
            alert("Please fill all fields ")
        }
        else{
            alert("Good Job")
        }
        
    });

}