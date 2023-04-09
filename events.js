/*function handleclick(){
    document.body.style.backgroundColor="green";
}

function handleclick1(){
    let h=document.getElementById("head")
    h.style.backgroundColor="yellow"
}*/

//  let id=document.getElementById("h");
//  id.addEventListener("onclick",()=>{
//      document.body.sytle.backgroundColor="red"
//  })

// function hoveron(){
//     let id=document.getElementById("head")
//     id.style.fontStyle="italic"
//     id.style.color="red"
// }
// function hoverout(){
//     let id=document.getElementById("head")
//     id.style.fontStyle="times new roman"
//     id.style.color="orange"
// }

let head=document.getElementById("head")
head.addEventListener("mouseover",()=>{
    head.style.fontStyle="italic"
    head.style.color="red"
})

let head1=document.getElementById("head")
head1.addEventListener("mouseout",()=>{
head1.style.fontStyle="initial"
head1.style.color="initial"
})


