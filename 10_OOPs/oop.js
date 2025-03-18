// object literal

const user = {
    username: 'Ayush',
    loginCount: 7,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from DB");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user);
// console.log(user.getUserDetails());









// Constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcom ${this.username}`);
        
    }

    return this;
}

// Overwrite the the old data with new
// const userOne = User("Ayush", 5, true);
// const userTwo = User("javascript", 8, false);

// use 'new' keyword to create a new instance 
const userOne = new User("Ayush", 5, true);
const userTwo = new User("javascript", 8, false);


console.log(userOne);
console.log(userTwo);
