//Asynchronous node js

// console.log("Start exe...")

// setTimeout(()=>{
//     console.log("logic exe...")
// },2000)

// console.log("complete exe...")


//Drawback of Asyn example
// let a=10;
// let b=0;

// setTimeout(()=>{
//     b=20;
// },2000)

// console.log(a+b)


//Handle Asyn Data in node js
let a=10;
let b=0;

//promise internal data cha wait krto
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})


