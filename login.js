function login() {
    const emailElement = document.querySelector("#email");
    localStorage.setItem("email", emailElement.value);
    const passwordElement = document.querySelector("#password");
    localStorage.setItem("password", passwordElement.value);
    window.location.href = "index.html";
  }