const http = require('http');
const data = require('./Data');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);

//console.log("Dipali");