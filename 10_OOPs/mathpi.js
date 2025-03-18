const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descripter)
// console.log(Math.PI);

const User = {
    name: 'Ayush',
    id: 9,
    isLoggedIn : true,

    loggedInCount: function() {
        console.log("show count");
    }
}

console.log(Object.getOwnPropertyDescriptor(User, 'name'));

Object.defineProperty(User, 'name', {
    // writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(User, 'name'));


for (const [key, value] of Object.entries(User)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}