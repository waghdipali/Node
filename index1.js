//const fs=require('fs').writeFileSync;
//fs.writeFileSync("hello2.txt","Dipali Ramesh wagh")
//console.log("->>",__dirname);
//fs("abc.txt","abc")

//const colors =require('colors');
//console.log("Hello".bgBlue);

const fs = require('fs');

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else{
    console.log("Invalid output")
}