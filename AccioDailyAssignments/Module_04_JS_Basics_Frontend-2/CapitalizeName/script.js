//your JS code here. If required.
// Why this.value is used:
//*  Using this.value is more efficient and concise than repeatedly fetching the element with document.getElementById. It avoids unnecessary lookups and works seamlessly in scenarios where multiple elements trigger the same event.

const getName = document.getElementById("fname");
getName.addEventListener("blur", function () {
  this.value = this.value.toUpperCase();
});
