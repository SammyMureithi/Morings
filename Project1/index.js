let addToDoButton=document.getElementById("AddToDo");
let toDoContainer=document.getElementById("todoContainer");
let inputField=document.getElementById("InputField");

addToDoButton.addEventListener("click",function(){
    var paragraph=document.createElement("p");
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph) ;
    inputField.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
       
    })
    paragraph.addEventListener("mouseover",function(){
        paragraph.style.fontSize="30px"; 
        paragraph.style.background="green";
        paragraph.style.width="400px";
        paragraph.style.height="50px";
        paragraph.style.textUnderlineOffset="red";

    })
    paragraph.addEventListener("mouseout",function(){
        paragraph.style.background="brown";
        paragraph.style.fontSize="20px";
        paragraph.style.width="300px";
        paragraph.style.height="54px";
    })
})
