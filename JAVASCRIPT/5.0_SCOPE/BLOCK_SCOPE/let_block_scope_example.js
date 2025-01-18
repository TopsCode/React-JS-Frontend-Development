{
    let a = 10;  // a is scoped to this block
    console.log(a);  // 10
}

console.log(a);  // ReferenceError: a is not defined
