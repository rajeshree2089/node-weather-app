const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const geocode = require('./geocode');
const { response } = require('express');

app.use(express.static(path.join(__dirname,'public')));

const viewsPath = path.join(__dirname,'templates/views');

const partialPath = path.join(__dirname,'templates/partials');

app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

app.get('/',(req, res) => {
    res.render('index',{
        title : 'A new HBS page with dynamic data',
        description: 'Weather application data'
    });
})

app.get('/about',(req,res) => {
    res.render('about',{
        title : 'About Us Page',
        description : req.query.search
    })
})

app.get('/help',(req,res) => {
   res.render('help',{
       title:'Help Page',
       description: 'Welcome'
   })
})

app.get('/weather',(req,res) => {

   if (!req.query.address)
    {
        return res.send({
            error : 'please provide a query string'
        })
    }

    geocode(req.query.address, (error, data = {}) => {
        if(error)
        {
           return res.send({
                error: error
            })
        }

        res.send({
            data: data
        })

    })
})


app.listen(3000,() => {
    console.log("Your server is listening");  
})