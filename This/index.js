/**
 * Javascript `this` keyword referes to object it belongs to
 * Globally, `this` refers to global object
 * In a method, `this` refers to method owner object
 * In a function, `this` refers to global object
 */


// var z = 12;
// console.log(this.z);

// const person = {
//     name: "John Doe",
//     familyDetails: {
//         motherName: "Tina Doe",
//         fatherName: "David Doe"
//     },
//     printFamily: function() {
//         console.log(this.familyDetails.motherName, this.familyDetails.fatherName)
//     }
// }

// person.printFamily()

// const anotherPerson = {
//     name: "John Doe",
//     familyDetails: {
//         motherName: "Tina Doe",
//         fatherName: "David Doe"
//     },
//     city: ["Mumbai", "Banglore"],
//     printCities() {
//         this.city.forEach((c) => {
//             console.log(`${this.name}`, c)
//         })
//     }
// }

// anotherPerson.printCities();


