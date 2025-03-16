if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}



// console.log(a);     // ReferenceError: a is not defined

// console.log(b);     // ReferenceError: b is not defined

//console.log(c);     
// // this is accessible because it is declared with 'var' keyword which is function scoped and not block scoped, so it is accessible outside the block 





function one() {
    const username = "Ayush";

    function two() {
        const website = "YouTube"
        // console.log(username);
    }

    // console.log(website);    
    // // ReferenceError: website is not defined

    two();
}

one();






console.log(addOne(10))

function addOne(num) {
    return num + 1;
}




// ReferenceError: Cannot access 'addTwo' before initialization
console.log(addTwo(10));    

const addTwo = function(num) {
    return num + 1;
}
