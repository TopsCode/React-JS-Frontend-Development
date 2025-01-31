let str = "Hello";
console.log(str.length); // 5

// access string 
str = "JavaScript";
console.log(str[0]); // Output: 'J'

// uppercase
str = "hello";
console.log(str.toUpperCase());  // Output: "HELLO"

// lowercase 
str = "HELLO";
console.log(str.toLowerCase());  // Output: "hello"

// substring(start, end)
str = "Hello, world!";
console.log(str.substring(0, 5));  // Output: "Hello"

//replace(oldValue, newValue)
str = "Hello world!";
console.log(str.replace("world", "there"));  // Output: "Hello there!"

//split(separator)
str = "apple,banana,cherry";
let fruits = str.split(",");
console.log(fruits);  // Output: ["apple", "banana", "cherry"]

// trim()
str = "   Hello   ";
console.log(str.trim());  // Output: "Hello"
