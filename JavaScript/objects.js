// Objects


// Objects are variables that contains many values
// Use const

// Object car
const car = {type: "Aston Martin", model: "Valkiry", price: 2000000};
console.log(car.model);

// Object person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    height: 1.92,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    } 
};
console.log(person.fullName);


// Create empty objects
const player = {};
player.firstName = "Kevin Durant";
player.team = "Phoenix suns";

console.log(player.firstName);


// Use new keyword
const team = new Object();
team.city = "San francisco";
team.name = "Golden State Warriors";

console.log(team.name);