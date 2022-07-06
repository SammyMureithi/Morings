let btnAdd=document.getElementById("AddTodo");
let inputField=document.getElementById("InputField");
let toContainer=document.getElementById("todoContainer");

btnAdd.addEventListener("click",function(){
    var paragraph=document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText=inputField.value;
    toContainer.appendChild(paragraph);
    inputField.value("");
    paragraph.addEventListener("click",function(){
        paragraph.style.fontSize="30px";
    })
})