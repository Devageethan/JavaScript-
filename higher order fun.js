/*let arr=[10,20,30,40,50]
//filter
let after_filter=arr.filter((val,ind)=>{
    if(val>=30)
    {
        return val;
    }

})
console.log(after_filter)
//map
let after_mapping=arr.map((val,ind)=>{
    val+=5
    return val
})
console.log(after_mapping)
//reduce
let after_reduce=arr.reduce((accum,val)=>{
    accum=accum+val;
    return accum;
},5)
console.log(after_reduce)*/

let book_price=[999,540,867,435,635,340,565]
console.log(book_price)
//1st increase the bookprice by 150
let mapping=book_price.map((val,ind)=>{
    val+=150
    return val
})
console.log(mapping)
//2nd filter the book_price
let filtering=book_price.filter((val,ind)=>{
    if(val>700){
        return val;
    }
})
console.log(filtering)
//3rd add filter bookprice
let reducing=book_price.reduce((accum,val)=>{
    accum=accum+val;
    return val;
})
console.log(reducing)