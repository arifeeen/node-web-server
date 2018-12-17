const express= require('express');
const hbs =  require('hbs');



var app=express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
    res.render('maintainance.hbs');
})
app.get('/', (req,res)=> {
   // res.send('<h1>hello express!</h1>')
   res.render('welcome.hbs',{
       pageTitle: 'Welcome Page',
       currentYear: new Date().getFullYear(),
       message:'welcome to express'

   })
});

app.get('/bad', (req,res)=> {
    // res.send('<h1>hello express!</h1>')
    res.send({
        errorMessage : 'bad request'
    })
 });

 app.get('/about', (req,res)=> {
    // res.send('<h1>hello express!</h1>')
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
 });
app.listen(3000);
