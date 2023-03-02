function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
    let users = [];
    const usersText = localStorage.getItem('users');
    if(usersText){
        users = JSON.parse(usersText);
    }
    if(!users.includes(nameEl.value)){
        users.push(nameEl.value);
    }
     localStorage.setItem('users', JSON.stringify(users));
  }