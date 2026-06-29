
document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();

    document.getElementById("date").innerHTML =
        "Today is: " + today.toDateString();

});

function reviewForm() {

    let first = document.getElementById("firstName").value;
    let middle = document.getElementById("middleInitial").value;
    let last = document.getElementById("lastName").value;

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let userid = document.getElementById("userID").value;

    let gender = document.querySelector('input[name="gender"]:checked');
    let health = document.getElementById("healthRating").value;

    let history = "";

    if (document.getElementById("diabetes").checked) history += "Diabetes ";
    if (document.getElementById("highBP").checked) history += "High BP ";
    if (document.getElementById("asthma").checked) history += "Asthma ";
    if (document.getElementById("heartDisease").checked) history += "Heart Disease ";
    if (document.getElementById("allergies").checked) history += "Allergies ";

    document.getElementById("reviewOutput").innerHTML =
        "<h3>PLEASE REVIEW THIS INFORMATION</h3>" +

        "<p><strong>Name:</strong> " + first + " " + middle + " " + last + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>User ID:</strong> " + userid + "</p>" +

        "<p><strong>Gender:</strong> " + (gender ? gender.value : "") + "</p>" +
        "<p><strong>Health Rating:</strong> " + health + "</p>" +
        "<p><strong>Medical History:</strong> " + history + "</p>";
}
