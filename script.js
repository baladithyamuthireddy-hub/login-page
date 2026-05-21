const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

// SWITCH FORMS
registerLink.onclick = () => {
    wrapper.classList.add("active");
}

loginLink.onclick = () => {
    wrapper.classList.remove("active");
};

// REGISTER (LOCAL STORAGE)
document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(user => user.email === email);

    if(existingUser){
        alert("User already exists");
        return;
    }

    users.push({
        name,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");

    wrapper.classList.remove("active");
});

// LOGIN (LOCAL STORAGE)
document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
        u => u.email === email && u.password === password
    );

    if(user){

        document.querySelector(".wrapper").style.display = "none";

        document.getElementById("welcomeContainer").style.display = "flex";
        document.getElementById("welcomeBox").innerText = "Welcome " + user.name;

    } else {
        alert("Invalid email or password");
    }
});