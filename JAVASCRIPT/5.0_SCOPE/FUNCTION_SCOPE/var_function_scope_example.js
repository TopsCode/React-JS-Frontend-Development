function exampleFunction() {
    if (true) {
        var x = 10; // x is declared inside a block, but still scoped to the entire function
    }
    console.log(x); // Works, because x is function-scoped
}

exampleFunction();
