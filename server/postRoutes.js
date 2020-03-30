module.exports.term_simulation=(req,res)=>{
    console.log(req.body)
    var mu=parseFloat(req.body.mu)
    var alpha=parseFloat(req.body.alpha)
    var {successive_differentiation}=require('../js scripts/Fd_Successive_differentiation')
    
    successive_differentiation(mu,alpha).then((obj)=>{
        //console.log(obj.tvfx)    
        res.render('graph.ejs',{obj})
        })

}