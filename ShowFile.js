const fs = require('fs');
//fs.writeFileSync('apple.txt','this is a apple file');
const path = require('path');
const dirPath=path.join(__dirname,'files');   //get current directory path
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt',"a simple text file");

// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
    console.log("File name is",item);
    })
})
