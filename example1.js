const fs = require('fs')

setTimeout(() => console.log("settimeout-1"),0) //9
setImmediate(()=> console.log("setimmediate")) //13
setTimeout(()=> {
    console.log('settimeout-2'); //10
    process.nextTick(() => console.log('nextick inside settimeout')) //11
},0) 
setTimeout(()=>console.log("settimeout-3"),0)  //12

fs.readFile(__filename, ()=>{
    console.log("io-operation") //14
})

process.nextTick(() => console.log('nextick-1'))  //1
process.nextTick(() => {
    console.log('nextick-2'); //2
    process.nextTick(() => console.log('inside nextick of nextick')) //4
})
process.nextTick(() => console.log('nextick-3')) //3


Promise.resolve().then(() => console.log('promise1')); //5
Promise.resolve().then(() => {
    console.log('promise2'); //6
    process.nextTick(() => console.log('inside promise nextick'))  //8
});
Promise.resolve().then(() => console.log('promise3')); //7
