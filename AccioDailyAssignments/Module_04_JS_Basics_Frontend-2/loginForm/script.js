function getFormvalue() {
    // Get the form element
    var form = document.getElementById("form1");

    // Get the values of first name and last name from the form
    var firstName = form.fname.value;
    var lastName = form.lname.value;

    // Combine first name and last name
    var fullName = firstName + " " + lastName;

    // Display the full name using an alert
    alert(fullName);
    
    // Prevent the form from submitting and refreshing the page
    // return false;
}

