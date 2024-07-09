// Create and append the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Create and append a div to display the total price
const totalDisplay = document.createElement("div");
// totalDisplay.id = "ans";
totalDisplay.setAttribute("id", "ans");
// totalDisplay.setAttribute("class", "card");
document.body.appendChild(totalDisplay);

const getSum = () => {
  // Select all elements with class 'price'
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Iterate over the NodeList and sum up the prices
  prices.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });

  // Display the total price in the #ans element
  totalDisplay.textContent = "Total Price: " + total;
};

getSumBtn.addEventListener("click", getSum);
