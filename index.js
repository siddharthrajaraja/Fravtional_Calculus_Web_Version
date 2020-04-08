var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
const path=require('path');


// Middle-wares ----------------------------------->>>>>>
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

// Get Routes ------------------------------------->>>>  
var  {dashboard,homepage,pFD}=require('./server/getRoutes.js')

app.get('/dashboard', dashboard);

app.get('/homepage',homepage);

app.get('/graph1',(req,res)=>{
    
    var {successive_differentiation}=require('./js scripts/Fd_Successive_differentiation')
    
    successive_differentiation(4.0,0.25).then((obj)=>{
        //console.log(obj.tvfx)    
        res.render('graph.ejs',{obj})
        })

})

// Post Routes ------------------------------>>>>>>>>>>>>

var {term_simulation,poly_simulation}=require('./server/postRoutes.js')

app.post('/term_simulation',term_simulation)
app.post('/poly_simulation',poly_simulation)

// App Listen --------------------------------->>>>>>>>>>>>
app.listen(process.env.PORT  || 3000, function() { 
    console.log('server running on port 3000'); 
} ) 

