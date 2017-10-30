//Server Express
const express = require('express');
const app = express();

//Express middleware
// cho phep truy cap localhost:3000
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/',(req,res)=>  res.send({name: 'Thien An'})); 

app.listen(3000,()=>console.log('server started'));