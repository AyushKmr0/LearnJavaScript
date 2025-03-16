// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed right after it is created.

// It has no name and is not stored in a variable.

// It is used to keep the variables and functions out of the global scope.

// It is also known as Self-Executing Anonymous Function

// Syntax: 

// (function() {
//     // logic here
// })();



(function() {
    console.log('Hello World');
})();




( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})('Ayush');