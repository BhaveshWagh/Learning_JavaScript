// script1.js

let taskBtn = document.getElementById("addTask");
let toDoContainer = document.getElementById("todo");

taskBtn.addEventListener("click", () => {
  let cardContainer = document.createElement("div");
  cardContainer.style.cssText = `
      background-color: wheat;
       border: 2px solid blue;
         margin-bottom: 10px;
    `;
  let card = document.createElement("div");
  // card.className = 'card';
  card.setAttribute("class", "card");
  card.setAttribute("contenteditable", true);
  // card.contentEditable = true;
  card.innerHTML = "Default Card";
  // toDoContainer.appendChild(card);
  cardContainer.append(card);

  card.addEventListener("click", (events) => {
    //    let selectedCard = events.target;
    //    console.log(selectedCard)
    //    console.log(selectedCard.innerText)
    if (card.innerHTML === "Default Card") {
      card.innerHTML = "";
    }
  });

  card.addEventListener("blur", () => {
    let parentCard = card.parentElement;
    if (card.innerHTML === "") {
      // blurredCard.innerHTML = "Default Card"
      parentCard.remove();
      // cardContainer.remove();
    }
  });

  // drop down:

  let dropDown = document.createElement("select");
  dropDown.innerHTML = `
        <option value="todo">TODO</option>
        <option value="progress">PROGRESS</option>
        <option value="done">DONE</option>
    `;

  // card.append(dropDown);
  cardContainer.append(dropDown);

  dropDown.addEventListener("change", (event) => {
    //  console.log(event.target.value)
    let selectedValue = event.target.value; // progress
    let columnToBeMoved = document.getElementById(selectedValue); // progress column
    columnToBeMoved.append(cardContainer); // closures
  });

  toDoContainer.append(cardContainer);
});

{
  /* <div class=></div> */
}
