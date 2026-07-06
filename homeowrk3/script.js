
document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();

    document.getElementById("date").innerHTML =
        "Today is: " + today.toDateString();
    
    updatedHealthValue();

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

function validateDOB() {
    let dobValue = document.getElementById("dob").value;

    if (!dobValue) {
        showError("dobError", "Date of birth is required.");
        return false;
    }

    let dob = new Date(dobValue);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    let monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 0 || age > 120) {
        showError("dobError", "Age must be between 0 and 120 years.");
        return false;
    }

    clearError("dobError");
    return true;
}

function formatSSN() {
    let input = document.getElementById("ssn");

    let value = input.value.replace(/\D/g, ""); // remove non-digits

    if (value.length > 9) {
        value = value.substring(0, 9);
    }

    let formatted = value;

    if (value.length > 3) {
        formatted = value.substring(0, 3) + "-" + value.substring(3);
    }

    if (value.length > 5) {
        formatted =
            value.substring(0, 3) +
            "-" +
            value.substring(3, 5) +
            "-" +
            value.substring(5);
    }

    input.value = formatted;
}

function validateSSN() {
    let ssn = document.getElementById("ssn").value;

    let regex = /^\d{3}-\d{2}-\d{4}$/;

    if (!regex.test(ssn)) {
        showError("ssnError", "SSN must be in format XXX-XX-XXXX.");
        return false;
    }

    clearError("ssnError");
    return true;
}

function validateUserID() {
    let id = document.getElementById("userID").value;

    let regex = /^[A-Za-z][A-Za-z0-9_-]{4,19}$/;

    if (id === "") {
        showError("userIDError", "User ID is required.");
        return false;
    }

    if (!regex.test(id)) {
        showError("userIDError", "5–20 chars, must start with a letter, no spaces or special symbols.");
        return false;
    }

    clearError("userIDError");
    return true;
}

function validatePassword() {
    let pw = document.getElementById("password").value;
    let id = document.getElementById("userID").value;

    let errors = [];

    if (pw.length < 8) {
        errors.push("At least 8 characters");
    }

    if (!/[A-Z]/.test(pw)) {
        errors.push("1 uppercase letter");
    }

    if (!/[a-z]/.test(pw)) {
        errors.push("1 lowercase letter");
    }

    if (!/[0-9]/.test(pw)) {
        errors.push("1 number");
    }

    if (!/[!@#$%^&*()_\-+=<>.?/~`]/.test(pw)) {
        errors.push("1 special character");
    }

    if (pw === id && id !== "") {
        errors.push("Password cannot match User ID");
    }

    if (errors.length > 0) {
        showError("passwordError", "Password needs: " + errors.join(", "));
        return false;
    }

    clearError("passwordError");
    return true;
}

function validateConfirmPassword() {
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("confirmPassword").value;

    if (pw2 === "") {
        showError("confirmPasswordError", "Please confirm password.");
        return false;
    }

    if (pw1 !== pw2) {
        showError("confirmPasswordError", "Passwords do not match.");
        return false;
    }

    clearError("confirmPasswordError");
    return true;
}

function validateAddress1() {
    let value = document.getElementById("address1").value.trim();

    if (value.length < 2 || value.length > 30) {
        showError("address1Error", "Address must be between 2 and 30 characters.");
        return false;
    }

    clearError("address1Error");
    return true;
}
function validateCity() {
    let value = document.getElementById("city").value.trim();

    let regex = /^[A-Za-z ]{2,30}$/;

    if (!regex.test(value)) {
        showError("cityError", "City must contain only letters and be 2–30 characters.");
        return false;
    }

    clearError("cityError");
    return true;
}

function validateZipCode() {
    let value = document.getElementById("zipCode").value.trim();

    let regex = /^\d{5}$/;

    if (!regex.test(value)) {
        showError("zipCodeError", "ZIP Code must be exactly 5 digits.");
        return false;
    }

    clearError("zipCodeError");
    return true;
}

function validateEmail() {
    let email = document.getElementById("email");

    email.value = email.value.toLowerCase();

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value)) {
        showError("emailError", "Enter a valid email address.");
        return false;
    }

    clearError("emailError");
    return true;
}

function updateHealthValue() {
    let value = document.getElementById("healthRating").value;
    document.getElementById("healthValue").textContent = value;
}

function validateForm() {

    let ok =
        validateFirstName() &
        validateLastName() &
        validateMiddleInitial() &
        validateDOB() &
        validateSSN() &
        validateUserID() &
        validatePassword() &
        validateConfirmPassword()
        validateAddress1() &
        validateCity() &
        validateZipCode() &
        validateEmail();

    if (Object.keys(formErrors).length === 0) {
        document.getElementById("submitBtn").style.display = "inline-block";
        alert("All fields valid. You may now submit.");
    } else {
        document.getElementById("submitBtn").style.display = "none";
        alert("Please fix errors before submitting.");
    }

    return ok;
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
