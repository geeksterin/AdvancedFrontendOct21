const firebaseConfig = {
  // YOUR FIREBASE CONFIG
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

const itemCategories = ["electronics", "jewelery"];

const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN6By6MTnRck1md5Ib6lGCRlhqhu5X8eWMA&usqp=CAU";

export { firebaseConfig, userJson, cartItemJson, userCollection, logoUrl, itemCategories };
