const user = {
    username: "Ayush",
    price: 100,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to the website!`);
        // console.log(this);
    }
}
// 'this' is used to access the object properties
// 'this' means the current object



user.welcomeMessage();
user.username = "Yeash";
user.welcomeMessage();

// this will refer to the global object which is window object in the browser and global object in the node environment
// console.log(this);



function one() {
    let username = "Yeash";
    console.log(this.username);
    // undefined because 'this' is not defined in the function scope 
}

one();


const two = () => {
    let username = "Ayush";
    console.log(this);  // 'this' will refer to the global object
}

two();





// explicit return..

const addSumTwo = (num1, num2) => {
    return num1 + num2
}

// means we are returning the value explicitly using return keyword 

console.log(addSumTwo(2, 4));



// inplicit return..

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "Ayush"})


console.log(addTwo(2, 4));