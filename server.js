const express = require('express');
const app = express();

app.listen('3000', ()=>console.log('listening at port 3000'));

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', async(req, res)=>{
    res.render('index');
})