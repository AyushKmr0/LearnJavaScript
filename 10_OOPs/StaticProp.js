class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const ayush = new User ('ayush');

// console.log(ayush.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const teach = new Teacher("yeash", "yeash@example.com");
teach.logMe();
// console.log(teach.createId());