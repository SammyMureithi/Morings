const navigation=document.querySelectorAll("nav > ul>li");

function changeClassName(field){
    return field.className="onHover";
}
navigation.forEach((nav) =>{
    nav.addEventListener("mouseover",(e) =>{
        changeClassName(e.target);
      // e.target.className="onHover"
    })
})

navigation.forEach((nav) =>{
    nav.addEventListener("mouseout",(e) =>{
       // changeClassName(e.target);
       e.target.className="onMouseOut"
    })
})

