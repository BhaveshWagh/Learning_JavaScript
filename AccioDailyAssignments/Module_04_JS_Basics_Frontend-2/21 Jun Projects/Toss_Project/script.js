let btns = document.querySelectorAll("button");
let output = document.querySelector(".output");

// btns[0] =<button>Head</button>
// btns[1] =<button>Tail</button>

// btns[0].addEventListener()
// btns[1].addEventListener()

for (let i of btns) {
  i.addEventListener("click", () => toss(i.innerText));
}

let userScore = 0;
let computerScore = 0;

function toss(btnClicked) {
  // Select first which btn clicked
  // btnClicked "Head" or "Tail"
  let userSelection = btnClicked;

  let tossArray = ["Head", "Tail"];
  let randomIndex = parseInt(Math.random() * tossArray.length); // 0 or 1
  // console.log(randomIndex)

  let tossResult = tossArray[randomIndex];
  if (userSelection == tossResult) {
    // console.log("User  Win")
    // alert("User Win")
    userScore++;
  } else {
    // console.log("Computer  Win")
    // alert("Computer Win")
    computerScore++;
  }

  output.innerHTML = `User: ${userScore} <br> Computer: ${computerScore}`;
}
