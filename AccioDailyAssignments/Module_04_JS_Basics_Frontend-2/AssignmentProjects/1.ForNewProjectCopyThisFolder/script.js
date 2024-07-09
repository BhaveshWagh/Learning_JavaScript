
let container = document.getElementById('container');

let selctedCells = new Set();



// rows => 20 rows(1 - 20)
// 26 columns(A - Z)

// header row: 0th then A-Z
for(let i = 0; i<=26; i++){
  let cell = document.createElement('div');
  cell.className = 'cell header-cell';
//   cell.innerText = i;
cell.innerText =  i==0 ? " " : String.fromCharCode(64+i); // i = 1+64, 26
  container.append(cell);
}

// rows and columns, && header column

for(let row=1; row<=20; row++){
    let rowHeader = document.createElement('div');
    rowHeader.className = 'cell header-cell';
    rowHeader.innerText = row;
    container.append(rowHeader);

    for(let col = 1; col<=26; col++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute("contenteditable", "true");
        // cell.innerHTML = row + " " + col
        cell.addEventListener('click', handleCellClick)
        container.append(cell);
    }
}


// multi-select

function handleCellClick(event){
    console.log(event);
     let targetCell = event.target; 

    // if ctrl is pressed in windows or command(meta key) is pressed in mac

    // selctedCells.className = "cell selected-cell"
    // selctedCells.classList.add('selected-cell');

    if(!event.ctrlKey && !event.metaKey){
        selctedCells.forEach((value)=>{
             value.classList.remove('selected-cell');
        })
        selctedCells.clear();
    }

  else if(selctedCells.has(targetCell)){
         selctedCells.delete(targetCell);
         targetCell.classList.remove('selected-cell');
   }
   else{
    targetCell.classList.add('selected-cell');
    selctedCells.add(targetCell);
    // console.log(selctedCells);
   }

}

// lets makle thinngs bold: 

let boldbtm = document.querySelector('#boldbtn');

