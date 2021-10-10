// Using a function keyword
// function Greetings() {
//     console.log("Welcome To Geekster!!");
// }
// Greetings()

// Arrow function
// const Greetings = () => {
//     console.log("Welcome To Geekster!!");
// }
// Greetings()

// Self invoking function
// (function() {
//     console.log("Welcome To Geekster!!");
// })()

// Using new keyword

// const fn = new Function(
//   "num1",
//   "num2",
//   "console.log('Welcome To Geekster!!'); const sum = num1 + num2; return sum"
// );
// console.log(fn(1, 4));

// Recurssion & Stack

// 1. Calculate pow(x, n)
// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     }
//     if (n === 0) {
//         return 1;
//     }
//     return x * pow(x, n - 1)
// }
// console.log(pow(2, 4));

// 2. Tranverse a linked list 1 -> 2 -> 3 -> 4 -> null
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list) {
//   if (!list) {
//     return;
//   }
//   console.log(list.value);
//   printList(list.next);
// }
// printList(list);

// 3. Sum of given number sum(2) => 3
// 4. Factorial
// 5. Fibonacii

// Rest parameters & spread syntax
// Rest syntax looks exactly like spread syntax.
// In a way, rest syntax is the opposite of spread syntax.
// Spread syntax "expands" an array into its elements,
// while rest syntax collects multiple elements and "condenses" them into a single element

// Calculate the sums of only two numbers
// Other params passed will be ignored
// This is issue can be resolved with ... operator
// function sum(num1, num2) {
//     return num1 + num2
// }
// console.log(sum(10, 12, 10, 5));

// function sum(...args) {
//   let result = 0;
//   for (let item of args) {
//     result += item;
//   }
//   return result;
// }
// console.log(sum(10, 12, 10, 5));

// Example: console.log(Math.max(10, 12, 10, 5))

// Calculate max number from two arrays
// const arr1 = [1, 12, -3, 50];
// const arr2 = [12, 34, 100, 45];
// console.log(...arr1, ...arr2)
// console.log(Math.max(...arr1, ...arr2))

/**
 * It's scope is created
 * `this` refers to own scope & execution content
 * Fallback to global `this`
 */
//  function fn () {
//     const variable = "Test"
//     console.log(variable)
// }

/**
 * They are as variables in memory
 * They don't own have their own `this`
 * Variables inside arrow function are available globally
 */
// const arrowFn = () => {
//     const variableArrow = "TestArrow"
//     console.log(variableArrow)
// }
// fn()
// arrowFn()