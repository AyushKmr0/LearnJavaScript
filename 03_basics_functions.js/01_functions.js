

function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

let result  = addTwoNumbers(3, 4 );
// console.log(result);


function loginuserMessage(username) {

    // if(username === undefined) {
    //     console.log("Please enter a name")
    //     return
    // }

    if(!username) {
        console.log("Please enter a name")
        return
    }

    return `${username} just logged in`
}

// console.log(loginuserMessage("Ayush"))
// console.log(loginuserMessage(""))
// console.log(loginuserMessage())



function calculateCartPrice(...num1) {      // rest operator => ...num1
    return num1;
}

// console.log(calculateCartPrice(200, 499, 550, 300));




const user = {
    username: "Ayush",
    prices: 199
}

function handleObject(anyobject) {

    console.log(`Username is ${anyobject.username}, and the price is ${anyobject.prices}`);

}

// handleObject(user)

handleObject({
    username: "Yeash",
    prices: 399
})





const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));