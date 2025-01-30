const person = { name: "pari" };
Object.freeze(person);

person.age = 30; // This won't work
person.name = "Shreya"; // This won't work either
