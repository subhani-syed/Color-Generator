const express = require('express');
const app = express();

let port = process.env.PORT||3000;

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.sendFile('index.html');
})

app.listen(port,()=>{
    console.log("App is running");
})