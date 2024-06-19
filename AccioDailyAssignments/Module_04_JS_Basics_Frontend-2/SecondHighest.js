function secondHighest(arr) {
    //Write your code here
    // arr.sort((a,b)  => a - b)
    // return arr[arr.length - 2]    
    if (arr.length <= 1) {
        return -Infinity;
    }
    
    let first = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    
    if (second === -Infinity || first === second) {
        return -Infinity;
    } else {
        return second;
    }
}

function Main() {
    var n = prompt("Enter the number of elements");
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = prompt("Enter element " + (i+1));
    }
    alert(secondHighest(arr));
}
Main();



// <!DOCTYPE html>

// <html>

// <head>
// 	<link rel="stylesheet" href="styles.css">
// </head>

// <body>	
// 	<script>
// 		function secondHighest(arr) {
// 			//Write your code here
//     if (arr.length <= 1) {
//         return -Infinity;
//     }
    
//     let first = -Infinity;
//     let second = -Infinity;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] !== first) {
//             second = arr[i];
//         }
//     }
    
//     if (second === -Infinity || first === second) {
//         return -Infinity;
//     } else {
//         return second;
//     }
			
// 		}

// 		function Main() {
// 			var n = prompt("Enter the number of elements");
// 			var arr = [];
// 			for (var i = 0; i < n; i++) {
// 				arr[i] = prompt("Enter element " + (i+1));
// 			}
// 			alert(secondHighest(arr));
// 		}
// 		Main();
// 	</script>

//     <script type="text/javascript" src="./script.js">
// </script>

// </body>

// </html>
