let taskBtn = document.getElementById("addTask");
let toDoContainer = document.getElementById("todo");

taskBtn.addEventListener("click", () => {
  // console.log("clicked!")
  let cardContainer = document.createElement("div");
  cardContainer.style.cssText = `
      background-color: black;
       border: 2px solid gray;
       color:white;
         margin-bottom: 10px;
    `;
  let card = document.createElement("div");
  // class added to the card element
  card.setAttribute("class", "card");
  card.setAttribute("contenteditable", true);

  card.innerHTML = "Default Task";
  // console.log(cardContainer)
  // console.log(card)
  cardContainer.append(card);

  card.addEventListener("click", () => {
    // let selectedCard = e.target;
    // console.log(selectedCard)
    // console.log(card.innerText)
    if (card.innerHTML === "Default Task") {
      card.innerHTML = "";
    }
    if (card.innerHTML !== "Default Task") {
      card.setAttribute("contenteditable", true);
    }
  });
  // if the you leave a card empty it deleted automatically
  card.addEventListener("blur", () => {
    let parentCard = card.parentElement;
    //    console.log(parentCard)
    if (card.innerHTML === "") {
      parentCard.remove();
    }
  });

  // drop down:
  let dropDown = document.createElement("select");

  dropDown.innerHTML = `
  <option value="todo">TODO</option>
  <option value="progress">PROGESS</option>
  <option value="done">DONE</option>`;

  //   card.append(dropDown)
  cardContainer.append(dropDown);

  dropDown.addEventListener("change", (e) => {
    // console.log(e.target.value)
    let selectedValue = e.target.value; // progress
    let columnToBeMoved = document.getElementById(selectedValue);
    columnToBeMoved.append(cardContainer); // closures
  });
  // dynamic way
  // let options = ["TODO", "PROGRESS","DONE"]
  // for(let item of options) {
  //     let optionTag = document.createElement('option')

  //     // option tag value means the tag have a value attribute right
  //     optionTag.value = item.toLowerCase();
  //     optionTag.innerHTML = item;

  //     // console.log(optionTag)
  //     // console.log(optionTag.innerHTML)
  //     dropDown.appendChild(optionTag)
  //     // console.log(item)
  // }
  // card.append(dropDown)

  toDoContainer.append(cardContainer);
});

// let taskBtn = document.getElementById('addTask');
// let toDoContainer = document.getElementById('todo');

// taskBtn.addEventListener("click", ()=>{
//     let cardContainer = document.createElement('div');
//     cardContainer.style.cssText = `
//       background-color: wheat;
//        border: 2px solid blue;
//          margin-bottom: 10px;
//     `
//     let card = document.createElement('div');
//     // card.className = 'card';
//     card.setAttribute("class", "card");
//     card.setAttribute("contenteditable", true)
//     // card.contentEditable = true;
//     card.innerHTML = "Default Card"
//     // toDoContainer.appendChild(card);
//     cardContainer.append(card);

//     card.addEventListener("click", (events)=>{
//     //    let selectedCard = events.target;
//     //    console.log(selectedCard)
//     //    console.log(selectedCard.innerText)
//        if(card.innerHTML === "Default Card"){
//                 card.innerHTML = "";
//        }
//     })

//     card.addEventListener("blur", ()=>{
//          let parentCard = card.parentElement;
//         if(card.innerHTML === ""){
//             // blurredCard.innerHTML = "Default Card"
//             parentCard.remove();
//             // cardContainer.remove();
//         }
//     })

//     // drop down:

//     let dropDown = document.createElement('select');
//     dropDown.innerHTML = `
//         <option value="todo">TODO</option>
//         <option value="progress">PROGRESS</option>
//         <option value="done">DONE</option>
//     `

//     // card.append(dropDown);
//     cardContainer.append(dropDown);

//     dropDown.addEventListener("change", (event)=>{
//         //  console.log(event.target.value)
//         let selectedValue = event.target.value; // progress
//         let columnToBeMoved = document.getElementById(selectedValue); // progress column
//         columnToBeMoved.append(cardContainer); // closures

//     })

// toDoContainer.append(cardContainer);

// })

// {/* <div class=></div> */}
