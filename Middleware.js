const express = require('express');
const app= express();

const reqFilter=(req,resp,next)=>{
    //console.log('reqFilter');
    if(!req.query.age)
    {
        resp.send("<h1>please provide page</h1>")
    }
    else if(!req.query.age<18)
    {
        resp.send("<h1>You can not access this page</h1>")
    }
    else
    {
        next();
    }
    
}

app.use(reqFilter)

app.get('/',(res,resp)=>{
resp.send('Welcome to home page')
})

app.get('/about',(res,resp)=>{
resp.send('Welcome to about page')
})

app.get('/users',(res,resp)=>{
    resp.send('Welcome to user page')
    })

app.listen(5000)