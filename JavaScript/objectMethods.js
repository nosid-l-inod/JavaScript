// Object methods


// Object person
const person = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Display objects in a loop
for (let i in person) {
    console.log(person[i]);
};