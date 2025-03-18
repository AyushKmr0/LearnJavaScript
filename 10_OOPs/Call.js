function SetUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {

    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const user = new createUser("Ayush", "ayush@example.com", 123);
console.log(user);