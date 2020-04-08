var jsonfile = require('jsonfile')
const rn =require('random-number')

module.exports.dashboard=(req,res)=>{
   var {quotes}=require('../js scripts/json/quotes')
   var options={
      min:0,
      max: quotes.length-1,
      integer:true
   }
   
   console.log(quotes.length,quotes[rn(options)])
      
   res.render('dashboard.ejs',{quote:quotes[rn(options)]})

}

module.exports.homepage=(req,res)=>{
   res.render('homepage.ejs')
}

   
   