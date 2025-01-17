const person = {
    name: 'Anjali',
    age: 25,
    city: 'Ahmedabad'
};

for (let key in person) {
    console.log(key + ": " + person[key]); // Logs name: Anjali, age: 25, city: Ahmedabad
}
