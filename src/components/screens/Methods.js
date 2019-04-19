export const getScreen=(txt)=>{
var screenname="";
    if(txt=="PRE MEAL")
    {
        screenname="MalePreWorkoutMealStack";   
    }
    else if (txt=="WORKOUT")
    {
        screenname="MaleWorkoutStackk";    
    }
    else if(txt=="POST MEAL")
    {
        screenname="MalePostMealStack";
    }
    else if(txt=="SETTINGS")
    {
        screenname="MaleSettingStack" ;
    }

return (screenname);
}

export const checkLoginCredentials=(email,password)=>{
    var outputMessage="";
        
         if(email==""&&password=="")
        {  
            //outputMessage="success" ;      
          outputMessage="Please enter email & password ";         
        }
        else if ((email==""||email!="sachins@rsystems.com") &&password=="12345"  )
        {  
          outputMessage="Please enter valid email";  
        }
        else if((password==""||password!="12345")&&email=="sachins@rsystems.com")
        { 
          outputMessage="Please enter valid password ";
        }
        else if(email=="sachins@rsystems.com" && password=="12345")
        {            
        outputMessage="success" ;
        }
        else
        { 
         outputMessage="Please enter valid email & password ";   
        }              
    
    return (outputMessage);
    }

    export const selectedTab=(index)=>{
        var outputMessage="";            
        if(index==0)
        {
         outputMessage="ADD" ;             
        }
        else if(index==1)
        {  
         outputMessage="Show";  
        }
        return (outputMessage);
        }