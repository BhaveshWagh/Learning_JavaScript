let amount = document.querySelector("#bill");
let btns = document.querySelector("button");
let output = document.querySelector(".output");

btns.addEventListener("click", calculateTip);

function calculateTip() {
  let amt = amount.value;
  let tip = (amt * 5) / 100;
  output.innerText = `Tip is ${tip} Rs`;
  // console.log(amt)
}
