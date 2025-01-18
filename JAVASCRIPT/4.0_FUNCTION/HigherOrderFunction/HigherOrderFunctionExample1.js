function higherOrderFunction(fn) {
    return fn();
}
  
function sayHello() {
return "Hello, World!";
}
  
console.log(higherOrderFunction(sayHello)); // "Hello, World!"
  