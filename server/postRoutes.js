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

module.exports.poly_simulation=(req,res)=>{
    console.log(req.body);
    var mu=parseFloat(req.body.mu)

    var {polynomial_successive_differentiation}=require('../js scripts/polynomials_FD')

    var {readPoly,manipulateList}=require('../js scripts/readPolynomial')
    var terms=readPoly(req.body.equation);
    console.log("Terms are  :",terms)
    var nestedList=manipulateList(terms)
    console.log(nestedList,mu)
    polynomial_successive_differentiation(nestedList,mu).then((obj)=>{
        res.render('graph.ejs',{obj})
  })
    

}
