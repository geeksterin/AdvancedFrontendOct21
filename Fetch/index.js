// GET
async function getAllEmployess() {
  const getAllEmployessUrl = `https://reqres.in/api/users`;
  fetch(getAllEmployessUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  // try {
  //   const response = await fetch(getAllEmployessUrl)
  //   const data = await response.json()
  //   console.log(data)
  // }
  // catch(error) {
  //   console.error(error)
  // }
}

// getAllEmployess()

// POST
function postAnEmployee() {
  const postEmployessUrl = `https://reqres.in/api/users`;
  const sampleBody = {
    name: "morpheus",
    job: "leader",
    id: "666",
    createdAt: "2021-10-23T05:04:55.463Z",
  };
  fetch(postEmployessUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sampleBody),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// postAnEmployee();

// PUT
function updateAnEmployee() {
  const updateEmployessUrl = `https://reqres.in/api/users`;
  const sampleBody = {
    name: "morpheus",
    job: "zion resident",
    id: "666",
  };
  fetch(updateEmployessUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sampleBody),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// updateAnEmployee();

// DELETE => Change method to DELETE

// Download file
function downloadFile() {
  fetch(`https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg`)
  .then((response) => response.blob())
  .then((data) => {
    const url = window.URL.createObjectURL(data);
    const atag = document.createElement("a");
    atag.href = url;
    atag.download = "File.jpg";
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  });
}

downloadFile()
