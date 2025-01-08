// Object constructo



// The constructor is used to create many objects of the same type

// Create constructor function
function Person(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
}

// Create a new instance of person
const mother = new Person("Jane", "Doe", 41);

console.log(mother.first);