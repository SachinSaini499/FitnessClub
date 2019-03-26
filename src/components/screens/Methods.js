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
    }

return (screenname);
}