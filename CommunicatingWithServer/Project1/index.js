let datalist=document.querySelectorAll("ul ,li");

fetch("http://localhost:3000/Machines")
.then(res => {
    if(res.ok){
        console.log("Data fetch done Okw")
    }
    else{
        console.log("Data Not Fetched")
    }
    return res
})
.then(res =>res.json())
.then(data => workOnData(data))
.catch(error => console.log(error))


function workOnData(datas){
    let dataList=document.getElementById("outPut");
    dataList.className="data"; 
    let out="";
    for(let element of datas){
        out+=`
        <li>

            <img src=${element.image}>
            <h3> <span>Kes.</span>${element.price}</h3>
            <h2> ${element.id}.${element.name}</h2>
            <p>${element.description}</p>
            <button>Buy Now</button>
            <button id ="enquery">Enquery</button>
            </li>
        `
    }
    dataList.innerHTML=out
}
// datalist.forEach((one) =>{
//     one.addEventListener('mouseover',(e)=> changeClassName(e))
// })
// function changeClassName(e){
//     e.target.className="onHover"
// }
// datalist.forEach((one) =>{
//     one.addEventListener('mouseout',(e)=> returnClassName(e))
// })
// function returnClassName(e){
//     e.target.className="data"
// }

