import React from "react";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function Cart(props) {
  const { cartItems, setUserAccountDetails } = props;
  return (
    <>
      <Tooltip title="Cart">
        <IconButton size="large" color="inherit">
          <Badge badgeContent={cartItems.length} color="warning">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
}

export default Cart;
