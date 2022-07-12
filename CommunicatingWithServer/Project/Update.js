fetch("http://localhost:3000/Products/6",{
    method: "PUT",
    headers: {
        "Content-type":"application/json"
    },
    body:JSON.stringify(
        {

                "price": "3200",
                "name": "Viza LpG",
                "Refill": 1800        
        
    })
})
.then(res => {
    if(res.ok){
        console.log("Update done successfulls")
    }
    else{
        console.log("Update not successfully")
    }
    return res;
})
.then(res =>res.json())
.then(data => console.log(data))
.catch(error => console.log(error))