function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");  // Raise an error
    }
    return a / b;
}

try {
    console.log(divide(10, 0));  // This will throw an error
} catch (e) {
    console.log(e.message);  // Output: Division by zero is not allowed!
}
