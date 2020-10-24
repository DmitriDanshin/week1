const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.get('/',(req,res)=>{
    res.end('dmitri5');
})

app.get('/login/',(req,res)=>{
    res.end('dmitri5');
})

app.listen(PORT, ()=>{
    console.log("successful")
});