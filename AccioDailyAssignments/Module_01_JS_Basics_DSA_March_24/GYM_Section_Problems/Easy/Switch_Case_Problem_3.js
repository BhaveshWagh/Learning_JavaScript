// Switch_Case_Problem_3
// https://course.acciojob.com/idle?question=bc347fe3-12c2-422c-a8d8-45276cf09e32
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question('', (input) => {
	const [a,b] = input.split(' ').map(Number);
	switchCase3(a,b);
	readline.close();
	
});

function switchCase3(a, b) {

	// Write your code here 
	if(a % b == 0){
        console.log("Remainder is too small")
    }
    else if(a % b == 1){
        console.log("Remainder is small")
    }
    else if(a % b == 2){
        console.log("Remainder is large")
    }
    else{
        console.log("Remainder is too large")
    }
}
