const express =require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

//app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('',(__,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(__,resp)=>{
    const user={
        name:'Dipali Wagh',
        email:'dipali@test.com',
        city:'Nashik',
        skills:['php','js','c++','java','node']
    }
    resp.render('profile',{user});
})

app.get('/login',(_,resp)=>{
    resp.render('login');
})

app.get('/about',(__,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(__,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*',(__,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000);