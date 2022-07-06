let subscribe=document.getElementById("subcribe");

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