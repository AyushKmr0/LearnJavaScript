const name = "Ayush"
const repoCount = 10

// console.log(name + repoCount + " Value");

// Normal concatenation but not recommended to use this method as it is not readable and not efficient way to concatenate strings in javascript use template literals instead of this method it is more readable and efficient way to concatenate strings


// Template literals 
console.log(`Hello my name is ${name} and and my repo count is ${repoCount}`);    



const gameName = new String('Ayush-kr-com');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));




// substring method is used to extract the characters from the string from the given range of indexes 
const newString = gameName.substring(0, 4);
console.log(newString);

// sliceing is same as substring but it can take negative values also, it is used to get the part of the string 
const anotherString = gameName.slice(-8, 8)
console.log(anotherString);



const newStringOne = "      Ayush   ";
console.log(newStringOne);
console.log(newStringOne.trim());   // trim removes the white spaces from the string



const URL = "https://ayush.com/ayush%20kumar";
console.log(URL.replace('%20', '-'));


console.log(URL.includes('abc'));
console.log(URL.includes('ku'));


console.log(gameName.split('-'));