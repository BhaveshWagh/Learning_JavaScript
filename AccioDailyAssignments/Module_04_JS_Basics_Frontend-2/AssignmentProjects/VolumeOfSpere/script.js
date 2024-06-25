function volume_sphere(e) {
  //Write your code here
  e.preventDefault(); // Prevent form submission and page reload

  // Retrieve the radius value entered by the user
  var radiusInput = document.getElementById("radius").value.trim();

  // Validate the input: Check if the input is a non-negative number
  var radius = parseFloat(radiusInput); // Convert input to a float number

  if (isNaN(radius) || radius < 0) {
    // Display 'NaN' in the volume field for invalid input
    document.getElementById("volume").value = "NaN";
  } else {
    // Calculate the volume of the sphere
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to four decimal places
    volume = volume.toFixed(4);

    // Display the calculated volume in the volume field
    document.getElementById("volume").value = volume;
  }
}
window.onload = function () {
  document.getElementById("MyForm").onsubmit = function (e) {
    volume_sphere(e); // Call the volume_sphere function to calculate and display the volume
  };
};
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
