const employees = [
  {
    name: "John Doe",
    role: "SDE",
    salary: 100000,
    phoneNumber: 2545251254,
    email: "johndoe4546@gmail.com",
    companyName: "TakeuForward",
  },
  {
    name: "Harshal chobey",
    role: "QA",
    salary: 5200000,
    phoneNumber: 9588525254,
    email: "hchobey4546@gmail.com",
    companyName: "Google",
  },
];

const tbody = document.getElementById("tbody");

let employeeId = 1;

function addEmployee(employeeObj) {
  //add a new employee into the table

  const tr = document.createElement("tr");
  //<tr></tr>
  const employeeIdCell = document.createElement("td");
  employeeIdCell.innerText = employeeId++; // 1000
  //<td>1002</td>
  tr.appendChild(employeeIdCell);

  for (let key in employeeObj) {
    const cell = document.createElement("td");
    cell.innerText = employeeObj[key]; //key = comapanyName then employeeObj["comapanyName"]
    tr.appendChild(cell);
  }

  /**
   * <td>
   * <button>delete</button>
   * <button>Edit</button>
   * </td>
   */

  const actionsCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";

  deleteButton.addEventListener("click", deleteRecord);
  editButton.addEventListener("click", editRecord);

  actionsCell.append(deleteButton, editButton);

  tr.appendChild(actionsCell);

  tbody.appendChild(tr);
}
employees.forEach((emp) => {
  addEmployee(emp);
});

//popup handling
const popup = document.querySelector(".popup");

function togglePopup() {
  // toggles the popup
  if (popup.style.display === "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
}

//handle form submission
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let employee = {
    name: form.name.value,
    role: form.role.value,
    salary: form.salary.value,
    phoneNumber: form.phoneNumber.value,
    email: form.email.value,
    companyName: form.companyName.value,
  };

  if (currentEditRow) {
    // Update the existing row
    const cells = currentEditRow.querySelectorAll("td");
    cells[1].innerText = employee.name;
    cells[2].innerText = employee.role;
    cells[3].innerText = employee.salary;
    cells[4].innerText = employee.phoneNumber;
    cells[5].innerText = employee.email;
    cells[6].innerText = employee.companyName;

    currentEditRow = null; //Clear the current row after editing
  } else {
    //Add new employee
    addEmployee(employee);
  }

  form.reset();
  togglePopup();
});

function deleteRecord(e) {
  //event listener callback for the delete button
  //e.target => will be the delete button on which use clicks
  let tr = e.target.parentNode.parentNode;
  tr.remove();
}

let currentEditRow = null; // To keep track of the row being edited

// Updated editRecord function
function editRecord(e) {
  const row = e.target.parentNode.parentNode; // Get the row
  const cells = row.querySelectorAll("td"); // Get all cells in the row

  // Populate the form with current row data
  form.name.value = cells[1].innerText;
  form.role.value = cells[2].innerText;
  form.salary.value = cells[3].innerText;
  form.phoneNumber.value = cells[4].innerText;
  form.email.value = cells[5].innerText;
  form.companyName.value = cells[6].innerText;

  currentEditRow = row; // Store the row being edited

  togglePopup(); // Show the popup with the form
}
