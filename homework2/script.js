
document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();

    document.getElementById("date").innerHTML =
        "Today is: " + today.toDateString();

});

function reviewForm() {

    function safeGet(id) {
        let el = document.getElementById(id);
        return el ? el.value : "MISSING FIELD: " + id;
    }

    const first = safeGet("firstName");
    const middle = safeGet("middleInitial");
    const last = safeGet("lastName");

    const email = safeGet("email");
    const phone = safeGet("phone");
    const userid = safeGet("userID");

    document.getElementById("reviewOutput").innerHTML =
        "<h3>PLEASE REVIEW THIS INFORMATION</h3>" +
        "<p><strong>Name:</strong> " + first + " " + middle + " " + last + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>User ID:</strong> " + userid + "</p>";
}
