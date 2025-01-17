const words = ["apple", "banana", "cherry", "strawberry"];
let longestWord = "";
for (const word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord);  // Output: strawberry
