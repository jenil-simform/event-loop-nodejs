/*
* remember : inside of fs-readfile if we write setImmediate any of the times 
* then it will always executes first instead of executing timers of 0 seconds first.
*/

const fs = require('fs')

const readstrem = fs.createReadStream(__dirname);

setTimeout(() => console.log("timer1 finished"), 0) //2
setImmediate(() => console.log("immediate-1 finished")) //3


fs.readFile(__filename, () => {
    readstrem.close()
    console.log("io finished"); //4
    setTimeout(() => console.log("timer2 finished"), 0) //9
    setTimeout(() => console.log("timer3 finished"), 3000) //10
    setImmediate(() => console.log("immediate-2 finished")) //5
    setImmediate(() => console.log("immediate-3 finished")) //6
    setImmediate(() => console.log("immediate-4 finished")) //7
    setImmediate(() => console.log("immediate-5 finished")) //8
    readstrem.on('close', ()=> console.log('closed event'))
})



console.log("hello from top-level-code")  //1