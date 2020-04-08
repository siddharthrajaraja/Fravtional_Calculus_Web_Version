module.exports.readPoly=(string)=>{
        console.log(string)
        var flag=0;

        var termsList=[]
        
        // This Loop is to get last term of the equation:
        for(var i=string.length-1;i>=0;i--){
            if((string[i]=='+' || string[i]=='-') && string[i-1]!='^' )break;
        }
        termsList.push(string.substr(i,))



        for(var i=1;i<string.length;i++){
            var j;
            if((string[i]=='+' || string[i]=='-') && string[i-1]!='^' )
            {   
                if(flag==0){
                        // This is to get first term of equation
                       // console.log("i am elemeny", string.substr(0,i))
                        termsList.push( string.substr(0,i))
                        flag=1;
                        j=i+1
                }   
                else{
                        
                        var childStr=string.substr(j-1,i)
                       // console.log(childStr)
                        var count=0;
                        var pos=1;

                        // This is to get terms in middle
                        for(var inner=1;inner<childStr.length;inner++){
                            
                            if((childStr[inner]=='+' || childStr[inner]=='-') && childStr[inner-1]!='^' )
                                {
                                        count++;
                                        pos=inner;
                                }
                            if(count==1)break;
                        }

                        //console.log( "i am ellemtn", childStr.substr(0,pos+1));
                        termsList.push(childStr.substr(0,pos))

                        j=i+1
                }            
            }    
            
        }

        

        //console.log(termsList)
        return termsList;
        
}


// This is to manipulate termsList and get a nested list out of terms of equation comprising of [coefficients,powers]

module.exports.manipulateList=(termsList)=>{
    var parentList=[]
    
    var copyFirst=termsList[0]
    termsList=termsList.slice(1,)
    termsList.push(copyFirst)

    termsList.forEach(element => {
        var child=[]
        var coefficients=parseFloat(element.split('*')[0])
        var rhs=element.split('*')[1]
        var powers
        if(rhs!=undefined){
            var powers=parseFloat(rhs.split('^')[1])
            if(isNaN(powers))powers=1;
            
        }
        else{
            powers=0
        }
        child.push(coefficients)
        child.push(powers)
        parentList.push(child)
        //console.log(element.split('*'),coefficients)

    });
    console.log(parentList)

    return parentList
}