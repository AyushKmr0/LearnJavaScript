function multiple(num) {
    return num * 5;
}

multiple.power = 2;

console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);


function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
    
}

const id = new createUser('id', 35);
const roll = new createUser('roll', 58);

id.printMe();