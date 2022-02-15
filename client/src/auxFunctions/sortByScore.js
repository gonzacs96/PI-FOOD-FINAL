export const sortByScoreLess_More =(array)=>{
    let result=array.sort(function(a, b){
        var scoreA=a.score, scoreB=b.score;
        if (scoreA < scoreB) 
         return -1;
        if (scoreA > scoreB)
         return 1;
        return 0; 
       });
    return result;   
}

export const sortByScoreMore_Less=(array)=>{
    let result=array.sort(function(a, b){
        var scoreA=a.score, scoreB=b.score;
        if (scoreA > scoreB) 
         return -1;
        if (scoreA < scoreB)
         return 1;
        return 0; 
       });
    return result;   
}