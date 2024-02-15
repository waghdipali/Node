const express= require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

//console.log(publicPath)
//app.use(express.static(publicPath));

app.get('/profile',(_,resp)=>{
    const user={
        name:'Dipali Wagh',
        email:'waghdipali.com',
        city:'parner',
        skills:['php','js','c++','java','node']
    }
    resp.render('profile',{user})
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/pagenotfound.html`)
})

app.listen(5000);