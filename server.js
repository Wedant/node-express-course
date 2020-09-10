const express = require('express');
const app = express();

app.listen(8000,function(){console.log('Server is running')});

app.get('/',(req,res)=>{
    res.send('Server is running');
});