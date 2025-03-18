// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }


}

const newUser = new User("Ayush", "ayush@example.com", 123);

console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());





// using functions

function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Object.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

Object.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const newUser2 = new User2("yeash", "yeash@example.com", 3421);

console.log(newUser2.encryptPassword());
console.log(newUser2.changeUsername());