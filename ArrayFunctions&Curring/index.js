let array = [12, 22, 30, 412, 50];
let result;
let ownResult;

/**
 * 1. forEach() is used for iterating through the array
 * 2. It dose not return's anything
 */

array.forEach((value, index, arr) =>
  console.log(`Value: ${value}, Index: ${index}, Array: ${arr} `)
);
// Polyfill for forEach
Array.prototype.ownForEach = function (fnArgs) {
  for (let i = 0; i < this.length; i++) {
    fnArgs(this[i], i, this);
  }
};
console.log("-----------------------------------------------");
array.ownForEach((value, index, arr) =>
  console.log(`Value: ${value}, Index: ${index}, Array: ${arr} `)
);

/**
 * 1. map() is used for iterating through the array
 * 2. It also returns new array
 */
result = array.map((value, index, arr) => {
  if (index > 3) {
    return value;
  }
});
console.log(result);
// Polyfill for map
Array.prototype.ownMap = function (fnArgs) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fnArgs(this[i], i, this));
  }
  return newArray;
};
console.log("-----------------------------------------------");
ownResult = array.ownMap((value, index, arr) => {
  if (index > 3) {
    return value;
  }
});
console.log(ownResult);

/**
 * filter() retruns values if condition is satisfied
 * It returns new array with filtered results
 */
result = array.filter((value, index, arr) => {
  if (index > 3) {
    return value;
  }
});
console.log(result)
// // Polyfill for filter
Array.prototype.ownFilter = function (fnArgs) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    const filteredResults = fnArgs(this[i], i, this)
    if(filteredResults) {
        newArray.push(this[i])
        // Use any param as per your choice
        newArray.push(filteredResults)
    }
  }
  return newArray;
};
console.log("-----------------------------------------------");
ownResult = array.ownFilter((value, index, arr) => {
  if (index > 3) {
    return value;
  }
});
console.log(ownResult);

/**
 * reduce() iterates over the array and returns a single
 * computed value
 */

 result = array.reduce((accumalator, currentItem, currentIndex, array) => {
    return accumalator + currentItem
})

// Polyfill for reduce
Array.prototype.ownReduce = function (fnArgs, intialValue) {
  let accumlator = intialValue === undefined ? undefined : intialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumlator !== undefined) {
      accumlator = fnArgs(accumlator, this[i], i, this);
    } else {
      accumlator = this[i];
    }
  }
  return accumlator;
};
console.log("-----------------------------------------------");
ownResult = array.ownReduce((accumlator, currentItem, currentIndex, arr) => {
  return accumlator + currentItem;
}, 12);
console.log(ownResult);

console.log("-----------------------------------------------");

Array.prototype.dannyReduceFn = function (callback, initialValue) {
  let accumulator;
  let firstIndex;
  if (arguments.length === 1) {
    accumulator = this[0];
    firstIndex = 1;
  } else {
    accumulator = initialValue;
    firstIndex = 0;
  }
  for (let index = firstIndex; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index);
  }
  return accumulator;
};

ownResult = array.dannyReduceFn((total, num) => total + num);
console.log(ownResult)

/**
 * every() retruns boolean
 * If all cases are satisfied it returns true else false
 */

result = array.every((value) => value < 30 && value > 10)
console.log(result);

// Polyfill for every
Array.prototype.ownEvery = function(fnArgs) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (fnArgs(this[i], i, this)) {
            count += 1
        }
    }
    return count === this.length ? true : false
}
console.log("-----------------------------------------------");
ownResult = array.ownEvery((value) => value < 30 && value > 10)
console.log(ownResult);

/**
 * some() retruns boolean
 * If any one cases are satisfied it returns true else false
 */

result = array.some((value) => value < 30 && value > 10);
console.log(result);

// Polyfill for every
Array.prototype.ownSome = function (fnArgs) {
  for (let i = 0; i < this.length; i++) {
    if (fnArgs(this[i], i, this)) {
      return true;
    }
  }
};
console.log("-----------------------------------------------");
ownResult = array.ownSome((value) => value < 30 && value > 10);
console.log(ownResult);

/**
 * find() returns value if found / any condition is satisfied
 * in array else returns undefined
 */

result = array.find((value) => value > 22);
console.log(result);

// Polyfill for find
Array.prototype.ownFind = function (fnArgs) {
  for (let i = 0; i < this.length; i++) {
    if (fnArgs(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
console.log("-----------------------------------------------");
ownResult = array.ownFind((value) => value > 22);
console.log(ownResult);

/**
 * Curring is a technique of evaluating function
 * with multiple arguments, into single arguments
 * Example: Can be used for logging the data
 */

(function (a, b, c) {
  console.log(a + b + c);
})(12, 12, 10);

const add = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(add(12)(12)(10))

const fnA = add(12)
const fnB = fnA(12)
const fnC = fnB(10)
console.log(fnC)

const addArrow = (a) => (b) => (c) => a + b + c
console.log(addArrow(12)(12)(10))
