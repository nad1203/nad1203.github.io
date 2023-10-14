const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;

    if (password === "ns1203") {
        document.location.href='./work.html'
    } else {
        alert("Incorrect password. Please try again.");
        location.reload()
    }
})