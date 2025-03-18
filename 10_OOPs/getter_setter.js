// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }


//     get email() {
//         return this._email.toUpperCase();
//     }
//     set email(value) {
//         this._email = value;
//     }


//     get password() {
//         // return this._password.toUpperCase();
//         return `${this._password}123`
//     }
//     set password(value) {
//         this._password = value;
//     }
// }

// const ayush = new User("ayush@example.com", "abc")
// console.log(ayush.email);
// console.log(ayush.password);











// properties base  get and set

// function User(email, password) {
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function() {
//             return this._email.toUpperCase()
//         },
//         set: function(value) {
//             this._email = value;
//         }
//     });

//     Object.defineProperty(this, 'password', {
//         get: function() {
//             return `${this._password.toUpperCase()}1234`
//         },
//         set: function(value) {
//             this._password = value;
//         }
//     });
// }

// const ayush = new User("yeash@example.com", "abcd");

// console.log(ayush.email);
// console.log(ayush.password);










// Object based get and set

const User = {
    _email: "abc@example.com",
    _password: "abc",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value;
    }
}

const yeash = Object.create(User);   // factory function
console.log(yeash.email);