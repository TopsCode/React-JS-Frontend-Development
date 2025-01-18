function exampleFunction() {
    if (true) {
        let y = 20; // y is scoped to the if block
        console.log(y); // Works, y is accessible inside the block
    }
    console.log(y); // Error, y is not accessible outside the block
}

exampleFunction();
