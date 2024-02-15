//Show file List with file System

const fs = require('fs');
//fs.writeFileSync('apple.txt','this is a apple file');
const path = require('path');
const dirPath=path.join(__dirname,'Files');
//console.log(dirPath)

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple tet file");
// }

fs.readdir(dirPath,(err,Files)=>{
   // console.warn(Files)

   Files.forEach((item)=>{
    console.log("file name is ",item)
   })
})