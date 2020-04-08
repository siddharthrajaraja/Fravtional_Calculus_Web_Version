var gamma =require('gamma')

module.exports.polynomial_successive_differentiation=async(l,alpha)=>{
    var i=0,p;
    var l_f=[],t=[],l_dio=[],l_dfo=[];
    var k=0;
    p=l.length-1;
    var ans=[]
    while(p>=0)
    {
        if (l[1]<alpha)
        {
            l.splice(p,1);
        }
        p--;
    }
    l.forEach(ele => {

        child=[];
        child.push(ele[0]*(gamma(ele[1]+1)/gamma(ele[1]-alpha+1)));
        child.push((ele[1]-alpha));

        //console.log("Yogita Amankumar" ,ele,child);
        ans.push(child);
         
     });
    while (i<10) {
        t.push(i);
        f=0;
        dio=0;
        dfo=0;
        l.forEach(ele => {
           // console.log(ele);
            f+=Math.pow(t[k],ele[1]);
            dio+=(ele[0]*ele[1]*Math.pow(t[k],ele[1]-1));
            dfo+=ele[0]*(gamma(ele[1]+1)/gamma(ele[1]-alpha+1))* Math.pow(t[k],ele[1]-alpha);
           // console.log("i am ub",f,dio,dfo);
        });
        
        l_f.push(f);
        l_dio.push(dio);
        l_dfo.push(dfo);
        i+=0.01;
        k++;
    }
    
    console.log(t.length,l_f.length,l_dio.length,l_dfo.length);
    return {
        "tfx":t,
        "tfy":l_f,
        "tdioy":l_dio,
        "tdfoy":l_dfo,
        "ans":ans
    } 
}