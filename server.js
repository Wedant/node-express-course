const express = require('express');
const app = express();

// app.get('/',(req,res)=>{res.send('Server is running. Nodemon test.')});

const mockUserData=[
    {name:'Jack'},
    {name:'Jill'}
]
app.get('/user', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        user: mockUserData
    })
})

app.listen(8000,function(){console.log('Server is running')});