// 1. Find the Longest Word With a FOR Loop

function longestWord(str){
    var strSplit = str.split(' ')

    var longestStr = 0;
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestStr){
            longestStr = strSplit[i].length;
        }
    }
    return longestStr

}

console.log(longestWord("hello bhavseh dasdadgd213g hesek"))