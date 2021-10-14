// Objects

// Conflicting
// const number = 5;
// const text = "Welcome to Geekster!!";
// function sum(num1, num2) {
//   total = num1 + num2;
//   return total;
// }
// sumNumber = sum(4, 5);
// console.log(sumNumber);

// The above conflict can be solved using NAMESPACES
// const MYNAMESPACE = {};
// MYNAMESPACE.number = 5;
// MYNAMESPACE.text = "Welcome to Geekster!!";
// MYNAMESPACE.sum = function sum(num1, num2) {
//   const total = num1 + num2;
//   return total;
// };
// MYNAMESPACE.number = MYNAMESPACE.sum(4, 5);
// console.log(MYNAMESPACE.number);

// Method Chaning

// Example
// const text = "Welcome-to-Geekster!!";
// console.log(text.split("-").reverse().join(""))

// Create own own chain of methods

// class Person {
//   constructor() {
//     (this.fname = "John"),
//       (this.lname = "Doe"),
//       (this.age = 24),
//       (this.city = "Mumbai");
//   }
//   setFirstName(fname) {
//     this.fname = fname;
//     return this;
//   }
//   setLastName(lname) {
//     this.lname = lname;
//     return this;
//   }
//   setAge(age) {
//     this.age = age;
//     return this;
//   }
//   setCity(city) {
//     this.city = city;
//     return this;
//   }
//   printResult() {
//     console.log(`${this.fname} ${this.lname} ${this.age} ${this.city}`);
//   }
// }

// const newPerson = new Person();
// newPerson
//   .setFirstName("Jane")
//   .setLastName("Dave")
//   .setAge(23)
//   .setCity("Banglore")
//   .printResult();

// Implement own JSON stringify method
// https://javascript.plainenglish.io/create-your-own-implementation-of-json-stringify-simiplied-version-8ab6746cdd1

// const obj = {
//   fname: "John",
//   lname: "Doe",
//   age: 24,
//   boolean: true,
//   occupation: {
//     designation: "Software Enginner",
//   },
//   cities: ["New York", "Mumbai", "Banglore"],
// };

// function JsonStringify(obj) {
//   let result = "{";
//   let lastElement = Object.keys(obj).pop();
//   for (const item in obj) {
//     result += `"${item}":`;
//     if (typeof obj[item] === "object" && !Array.isArray(obj[item])) {
//       result += JsonStringify(obj[item]);
//     }
//     if (typeof obj[item] === "string") {
//       result += `"${obj[item]}"`;
//     }
//     if (typeof obj[item] === "number" || typeof obj[item] === "boolean") {
//       result += `${obj[item]}`;
//     }
//     if (Array.isArray(obj[item])) {
//         let arrReusult = "";
//         obj[item].forEach((x) => {
//             arrReusult += `"${x}",`
//         })
//         result += `[${arrReusult.slice(0, -1)}]`
//     }
//     if (lastElement !== item) {
//       result += ",";
//     }

//   }
//   result += "}";
//   return result;
// }

// console.log(JSON.stringify(obj));
// console.log(JsonStringify(obj));
// console.log(JSON.stringify(obj) === JsonStringify(obj));
