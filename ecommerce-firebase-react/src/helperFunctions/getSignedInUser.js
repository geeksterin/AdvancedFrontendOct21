import { onAuthStateChanged } from "firebase/auth";

const getSignedInUser = (auth) => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject("User not logged in");
      }
    });
  });
};

export default getSignedInUser;
