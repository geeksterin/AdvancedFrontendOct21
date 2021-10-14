/**
 * Protype can be used to create or inherit exixting properties or objects in JS
 * Example:
 *  - Date will be inherited from Date.prototype
 *  - Array will be inherited from Array.prototype
 * The Object.prototype is the prototype which is present at the top
 * __proto__ is only available when you create a object
 * prototype is available only with functions (having constructor & properties) and when we use them using new keyword
 */

const person = {
  name: "John",
  age: 24,
  gender: "M",
};
console.log(person.__proto__); // constructor
console.log(person.prototype); // undefined
console.log(person.__proto__ === Object.prototype);

const teacher = {
  subject: "Javascript",
};

teacher.__proto__ = person;
console.log(teacher.__proto__ === Object.prototype);
// Object.setPrototypeOf(teacher, person);
console.log(teacher.__proto__ === person);
console.log(teacher.subject); // Logs name



function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
}

Person.prototype.nationality = "Indian";

Person.prototype.name = function() {
    return `${this.firstName} ${this.lastName}`
}

const newPerson = new Person("John", "Doe", 24);
console.log(newPerson.name())





