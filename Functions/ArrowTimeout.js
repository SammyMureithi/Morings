var obj={
    count:0,
    doSomething:function(){
        setTimeout(()=>{
            this.count++;
            console.log(this.count);
        },300)
    }
}
obj.doSomething()