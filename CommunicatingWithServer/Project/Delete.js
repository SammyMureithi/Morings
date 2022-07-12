fetch("http://localhost:3000/Products/5",{
    method:"DELETE",
    headers:{
        "Content-type":"application/json"
    }
})
.then(res =>{

    if(res.ok){
        console.log("Delete was successful");
    }
    else{
        console.log("Delete not successful")
    }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));