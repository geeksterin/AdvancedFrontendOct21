// Promise

function executePromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let add = 1 + 12;
      resolve(add);
    }, 3000);
  });

  myPromise
    .then((data) => {
      console.log("Compute 1: ", data);
      return data * 5;
      // throw Error("Custom Error")
    })
    .then((data1) => {
      console.log("Compute 2: ", data1);
      throw Error("From compute 2");
    })
    .catch((error) => console.error("Not called", error))
    .then((data2) => {
      console.log("Compute 3: ", data2);
      throw Error("Error from error block");
    });
}

// executePromise();

/**
 * Promise.all()
 * Waits until all api calls in array are resolved
 * Fails when any one of the api is rejected
 * To overcome this add catch block with every call
 * Even when a single call will fail the promise will still get executed
 * and return undifined for failed calls and return response for
 * remaiming ones
 */

// const fetchUser = fetch(`https://reqres.in/api/users`)
// .then((response) => response.json())
// .then((data) => data)
// .catch((error) => console.error(error))

// const fetchWeather = fetch(`https://random-data-api.com/api/stripe/random_stripe`)
// .then((response) => response.json())
// .then((data) => data)
// .catch((error) => console.error(error))

// Promise.all([fetchUser, fetchWeather])
// .then((data) => console.log(data))
// .catch((error) => console.error(error))

/**
 * Promise.any()
 * Dosen't wait untill all api calls in array are resolved
 * It will only return response of thr first call resolved in array
 */

// const fetchUser = fetch(`https://reqres.in/api/users`)
//   .then((response) => response.json())
//   .then((data) => new Promise(resolve => setTimeout(resolve, 3000, data))
//   )
//   .catch((error) => console.error(error));

// const fetchWeather = fetch(
//   `https://random-data-api.com/api/stripe/random_stripe`
// )
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((error) => console.error(error));

// Promise.any([fetchUser, fetchWeather])
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

/**
 * Promice.race()
 * It will alwayes return response for the first succeed api call
 * It will not wait for other api calls in progress and is
 * independent on th order
 */

// const fetchUser = fetch(`https://reqres.in/api/users`)
//   .then((response) => response.json())
//   .then((data) => new Promise((resolve) => setTimeout(resolve, 5000, data)))
//   .catch((error) => console.error(error));

// const fetchWeather = fetch(
//   `https://random-data-api.com/api/stripe/random_stripe`
// )
//   .then((response) => response.json())
//   .then((data) => new Promise((resolve) => setTimeout(resolve, 4000, data)))
//   .catch((error) => console.error(error));

// Promise.race([fetchUser, fetchWeather])
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
