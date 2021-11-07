import React, { useState } from "react";
import {
  Badge,
  IconButton,
  Tooltip,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import {
  ShoppingCart,
  AddCircle,
  RemoveCircle,
  HighlightOff,
} from "@mui/icons-material";
import style from "../styles/Cart.module.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Cart(props) {
  const { cartItems, setUserAccountDetails } = props;
  const [showModal, setShowModal] = useState(false);

  const toogleModal = (state) => {
    setShowModal(state);
  };

  return (
    <>
      <Tooltip title="Cart">
        <IconButton
          size="large"
          color="inherit"
          onClick={() => toogleModal(true)}
        >
          <Badge badgeContent={cartItems.length} color="warning">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Tooltip>
      <Modal open={showModal} onClose={() => toogleModal(false)}>
        <Box sx={modalStyle}>
          {cartItems.map((item, index) => (
            <Box className={style.cartItem} key={index}>
              <Box className={style.imageContainer}>
                <img src={item.itemImage} alt="" />
              </Box>
              <Typography>{item.itemTitle}</Typography>
              <Tooltip title="Add">
                <AddCircle className={style.addRemoveIcon} />
              </Tooltip>
              <span className={style.spacing}>{item.itemCount}</span>
              <Tooltip title="Substract">
                <RemoveCircle className={style.addRemoveIcon} />
              </Tooltip>
              <span className={style.spacing} />
              <Tooltip title="Remove">
                <HighlightOff className={style.addRemoveIcon} />
              </Tooltip>
            </Box>
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default Cart;
