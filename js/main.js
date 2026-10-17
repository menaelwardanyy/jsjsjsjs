//=========
function validateForm() {
    var user = document.forms[0]["user"].value;
    var email = document.forms[0]["email"].value;
    var pass = document.forms[0]["pass"].value;
    var confirm = document.forms[0]["confirm"].value;
    var result = document.getElementById("result");
    result.setAttribute("class", "alert theme-danger d-block text-center");
    if (user == "" && email == "" && pass == "" && confirm == "") {
        result.innerHTML = "Please fill in all fields.";
        return false;
    } else if (user.length < 5 || user.length > 15) {
        result.innerHTML = "Please enter your name (5-15 characters).";
        return false;
    } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com", 5) == -1) {
        result.innerHTML = "enter a valid email";
        return false;
    } else if (pass.length < 8 || pass !== confirm) {
        result.innerHTML = "Passwords do not match.";
        return false;
    }
}
