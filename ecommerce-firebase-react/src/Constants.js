const firebaseConfig = {
  apiKey: "AIzaSyD7OuP7UphXSb4qiw0VjcbkgWFKekpFbIY",
  authDomain: "ecommerce-bb196.firebaseapp.com",
  projectId: "ecommerce-bb196",
  storageBucket: "ecommerce-bb196.appspot.com",
  messagingSenderId: "579579464842",
  appId: "1:579579464842:web:b21e5d07c0f6a3721ef173",
};

const userJson = {
  cartTotal: 0,
  userEmail: "",
  userId: "",
  cartItems: [],
};

const cartItemJson = {
  itemcategory: "",
  itemDescription: "",
  itemId: "",
  itemPrice: 0,
  itemRating: 0,
  itemImage: "",
  itemTitle: "",
  itemCount: 1,
};

const userCollection = "users";

const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN6By6MTnRck1md5Ib6lGCRlhqhu5X8eWMA&usqp=CAU";

export { firebaseConfig, userJson, cartItemJson, userCollection, logoUrl };
