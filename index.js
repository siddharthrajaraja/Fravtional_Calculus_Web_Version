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
var  {dashboard}=require('./server/getRoutes.js')
app.get('/dashboard', dashboard); 
app.get('/graph1',(req,res)=>{
    
    var {successive_differentiation}=require('./js scripts/Fd_Successive_differentiation')
    
    successive_differentiation(1.2,0.1).then((obj)=>{
        //console.log(obj.tvfx)    
        res.render('graph.ejs',{obj})
            
        })

})

// Post Routes ------------------------------>>>>>>>>>>>>

app.listen(process.env.PORT  || 3000, function() { 
    console.log('server running on port 3000'); 
} ) 
