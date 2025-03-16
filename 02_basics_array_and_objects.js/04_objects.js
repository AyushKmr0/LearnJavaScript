// object constructor

// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "tinder123"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


regularUser = {
    email: "user@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ayush",
            LastName: "Kumar",
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));
// console.log(regularUser.hasOwnProperty('email'));
// console.log(regularUser.hasOwnProperty('userFullName'));


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);



const user = [
    {
        id: 1,
        email: "ayush@gmail.com",
    },
    {
        id: 1,
        email: "ayush@gmail.com",
    },
    {
        id: 1,
        email: "ayush@gmail.com",
    },
    {
        id: 1,
        email: "ayush@gmail.com",
    },
]
user[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    courseName: "React",
    courseDuration: "2 months",
    coursePrice: "2000"
}

// console.log(course.courseName);

const {courseName, courseDuration: duration, coursePrice} = course;     //destructuring object

console.log(courseName);
console.log(duration);
 
 

// [
//     {},
//     {},
//     {}
// ]