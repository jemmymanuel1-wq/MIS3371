
document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();

    document.getElementById("date").innerHTML =
        "Today is: " + today.toDateString();

});

let formErrors = {};

function showError(id, message) {
    document.getElementById(id).innerHTML = message;
    formErrors[id] = true;
}

function clearError(id) {
    document.getElementById(id).innerHTML = "";
    delete formErrors[id];
}

function validateFirstName() {
    let value = document.getElementById("firstName").value;

    let regex = /^[A-Za-z'-]{1,30}$/;

    if (value === "") {
        showError("firstNameError", "First name is required.");
        return false;
    }

    if (!regex.test(value)) {
        showError("firstNameError", "Only letters, apostrophes, and dashes allowed.");
        return false;
    }

    clearError("firstNameError");
    return true;
}
function validateLastName() {
    let value = document.getElementById("lastName").value;

    let regex = /^[A-Za-z'-]{1,30}$/;

    if (value === "") {
        showError("lastNameError", "Last name is required.");
        return false;
    }

    if (!regex.test(value)) {
        showError("lastNameError", "Only letters, apostrophes, and dashes allowed.");
        return false;
    }

    clearError("lastNameError");
    return true;
}
function validateMiddleInitial() {
    let value = document.getElementById("middleInitial").value;

    if (value === "") {
        clearError("middleInitialError");
        return true; // optional field
    }

    let regex = /^[A-Za-z]$/;

    if (!regex.test(value)) {
        showError("middleInitialError", "Must be a single letter.");
        return false;
    }

    clearError("middleInitialError");
    return true;
}

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

    
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("confirmPassword").value;

    let pwMessage = (pw1 === pw2)
        ? "Passwords match"
        : "Passwords do not match";

    document.getElementById("reviewOutput").innerHTML =
        "<h3>PLEASE REVIEW THIS INFORMATION</h3>" +
        "<p><strong>Name:</strong> " + first + " " + middle + " " + last + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>User ID:</strong> " + userid + "</p>" +
        "<p><strong>Gender:</strong> " + (gender ? gender.value : "") + "</p>" +
        "<p><strong>Health Rating:</strong> " + health + "</p>" +
        "<p><strong>Medical History:</strong> " + history + "</p>" +

        
        "<p><strong>Password Check:</strong> " + pwMessage + "</p>";
}
