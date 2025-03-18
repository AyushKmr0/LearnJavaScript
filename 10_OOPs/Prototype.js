
let Users = ['ayush', 'yeash'];

let userHobby = {
    ayush: 'Developer',
    yeash: 'Music', 

    getAyushHobby: function () {
        console.log(`Yeash hobby is ${this.ayush}`);
    }
}

Object.prototype.s_ius = function () {
    // console.log(`Ayush is present in all Objects`);
}

Array.prototype.heyAyush = function() {
    // console.log(`Ayush says hello`);
}

userHobby.s_ius();  
Users.s_ius();

Users.heyAyush();
// userHobby.heyAyush();   // Error: heyAyush is applied on Array not in Object




// prototypal inheritance

const User = {
    name: 'Ayush',
    email: 'ayush@example.com'
}

const Teacher = {
    markeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    markeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User




// Modern Property/Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);





let myName = 'Ayush     ';

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

myName.trueLength();


"yeash  ".trueLength();