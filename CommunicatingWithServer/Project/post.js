fetch("http://localhost:3000/Products",{
    //notify the request we want
    method: "POST",
    //tell the server the type of data we are adding to the db
    headers:{
        "Content-type":"application/json"
    },
    //let's add the data to the db
    //the data should always be in a JSON format
    body:JSON.stringify(
        {
            
               
                "name": "Viza LpG",
                "price": "3000",
                "Refill": 1700
              
        }
    )
})
.then(res => {
    if(res.status == 201){
        console.log("Item POST Successfuls")
    }
    else{
        console.log("POST not  successfully");
    }
    return res;
})
.then(res =>res.json())
.then(data => console.log(data))
.catch(error => console.log(error))