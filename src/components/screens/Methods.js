export const getScreen=(txt)=>{
var screenname="";
    if(txt=="PRE-WORKOUT MEAL")
    {
        screenname="MalePreMeal";   
    }
    else if (txt=="WORKOUT")
    {
        screenname="MaleWorkout";    
    }
    else if(txt=="POST WORKOUT MEAL")
    {
        screenname="MalePostMeal";
    }
    else if(txt=="SETTINGS")
    {
    }

return (screenname);
}