/**
Given two integers a and b. Your task is to print Yes if one of these is 10 or their sum is 10, else print No.
Input Format
The First line contains two integers a and b.
Output Format
Print Yes if the given condition satisfies else print No.
 */
const a = 10, b = 5
if(a == 10 || b == 10){
    console.log("Yes")
}
else if(a + b == 10){
    console.log("Yes")
}
else{
    console.log("No")
}