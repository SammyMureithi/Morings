let data=document.querySelectorAll("#data-output");
let myHover=document.querySelectorAll("table > tbody ")


fetch("http://localhost:3000/Products")

.then(res =>{
    if(res.ok){
        console.log("Fetch successful");
    }
    else{
        console.log("Fetch not successful")
    }
    return res;
})
.then(res => res.json())
.then(data => handleData(data))
.catch(error => console.log(error))

function handleData(data){
    let placeholder=document.getElementById("data-output");
    let out="";
    for(let element of data){
        //observe carefull the marks we are using
        out+= `
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.Refill}</td>
        <td>${element.quantity}</td>
        </tr>
        `
    }
    placeholder.innerHTML=out
  
}
myHover.forEach((element) =>{
    element.addEventListener("mouseover" ,(e)=>changeClassName(e))
})
function changeClassName(e){
    e.target.className="mouseOver"
}
myHover.forEach((element) =>{
    element.addEventListener("mouseout" ,(e)=>e.target.className="")
})

console.log("Data length "+myHover.length)

