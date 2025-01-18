function outerFunction() {
    let outerVar = 'I am from the outer function'; // This is a variable in the outer function's scope

    function innerFunction() {
        console.log(outerVar);  // innerFunction can access outerVar due to closure
    }
    
    return innerFunction;  // Return the inner function
}

const closureExample = outerFunction();  // outerFunction is executed, and innerFunction is returned
closureExample();  // Output: "I am from the outer function"
