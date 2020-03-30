var gamma=require('gamma')

module.exports.polynomialFractionalDerivative=(equationList,alpha)=>{
    var l_f=[],l_dio=[],l_dfo=[];
    var copyEquationList=[]
    var solution=0;

    equationList.forEach(element => {
            if(element[1]>=alpha){
                solution+=(gamma(element[1]+1)/gamma(element[1]-alpha+1))
            }        
    });
    
    console.log(ans)
}