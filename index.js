const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.get('/',(req,res)=>{
    res.end('main page');
})

app.get('/login/',(req,res)=>{
    res.end('login page');
})

app.listen(PORT, ()=>{
    console.log("successful")
});