
document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();

    document.getElementById("date").innerHTML =
        "Today is: " + today.toDateString();

});

function reviewForm() {

    // STEP 1: Get values from form inputs (REAL USER DATA ONLY)
    const first = document.getElementById("firstname").value;
    const last = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // STEP 2: Display them inside reviewOutput div
    document.getElementById("reviewOutput").innerHTML =
        "<h3>PLEASE REVIEW THE INFORMATION</h3>" +
        "<p><strong>First Name:</strong> " + first + "</p>" +
        "<p><strong>Last Name:</strong> " + last + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>";

}
