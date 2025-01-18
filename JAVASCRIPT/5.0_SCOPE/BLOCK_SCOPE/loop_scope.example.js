for (let i = 0; i < 3; i++) {
    console.log(i);  // Outputs: 0, 1, 2
}

console.log(i);  // ReferenceError: i is not defined

for (var i = 0; i < 3; i++) {
    console.log(i);  // Outputs: 0, 1, 2
}

console.log(i);  // 3
