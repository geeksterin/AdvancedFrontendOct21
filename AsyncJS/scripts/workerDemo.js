const computeButton = document.querySelector(".add-random-number");
computeButton.addEventListener("click", () => {
  let workerOutput = new Worker(
    "http://127.0.0.1:5501/AsyncJS/scripts/worker.js"
  );
  workerOutput.postMessage("Any value worker thread must have access.")
  workerOutput.onmessage = (e) => {
    document.querySelector("#random-number").innerHTML = e.data
  }
});

const randomButton = document.querySelector(".add-random-text");
randomButton.addEventListener("click", () => {
  document.querySelector("#random-text").innerHTML = "Random Text";
});