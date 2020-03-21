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
var  {graph_page}=require('./server/getRoutes.js')
app.get('/read', callName); 



function callName(req, res) { 
    var trace=''
    var spawn = require("child_process").spawn; 
      
    var process = spawn('python',["./py scripts/Fd_Successive_Differentiation.py"] ); 
  
    process.stdout.on('data', function(data) { 
        trace+=data;
        
    } ).setEncoding('utf-8')
    
    process.stdout.on('end', function(){
        res.render("graph.ejs",{all:trace.split("--->>>")})
        //console.log(trace.length)
      });
    


    process.stderr.on('error',(err)=>{console.log(err)})
    process.stdin.end();

} 
  

app.listen(process.env.PORT  || 3000, function() { 
    console.log('server running on port 3000'); 
} ) 

app.get('/',(req,res)=>{
    
    var {successive_differentiation}=require('./js scripts/Fd_Successive_differentiation')
    
    successive_differentiation(1.2,0.1).then((obj)=>{
        //console.log(obj.tvfx)    
        res.render('graph.ejs',{obj})
            
        })

})
