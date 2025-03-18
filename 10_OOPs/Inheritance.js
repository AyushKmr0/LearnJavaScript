class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }

}

class friend extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const myFriend = new friend("Ayush", "ayush@example.com", "123");

myFriend.addCourse();

const myUser = new User("Yeash");

myUser.logMe();

console.log(friend instanceof User);