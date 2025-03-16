
const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    go: 'Golang',
    cpp: 'C++'
}

for(const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ['js', 'rb', 'py', 'java', 'cpp']

for(const key in programming) {
    console.log(programming[key])
}





// Map is not iterable by for in loop but it is iterable by for of loop

// const map = new Map();

// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('FR', 'France');
// map.set('IN', 'India');

// for(const [key, value] in map) {
//     console.log(key, ":-", value)   // no result
// }
