const http =require('http');

http.createServer((req,resp)=>{
    resp.write("Hello this is Dipali");
    resp.end();
}).listen(4500);