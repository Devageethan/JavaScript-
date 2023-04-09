/*let parent_div=document.getElementById("division");
console.log(parent_div);
parent_div.style.height="2000px";
parent_div.style.width="1000px";
parent_div.style.border="2px solid red";
parent_div.style.display="flex";
parent_div.style.alignItems="center";
parent_div.style.justifyContent="space-evenly";




let div1=document.createElement("div");
div1.style.height="300px";
div1.style.width="300px";
div1.style.border="2px solid blue";
div1.style.backgroundImage="url(https://cdn.pixabay.com/photo/2022/07/11/08/44/tower-7314495_1280.jpg)";
div1.style.opacity="over-fit";



let div2=document.createElement("div");
div2.style.height="300px";
div2.style.width="300px";
div2.style.border="2px solid orange";
div2.style.backgroundImage="url(https://cdn.pixabay.com/photo/2022/10/29/19/21/golden-eagle-7555959_640.jpg)";


let div3=document.createElement("div");
div3.style.height="300px";
div3.style.width="300px";
div3.style.border="2px solid green";
div3.style.backgroundImage="url(https://cdn.pixabay.com/photo/2023/01/15/22/55/fern-7721323_1280.jpg)";
div3.style.objectFit="cover";


parent_div.appendChild(div1);
parent_div.appendChild(div2);
parent_div.appendChild(div3);*/



let fruits_list=document.createElement("ol");
fruits_list.style.listStyleType="lower-alpha";

let li1=document.createElement("li");
li1.textContent="apple";

let li2=document.createElement("li");
li2.textContent="orange";

let li3=document.createElement("li");
li3.textContent="banana";

fruits_list.appendChild(li1);
fruits_list.appendChild(li2);
fruits_list.appendChild(li3);

document.body.append(fruits_list);