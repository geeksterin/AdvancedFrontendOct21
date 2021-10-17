this.onmessage = (e) => {
  var output = 0;
  for (let i = 0; i < 10000000000; i++) {
    output = output + i;
  }
  this.postMessage(output)
};
