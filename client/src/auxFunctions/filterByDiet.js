export const filterByDiet=(array,diet)=>{
    let result= array.filter(recipe=> {
        if(typeof recipe.diets[0]==="string"){
           let result_Return= recipe.diets.includes(diet);
           return result_Return;
        }
        else {
           for (let i = 0; i < recipe.diets.length; i++) {
               if(recipe.diets[i].name===diet) return true;
            }
            return false;
        }
    })
    return result;
}