//program
console.log("start")
let a="new"
const b="old"
console.log(x)
var x=111
function test(){
    var x=96
    console.log(this.x)
    x=999;
    a="hello"
    console.log(b);
    function test1(){
        console.log(x);
        x="bye";
        console.log(a);
    }
    test1()
}
test()
console.log("end")