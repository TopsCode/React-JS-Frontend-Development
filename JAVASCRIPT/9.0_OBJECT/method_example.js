const person = {
    name: "shreya",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet();  // Output: Hello, shreya
