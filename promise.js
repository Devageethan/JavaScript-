/*let p=new Promise((resolve,reject)=>{
    var element=true;
    if(element)
    {
        resolve("yes!it is a success");
    }
    else
    {
        reject("no! it's a failure");
    }
})
console.log(p);
p.then((success)=>{
    console.log(success);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("it's worked");
})*/

let p1=new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve("hi deva");
    },4000)
    setTimeout(()=>{
        reject("bye deva");
    },3000)
})
console.log(p1);
p1.then((success)=>{
    console.log(success);
}).catch((err)=>{console.log(err)})
.finally(()=>{console.log("working")});