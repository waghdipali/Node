const express = require('express');
const app = express();

const reqFilter=(req,resp,next)=>{
    //console.log('reqFilter');
    if(!req.query.age)
    {
        resp.send("Please provide age ")
    }
    else if(req.query.age<18)
    {
        resp.send("You can not access this page")   
    }
    else
    {
        next();
    }
}

app.use(reqFilter)

app.get('/',(res,resp)=>{
    resp.send('Welcome to Home page')
})

app.get('/user',(res,resp)=>{
    resp.send('Welcome to user page')
})

app.listen(5000);