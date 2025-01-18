let globalVar = "I am global"; // Global scope

function outerFunction() {
    let outerVar = "I am outer"; // outerFunction's local scope

    function innerFunction() {
        let innerVar = "I am inner"; // innerFunction's local scope

        console.log(globalVar); // Access globalVar (from global scope)
        console.log(outerVar);  // Access outerVar (from outerFunction's scope)
        console.log(innerVar);  // Access innerVar (from innerFunction's scope)
    }

    innerFunction(); // Call innerFunction inside outerFunction
}

outerFunction(); // Call outerFunction
