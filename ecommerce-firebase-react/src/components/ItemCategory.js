import React, { useEffect, useState, useRef } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  styled,
  Snackbar,
  Typography,
} from "@mui/material";
import Alert from "./Alert";
import { userCollection } from "../Constants";
import style from "../styles/ItemCategory.module.css";

const AddToCartButton = styled(Button)({
  backgroundColor: "#0088a9",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#0088a9",
  },
});

function ItemCategory(props) {
  const {
    category,
    db,
    setUserAccountDetails,
    userAccountDetails,
  } = props;
  const [itemData, setItemData] = useState(
    JSON.parse(localStorage.getItem(category)) || []
  );
  const [showSnackbar, setShowSnackbar] = useState(false);
  const snackbarMessage = useRef("");
  const snackbarType = useRef("");

  useEffect(() => {
    if (!itemData?.length) {
      getDocs(collection(db, category))
        .then((itemData) => {
          let tempData = [];
          itemData.forEach((doc) => {
            tempData.push({
              itemId: doc.id,
              ...doc.data(),
            });
          });
          localStorage.setItem(category, JSON.stringify(tempData));
          setItemData(tempData);
        })
        .catch((error) => console.error(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItemToCart = (data) => {
    const userDoc = doc(db, userCollection, userAccountDetails.userId);
    const itemAlreadyExiitsInCart = userAccountDetails.cartItems.findIndex(
      (x) => x.itemId === data.itemId
    );
    if (itemAlreadyExiitsInCart === -1) {
      data.itemCount = 1;
      updateDoc(userDoc, {
        cartItems: [...userAccountDetails.cartItems, ...[data]],
      })
        .then((updatedData) => {
          setUserAccountDetails((prevAccountDetails) => {
            return {
              ...prevAccountDetails,
              cartItems: [...userAccountDetails.cartItems, ...[data]],
            };
          });
          snackbarType.current = "success";
          snackbarMessage.current = "Item added to cart successfully!";
          setShowSnackbar(true);
        })
        .catch((error) => {
          snackbarType.current = "severity";
          snackbarMessage.current = "An error occured adding item to cart.";
          setShowSnackbar(true);
        });
    } else {
      snackbarType.current = "warning";
      snackbarMessage.current = "Item already exists in cart.";
      setShowSnackbar(true);
    }
  };

  return (
    <Box className={style.categoryContainer}>
      {itemData.map((data, index) => (
        <Card className={style.itemCard} key={index}>
          <CardMedia component="img" image={data.itemImage} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.itemTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.itemDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <AddToCartButton onClick={() => addItemToCart(data)}>
              Add To Cart
            </AddToCartButton>
          </CardActions>
        </Card>
      ))}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key={`bottom + right`}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity={snackbarType.current}
          sx={{ width: "100%" }}
        >
          {snackbarMessage.current}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ItemCategory;
