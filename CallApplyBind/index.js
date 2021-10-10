const obj = {
  name: "John Doe",
  age: 24,
  gender: "M",
    // fn: function () {
    //   return this.name;
    // },
};

function printDetails(state, city, position) {
  console.log(
    `Name: ${this.name}. Age is ${this.age}. Gender is ${this.gender}. State is ${state}. City is ${city}`
  );
  console.log(`Works as ${position}.`);
}

/**
 * The call() method calls a function with a given `this` value
 * an arguments provided indivually
 * This is also called as function borrowing
 */

printDetails.call(obj, "Maharastra", "Mumbai");

Function.prototype.myCall = function(context, ...args) {
    const newFuncObj = Object.create(context || null);
    newFuncObj.fn = this;
    newFuncObj.fn(...args)
}

printDetails.myCall(obj, "Maharastra", "Mumbai")

/**
 * The apply() method is similar to call()
 * but it's accepts array as params instead of
 * accepting arguments individually
 */

printDetails.apply(obj, ["Maharastra", "Mumbai"]);

Function.prototype.myApply = function(context, args) {
    const newFuncObj = Object.create(context || null);
    newFuncObj.fn = this;
    newFuncObj.fn(...args)
}

printDetails.myApply(obj, ["Maharastra", "Mumbai"])

/**
 * bind() is also similar to call()
 * but this time it will return a copy of function
 * Also, used to resolve issues w.r.t losing this this keyword
 */

const copyPrintDetails = printDetails.bind(obj, "Maharastra", "Mumbai");
copyPrintDetails("SDE");

// console.log(obj.fn()); // Logs name
// const newFn = obj.fn;
// console.log(newFn()); // Undefined
// const newFnBind = newFn.bind(obj);
// console.log(newFnBind()); // Logs name

Function.prototype.ownBind = function (context, ...args) {
  const obj = this;
  return function (...otherArgs) {
    obj.apply(context, [...args, ...otherArgs]);
  };
};

const ownBindFn = printDetails.ownBind(obj, "Maharastra", "Mumbai");
ownBindFn("SDE");
