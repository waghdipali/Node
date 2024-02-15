const app = require('./app')
//console.log(app.z());

const arr=[2,4,7,1,3,8,3];

let result=arr.filter((item)=>{
    //console.log(item)
   // return item===3
   return item>=4
})
console.log(result)