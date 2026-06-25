
document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();

    document.getElementById("date").innerHTML =
        "Today is: " + today.toDateString();

});

function reviewForm() {

    const first = document.getElementById("firstname").value;
    const middle = document.getElementById("middle").value;
    const last = document.getElementById("lastname").value;

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const userid = document.getElementById("userid").value;

    document.getElementById("reviewOutput").innerHTML =
        "<h3>PLEASE REVIEW THIS INFORMATION</h3>" +
        "<p><strong>Name:</strong> " + first + " " + middle + " " + last + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>User ID:</strong> " + userid + "</p>";
}
