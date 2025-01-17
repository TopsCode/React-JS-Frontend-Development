// Outer loop with a label
outerLoop:
for (let i = 0; i < 5; i++) {
    console.log("Outer Loop iteration: " + i);
    
    // Inner loop
    for (let j = 0; j < 3; j++) {
        console.log("  Inner Loop iteration: " + j);
        
        // Skip the inner loop when i is 2 and j is 1
        if (i === 2 && j === 1) {
            console.log("    Skipping to next iteration of the outer loop!");
            continue outerLoop;  // Skips the current iteration of the outer loop
        }
    }
}

console.log("Program finished!");
