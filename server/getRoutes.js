module.exports.callPython=(req,res)=>{
    var spawn = require("child_process").spawn; 
      
    var process = spawn('python',["./py scripts/Fd_Successive_Differentiation.py"] ); 
  
    process.stdout.on('data', function(data) { 
        
        console.log(data)
        
    } ).setEncoding('utf-8')
    
    process.stderr.on('error',(err)=>{console.log(err)})

}

module.exports.graph_page=(req,res)=>{
    res.render('graph.ejs');

}