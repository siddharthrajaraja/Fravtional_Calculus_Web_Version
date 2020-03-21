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

app.get('/graph',graph_page)


app.put('/read',(req,res)=>{
    console.log("i am in ")
    
    console.log(req.body)
    //res.render('graph.ejs',req.body)
    res.redirect('/graph')
})
  
function callName(req, res) { 
    var trace=''
    var spawn = require("child_process").spawn; 
      
    var process = spawn('python',["./py scripts/Fd_Successive_Differentiation.py"] ); 
  
    process.stdout.on('data', function(data) { 
        trace+=data;
        
    } ).setEncoding('utf-8')
    
    process.stdout.on('end', function(){
        console.log(trace.split("--->>>"))
        res.render("graph.ejs",{all:trace.split("--->>>")})
        //console.log(trace.length)
      });
    


    process.stderr.on('error',(err)=>{console.log(err)})
    process.stdin.end();

} 
  

app.listen(process.env.PORT  || 3000, function() { 
    console.log('server running on port 3000'); 
} ) 