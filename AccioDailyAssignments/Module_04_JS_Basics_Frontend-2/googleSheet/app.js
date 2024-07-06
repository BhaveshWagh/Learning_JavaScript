let container = document.getElementById("container");

let selctedCellsCollection = new Set();
// console.log("selectedcells", selctedCellsCollection);

// rows => 20 rows(1 - 20)
// 26 columns(A - Z)

// header row: 0th then A-Z
for (let i = 0; i <= 26; i++) {
  let cell = document.createElement("div");
  cell.className = "cell header-cell";
  //   cell.innerText = i;
  cell.innerText = i == 0 ? " " : String.fromCharCode(64 + i); // i = 1+64, 26
  container.append(cell);
}

// rows and columns, && header column

for (let row = 1; row <= 20; row++) {
  let rowHeader = document.createElement("div");
  rowHeader.className = "cell header-cell";
  rowHeader.innerText = row;
  container.append(rowHeader);

  for (let col = 1; col <= 26; col++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.setAttribute("contenteditable", "true");
    // cell.innerHTML = row + " " + col
    cell.addEventListener("click", handleCellClick);
    container.append(cell);
  }
}

// multi-select

function handleCellClick(event) {
  // console.log(event);
  let targetCell = event.target;

  // if ctrl is pressed in windows or command(meta key) is pressed in mac

  // selctedCells.className = "cell selected-cell"
  // selctedCells.classList.add('selected-cell');

  if (!event.ctrlKey && !event.metaKey) {
    selctedCellsCollection.forEach((value) => {
      value.classList.remove("selected-cell");
    });
    selctedCellsCollection.clear();
  } else if (selctedCellsCollection.has(targetCell)) {
    selctedCellsCollection.delete(targetCell);
    targetCell.classList.remove("selected-cell");
  } else {
    targetCell.classList.add("selected-cell");
    selctedCellsCollection.add(targetCell);
    // console.log(selctedCellsCollection);
  }
}

// lets make things bold:

let boldbtn = document.querySelector("#boldbtn");

boldbtn.addEventListener("click", () => {
  for (let t of selctedCellsCollection) {
    t.style.fontWeight = t.style.fontWeight == "bold" ? "normal" : "bold";
  }
});

// change text color

let textColor = document.querySelector("#text-color");

textColor.addEventListener("change", (event) => {
  let selectedColor = event.target.value;
  // console.log(selectedColor);
  for (let t of selctedCellsCollection) {
    t.style.color = selectedColor;
  }
});

// change background color

let backgroundColor = document.getElementById("bg-color");

backgroundColor.addEventListener("change", (e) => {
  let selectedBgColor = e.target.value;
  // console.log(selectedBgColor);
  for (let t of selctedCellsCollection) {
    t.style.backgroundColor = selectedBgColor;
  }
});

// change text size

let fontSizeInput = document.getElementById("fontsizeinput");

fontSizeInput.addEventListener("change", (e) => {
  let selectedText = e.target.value;
  // console.log(selectedText)
  for (let t of selctedCellsCollection) {
    t.style.fontSize = selectedText + "px";
  }
});

// text - align center

// align left

let alignTextLeft = document.getElementById("left");

alignTextLeft.addEventListener("click", () => {
  for (let t of selctedCellsCollection) {
    t.style.textAlign = "left";
  }
});

// align center
let alignTextCenter = document.getElementById("center");

alignTextCenter.addEventListener("click", () => {
  for (let t of selctedCellsCollection) {
    t.style.textAlign = "center";
  }
});

// align right

let alignTextRight = document.getElementById("right");

alignTextRight.addEventListener("click", () => {
  for (let t of selctedCellsCollection) {
    t.style.textAlign = "right";
  }
});

// select own fonts

let selectFontFamily = document.getElementById("select-font-family");

selectFontFamily.addEventListener("change", (e) => {
  let selectedfont = e.target.value;
  // console.log(selectedfont)
  for (let t of selctedCellsCollection) {
    t.style.fontFamily = selectedfont;
  }
});

// // generate more rows and columns
// // document.addEventListener("DOMContentLoaded", () => {
//   const listContainer = document.getElementById("container");

//   function generateRowAndColumns(count) {
//     for (let row = 1; row <= count; row++) {
//       let rowHeader = document.createElement("div");
//       rowHeader.className = "cell header-cell";
//       rowHeader.innerText = row + 20;
//       listContainer.append(rowHeader);

//       // for (let col = 1; col <= count; col++) {
//       //   const cell = document.createElement("div");
//       //   cell.className = "cell";
//       //   cell.setAttribute("contenteditable", "true");
//       //   // cell.innerHTML = row + " " + col
//       //   cell.addEventListener("click", handleCellClick);
//       //   listContainer.append(cell);
//       // }
//     }
//   }

//   function checkScroll() {
//     if (
//       listContainer.scrollTop + listContainer.clientHeight >=
//       listContainer.scrollHeight - 10
//     ) {
//       // Small buffer to ensure it works properly
//       generateRowAndColumns(10);
//     }
//   }
//   listContainer.addEventListener("scroll", checkScroll);
// // });


// infinite scroll

// const viewportWidth = 800; // Fixed width of the visible portion
// const viewportHeight = 600; // Fixed height of the visible portion
// const cellWidth = 100;
// const cellHeight = 50;

// let startRow = 0;
// let endRow = Math.ceil(viewportHeight / cellHeight);
// let startCol = 0;
// let endCol = Math.ceil(viewportWidth / cellWidth);

// // Function to create a single cell element
// function createCell(row, col) {
//   const cell = document.createElement('div');
//   cell.className = 'cell';
//   cell.contentEditable = true;
//   cell.dataset.row = row;
//   cell.dataset.col = col;
//   cell.style.position = 'absolute';
//   cell.style.top = `${row * cellHeight}px`;
//   cell.style.left = `${col * cellWidth}px`;
//   cell.style.width = `${cellWidth}px`;
//   cell.style.height = `${cellHeight}px`;
//   return cell;
// }

// // Function to render the visible cells
// function renderCells() {
//   // Clear the existing cells
//   container.innerHTML = '';

//   // Create and render the visible cells
//   for (let row = startRow; row <= endRow; row++) {
//     for (let col = startCol; col <= endCol; col++) {
//       const cell = createCell(row, col);
//       container.appendChild(cell);
//     }
//   }
// }

// // Function to handle scroll events
// function handleScroll() {
//   const scrollTop = container.scrollTop;
//   const scrollLeft = container.scrollLeft;

//   // Calculate the new range of visible rows and columns based on scroll position
//   startRow = Math.floor(scrollTop / cellHeight);
//   endRow = startRow + Math.ceil(viewportHeight / cellHeight);
//   startCol = Math.floor(scrollLeft / cellWidth);
//   endCol = startCol + Math.ceil(viewportWidth / cellWidth);

//   // Re-render the cells for the new visible range
//   renderCells();
// }

// // Set the dimensions of the container
// container.style.width = `${viewportWidth}px`;
// container.style.height = `${viewportHeight}px`;
// container.style.overflow = 'auto';
// container.style.position = 'relative';

// // Attach scroll event listener to the container
// container.addEventListener('scroll', handleScroll);

// // Initial render
// renderCells();