function createCounter() {
    let count = 0;  // `count` is in the scope of createCounter

    return function() {  // The returned function forms a closure
        count++;  // It can access and modify `count`
        console.log(count);
    };
}

const counter = createCounter();  // `createCounter` is executed, and the inner function is returned

counter();  // Output: 1
counter();  // Output: 2
counter();  // Output: 3
