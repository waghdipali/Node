const { isUtf8 } = require('buffer');
const fs=require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

//fs.writeFileSync(filePath,'This is a simple text file');

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err)console.log("file is updated")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//     {
//         console.log("file name is updated");
//     }
//     else 
//     {
//         console.log("File is not updated");
//     }
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)