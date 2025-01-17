// Labeled block
blockLabel:
{
    console.log("Before break");

    // Condition to break the block
    let shouldBreak = true;
    
    if (shouldBreak) {
        console.log("Breaking out of the block!");
        break blockLabel;  // This will exit the labeled block
    }

    // This will not be executed because of the break
    console.log("This will never be printed.");
}

console.log("Program finished!");
