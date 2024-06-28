const codes = document.querySelectorAll(".code")
 
codes[0].focus()
 
codes.forEach((code,idx)=>{
    code.addEventListener("keydown",(e)=>{
        console.log(e.key)
        const keyPressed = e.key
 
        if(keyPressed>=0 && keyPressed<=9){
            codes[idx].value=''
            if(idx<codes.length-1){
                setTimeout(()=>codes[idx+1].focus(),10)
                // setTimeout(function(){
                //     codes[index+1].focus()
                // },10)
            }
        }
        else if(keyPressed==="Backspace"){
            if(idx>0){
                setTimeout(()=>codes[idx-1].focus(),10)
            }
        }
    })
})

// // Wait until the entire page is loaded
// document.addEventListener("DOMContentLoaded", () => {
//     // Get all input elements with class 'digit-input'
//     const inputs = document.querySelectorAll(".code");

//     // Loop through each input element
//     inputs.forEach((input, index) => {
//       // When a user types in an input
//       input.addEventListener("input", () => {
//         // If a single character is entered and it's not the last input
//         if (input.value.length === 1 && index < inputs.length - 1) {
//           // Move focus to the next input
//           inputs[index + 1].focus();
//         }
//       });

//       // When a user presses a key down in an input
//       input.addEventListener("keydown", (e) => {
//         // If the key pressed is Backspace
//         if (e.key === "Backspace") {
//           // If the current input is empty and it's not the first input
//           if (input.value.length === 0 && index > 0) {
//             // Move focus to the previous input
//             inputs[index - 1].focus();
//             // Clear the value of the previous input
//             inputs[index - 1].value = "";
//           }
//         }
//       });
//     });
//   });