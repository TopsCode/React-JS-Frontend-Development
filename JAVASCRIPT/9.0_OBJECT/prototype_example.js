const person = { name: "John" };
const animal = { species: "Human" };

Object.setPrototypeOf(person, animal);

console.log(person.species); // "Human" (inherited from the prototype)
