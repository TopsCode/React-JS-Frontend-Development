function myFunction() {
    let functionScoped = "I am local to the function";
    console.log(functionScoped); // Accessible inside the function
  }
  
myFunction();
// console.log(functionScoped); // Error: functionScoped is not defined
  