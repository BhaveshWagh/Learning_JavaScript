// document.onload = function (){
//     console.log("Document loaded!")
// }

window.onload = function(){
    console.log("window is loaded!")
}

document.addEventListener('DOMContentLoaded',function(){
    console.log("Dom is loaded")
})
addOnLoad(function(){
    console.log("2 window is loaded!")
})
addOnLoad(function(){
    console.log("3 window is loaded!")
})
addOnLoad(function(){
    console.log("4 window is loaded!")
})

function addOnLoad(fun){
    var last = window.onload;
    window.onload = function(){
        if (last) last();
        fun();
    }
}
// window.onload = function(){
//     console.log("window 2 is loaded!")
// }