function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        let innerVar = "I am inner";
        console.log(outerVar); // innerFunction can access outerVar
    }

    console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
