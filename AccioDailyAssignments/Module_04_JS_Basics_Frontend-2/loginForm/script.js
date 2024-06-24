// script.js

function getFormvalue(e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the form element
    var form = document.getElementById('form1');

    // Get the values of the input fields
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Display the values using an alert
    alert(firstName + ' ' + lastName);
}
