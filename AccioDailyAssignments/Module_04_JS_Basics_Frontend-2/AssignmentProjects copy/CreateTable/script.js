function insert_Row() {
  //Write your code here
  let table = document.getElementById("sampleTable");

  let insert_Row = table.insertRow(0);

  let newCell1 = insert_Row.insertCell(0);
  let newCell2 = insert_Row.insertCell(1);

  newCell1.innerHTML = "New Cell1";
  newCell2.innerHTML = "New Cell2";
}


