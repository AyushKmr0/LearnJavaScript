//singleton
// objects can be declared in two ways
// 1. object literal        => not singleton
// 2. object constructor    => singleton



// object literal


const mySym = Symbol("Key1");   // symbol is a unique value

const person = {
    name: "Ayush",
    age: 18,
    [mySym]: "myKey1",  // dynamic key using symbol
    location: "Ranchi",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    courses: ["React", "Node", "MongoDB"]
}

console.log(person.name);
console.log(person["name"]);
console.log(person[mySym]);

// person.email = "ayush@google.com"
// Object.freeze(person)    // freeze the object => can't change the value of the object properties 
// person.email = "ayush@microsoft.com"
console.log(person);

person.greeting = function() {
    console.log("Hello...");
}

person.greeting2 = function() {
    console.log(`Hello ${this.name}`);
}

console.log(person.greeting);   // This will give the reference of the function
console.log(person.greeting());
console.log(person.greeting2());