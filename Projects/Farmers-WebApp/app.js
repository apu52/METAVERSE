const express=require('express');
const path=require("path");
const mods=require('./static/modules.js')
const app=express();

//code to serve static files...
app.use('/static',express.static('static'))
app.use('/images',express.static('images'))
app.use('/fonts',express.static('fonts'))
app.use('/static/default',express.static('default'))
app.use(express.urlencoded());
//setiing pug engin
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

//get method
app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
})

//external redirect homepage
app.get('/home',(req,res)=>{
    res.status(200).render('home.pug')
})
 
app.get('/calculator',(req,res)=>{
    // res.sendFile(path.join(__dirname+'/templetsFolder/main.html'))
    res.status(200).render('calci.pug')
})

app.get('/calculate/:query?', function(req, res){
    var query = req.params.query;
      data=JSON.parse(query)
      res.send(mods.calculate(data))
  });

app.get('/map',(req,res)=>{
    // res.sendFile(path.join(__dirname+'/templetsFolder/main.html'))
    res.status(200).render('map.pug')
})

app.get('/news',(req,res)=>{
    // res.sendFile(path.join(__dirname+'/templetsFolder/main.html'))
    res.status(200).render('news.pug')
})
app.get('/information',(req,res)=>{
    res.status(200).render('info.pug')
})
app.listen(80,()=>{
    console.log(`app started `)
})


