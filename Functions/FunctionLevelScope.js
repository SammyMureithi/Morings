function outer(greeting,msg="It's a fine day to start on "){
    const innerFun= function(name,lang="Python"){

        return `${greeting},${name}!${msg}${lang}`
    }
    return innerFun("Sammy","Java");
}

console.log(outer("Hello"))
