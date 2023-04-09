let arr=[10,20,30,40];
console.log(arr);

let arr1=arr.push(50);
console.log(arr1);
console.log(arr);

let arr2=arr.pop();
console.log(arr);

let arr3=arr.unshift(15);
console.log(arr);

let arr4=arr.shift();
console.log(arr);

let arr5=arr.slice(1,2);
console.log(arr5);

let arr6=arr.splice(1,2);
console.log(arr6);
console.log(arr);

let arr7=arr.splice(1,2,5,10);
console.log(arr7);
console.log(arr);
//splice (strat index,delete count,elements to be added)

//slice (start index,end index(+1))