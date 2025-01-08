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


// Display objects
for (let i in person) {
    console.log(person[i]);
}



// Nested objects
const myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }

// Access nested objects
console.log(myObj.myCars.car2);



// Create empty objects
const player = {};
player.firstName = "Kevin Durant";
player.team = "Phoenix suns";

console.log(player.firstName);


// Use new keyword
const team = new Object();
team.city = "San francisco";
team.name = "Golden State Warriors";

// Access object prooerty
console.log(team.name);  // This
console.log(team["name"]);  // Or this


// Add property
team.mvp = "Steph Curry";
console.log(team.mvp);


// Delete property
delete team.city;
delete team["name"];

console.log(team.city);
console.log(team.name);