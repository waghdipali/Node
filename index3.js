const http = require('http');
/*
function dataControl(req,resp)
{
    resp.write("<h1>Hello, This is a Dipali Wagh</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4200);
*/

function test(a)
{
    return a*10;
}

//const test =(a)=>a*10


http.createServer((req,resp) =>
{
    resp.write("<h1>Hello, This is a Dipali Wagh</h1>");
    resp.end();
}).listen(4500);