let gp=document.getElementById("grandparent")
gp.addEventListener("click",(e)=>{
    console.log("Grand parent clicked");
    gp.style.backgroundColor="blue";
    console.log(e.eventPhase);

},false)
let p=document.getElementById("parent")
p.addEventListener("click",(e)=>{
    console.log("parent clicked");
    p.style.backgroundColor="grey";
    console.log(e.eventPhase);//phase will show
    e.stopPropagation();//bubbling phase has stop
    
},fasle)//capturing phase will show
let c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    console.log("child clicked");
    c.style.backgroundColor="yellow";
    console.log(e.eventPhase);
    e.stopPropagation();
},false)
