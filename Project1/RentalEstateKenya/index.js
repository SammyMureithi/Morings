let subscribe=document.getElementById("subcribe");
let Home=document.getElementById("home");
let ContactUs=document.getElementById("contactUs");
let LogIn=document.getElementById("logIn");
let Blog=document.getElementById("Blog");
let towns=document.querySelector("#container1")
let Start=document.getElementById("start");



subscribe.addEventListener("mouseover",function(){
    subscribe.style.color="greenyellow";
    subscribe.style.backgroundColor="black";
    subscribe.style.fontSize="35px";
})
subscribe.addEventListener("mouseleave",function(){
    subscribe.style.color="black";
    subscribe.style.backgroundColor="greenyellow";
    subscribe.style.fontSize="25px";
})
Home.addEventListener("mouseover",function(){
    Home.style.fontSize="30px";
    Home.style.color="greenyellow";
    Home.style.textDecoration="underline wavy white"
})
Home.addEventListener("mouseleave",function(){
    Home.style.color="white";
    Home.style.fontSize="20px";
    Home.style.textDecoration="none";
})

ContactUs.addEventListener("mouseover",function(){
    ContactUs.style.fontSize="30px";
    ContactUs.style.color="greenyellow";
    ContactUs.style.textDecoration="underline wavy white"
})
ContactUs.addEventListener("mouseleave",function(){
    ContactUs.style.color="white";
    ContactUs.style.fontSize="20px";
    ContactUs.style.textDecoration="none";
})

LogIn.addEventListener("mouseover",function(){
    LogIn.style.fontSize="30px";
    LogIn.style.color="greenyellow";
    LogIn.style.textDecoration="underline wavy white"
})
LogIn.addEventListener("mouseleave",function(){
    LogIn.style.color="white";
    LogIn.style.fontSize="20px";
    LogIn.style.textDecoration="none";
})
Blog.addEventListener("mouseover",function(){
    Blog.style.fontSize="30px";
    Blog.style.color="greenyellow";
    Blog.style.textDecoration="underline wavy white"
})
Blog.addEventListener("mouseleave",function(){
    Blog.style.color="white";
    Blog.style.fontSize="20px";
    Blog.style.textDecoration="none";
})
Start.addEventListener("mouseover",function(){
   Start.style.height="60px";
   Start.style.width="90px";
   Start.style.color="greenyellow";
   Start.style.backgroundColor="white";
})
Start.addEventListener("mouseleave",function(){
    Start.style.height="50px";
   Start.style.width="80px";
   Start.style.color="white";
   Start.style.backgroundColor="greenyellow";
})


