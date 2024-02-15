const express =require('express');
const app = express();

app.get('',(req,resp)=>{
    // console.log("Data sent by browser",req.query.name)
    // resp.send('Hello,'+req.query.name);

    resp.send(`
        <h1>Welcome, to Home Page</h1><a href="/about" >Go to about page</a>
   `)
}) ;   //get method provide route

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href="/" >Go to Home page</a>
    `);
}) ;

app.get('/help',(req,resp)=>{
    resp.send({
        name:'Dipali',
        email:'dipali@test.com'
    });
}) ;

app.listen(5000);