//let's first get our data drom the database/server
//GET
fetch("http://localhost:3000/Products")
//let check the response type
.then(res => {
    if(res.status==200){
        console.log("Get request was successful")
    }
    else{
        console.log("Get request has a problem")
    }
    return res;
})
.then((res) => res.json())
.then((data) =>handleData(data))
.catch(error => console.log(error))

function handleData(data){
    data.forEach(element => {
        console.log(element)
    });
}

