/*
//named function
function test(a,b){
    console.log(a+b);
}
test(20,40)

//function with expression
test= function (a,b){
    console.log(a+b)
}
test(10,20)

//immediate invoke function expression
(function(x,y){
    console.log(x+y);
})
(30,30)*/
//program
console.log("start")
const m="html"
console.log(m)
var n="css"
let p="java script"
function fun(){
    var n=555
    console.log(n)
    console.log(this.n)
    console.log(m)
    console.log(this.p)
    p="react"
    console.log(p)

    
}
fun()
console.log("end")
