/*console.log("start");
var x=100;
var y=200;
let z=300;
console.log(x);
console.log(y);
console.log(z);
console.log("end");

//hoisting
console.log(a)
var a=56
//temporal dead zone
console.log(d)
let d=40
console.log(b)
const b=10*/


//program
console.log("start")
var m=111;
console.log(m)
let n=999;
function test(){
    var x="html";
    console.log(x);
    console.log(n);
}
test();
console.log("end")