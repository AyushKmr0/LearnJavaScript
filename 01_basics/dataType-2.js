// # Primitive :    all primitive data types are called as value types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100           // Number
const scoreValue = 100.3    // Number

const isLogginIn = false    // Boolean
const outsideTemp = null    // null
let userEmail;              // undefined

const id = Symbol('123')    // Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 34235412646324n   // BigInt


// # Reference (Non-Primitive) :    all non-primitive data types are called as reference types

// Array, Objects, Functions


const heros = ["xyz", "abc", "ijk"]

let myObj = {
    name: "Ayush",
    age: "22",
}


const myFunction = function() {
    console.log("Hello World");
    
}




//Javascript is a dynamically typed language because we can change the type of the variable at runtime and it is not fixed.





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)=> call by value , Heap (Non-Primitive) => call by reference

// stores the value in Stack
let myName = "Ayush"
let anotherName = myName
anotherName = "yeash"

console.log(myName);
console.log(anotherName);



// stores the reference in Stack and value in Heap
let userOne = {
    email: "xyz@google.com",
    upi: "abc@ybl",
}

let userTwo = userOne

userTwo.email = "ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);
