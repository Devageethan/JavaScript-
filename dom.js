/*let heading1=document.getElementById("head")
console.log(heading1)
heading1.style.backgroundColor="red"

//let heads=document.getElementsByClassName("cls")
//console.log(heads);
//heads.style.color="yellow"
//heads.style.fontstyle="times new roman"

//let head=document.getElementsByTagName("h1");
console.log(head);
head[0].style.color="yellow";
head[1].style.color="blue";

let e1=document.querySelector("h3")
console.log(e1);
e1.style.color="green";*/

// create the element
let div1=document.getElementById("hash")
console.log(div1)

let list=document.createElement("ul")
list.className="list";
list.id="list1";

let li1=document.createElement("li")
li1.textContent="orange";
li1.type="square"

let li2=document.createElement("li")
li2.textContent="apple";

list.appendChild(li1);
list.appendChild(li2);
div1.appendChild(list);