import React, { useState, useRef } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  styled,
  Box,
  alpha,
  Tooltip,
  InputBase,
  Snackbar,
} from "@mui/material";
import { signOut, getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { Search, AccountCircle } from "@mui/icons-material";
import Alert from "./Alert";
import Cart from "./Cart";
import { logoUrl } from "../Constants";
import style from "../styles/Navbar.module.css";

const NavbarTop = styled(AppBar)({
  "&.MuiAppBar-root": {
    background: "#00088a9",
  },
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  position: "relative",
  flexGrow: 1,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar(props) {
  const { userAccountDetails, userEmail, setUserAccountDetails } = props;
  const history = useHistory();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const snackbarMessage = useRef("");
  const snackbarType = useRef("");

  let signout = () => {
    signOut(getAuth())
      .then(() => {
        snackbarType.current = "success";
        snackbarMessage.current = "Logged out successfully!";
        setTimeout(() => {
          history.push("/login");
        }, 2000);
        setShowSnackbar(true);
      })
      .catch((error) => {
        console.error(error);
        snackbarType.current = "severity";
        snackbarMessage.current = "An error occured logging out.";
        setShowSnackbar(true);
      });
  };
  return (
    <NavbarTop position="static">
      <Toolbar>
        <Tooltip title="Ecommerce">
          <Box className={style.logoContainer}>
            <img src={logoUrl} alt="" />
          </Box>
        </Tooltip>
        <Box className={style.spacing} />
        <SearchBar>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search" />
        </SearchBar>
        <Box className={style.spacing} />
        <Cart
          cartItems={userAccountDetails.cartItems}
          setUserAccountDetails={setUserAccountDetails}
        />
        <Tooltip title={`${userEmail}`}>
          <IconButton size="large" color="inherit" onClick={signout}>
            <AccountCircle />
          </IconButton>
        </Tooltip>
      </Toolbar>
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
    </NavbarTop>
  );
}

export default Navbar;
