const express=require('express');
const app = express();

app.get('',(req,res)=>{
    //console.log("data sent by browser  =>> ",req.query.name)
    //res.send("Welcome,"+ req.query.name);
    res.send(`
    <h1>Welcome, to home page</h1><a href="/about" />Go to about page</a>
    `);
});

app.get('/about',(req,res)=>{
   // res.send("Welcome, ths is About page");

   res.send(`
    <input type="text" placeholder="user name" value="${req.query.name}" />
    <button>click me</button>
    <a href="/" />Go to home page</a>
   `);
});

app.get('/help',(req,res)=>{
    //res.send("Welcome, ths is help page");

    res.send([
        {
            name:'Dipali',
            email:'waghdipali.com'
        },
        {
            name:"kunal",
            email:"waghkunal.com"
        }
]);
});

app.listen(5000);