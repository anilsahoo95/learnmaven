const express=require('express');
const app=express();

app.listen(5031);
app.get("/",(req,res)=>{
    res.send("Hello World");
})