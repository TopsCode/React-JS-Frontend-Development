{
    const b = 20;  // b is scoped to this block
    console.log(b);  // 20
}

console.log(b);  // ReferenceError: b is not defined
