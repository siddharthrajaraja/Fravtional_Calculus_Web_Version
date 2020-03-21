
var gamma =require('gamma')

module.exports.successive_differentiation=async(mu,alpha)=>{
    var i=0;
    var f=[],t=[],dio=[],dfo=[];
    var k=0;
    while (i<10) {
        t.push(i);
        f.push(Math.pow(t[k],mu))
        dio.push(mu*Math.pow(t[k],mu-1))
        dfo.push( (gamma(mu+1)/gamma(mu-alpha+1)  )* Math.pow(t[k],mu-alpha)  )
        i+=0.01;
        k++;
    }
     
    return {
        "tfx":t,
        "tfy":f,
        "tdioy":dio,
        "tdfoy":dfo

    }
    

}



