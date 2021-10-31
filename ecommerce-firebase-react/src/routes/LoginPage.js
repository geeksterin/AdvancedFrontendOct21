import React, { useState, useRef } from "react";
import {
  Box,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  Typography,
  Snackbar,
  styled,
} from "@mui/material";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Login,
} from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import Alert from "../components/Alert";
import style from "../styles/Registration.module.css";

const OutlinedTextInput = styled(OutlinedInput)({
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#0088a9",
  },
});

const Label = styled(InputLabel)({
  "&.MuiInputLabel-root.Mui-focused": {
    color: "#0088a9",
  },
});

const LoginButton = styled(Button)({
  backgroundColor: "#0088a9",
  "&:hover": {
    backgroundColor: "#0088a9",
  },
});

function LoginPage(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const snackbarMessage = useRef("");

  const login = () => {
    if (!email || !password) {
      snackbarMessage.current = "Email / Password seems to be empty";
      setShowSnackbar(true);
      return;
    }
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCrdedentials) => history.push("/"))
      .catch((error) => {
        snackbarMessage.current = error.message;
        setShowSnackbar(true);
        console.log(error);
        return;
      });
  };

  return (
    <Box className={style.box}>
      <Typography variant="h4">Login</Typography>
      <FormControl className={style.formControl}>
        <Label htmlFor="outlined-adornment-email">Email</Label>
        <OutlinedTextInput
          id="outlined-adornment-email"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
          label="Email"
          required
        />
      </FormControl>
      <FormControl className={style.formControl}>
        <Label htmlFor="outlined-adornment-password">Password</Label>
        <OutlinedTextInput
          id="outlined-adornment-password"
          value={password}
          type={isPasswordVisible ? "text" : "password"}
          onChange={(event) => setPassword(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              {isPasswordVisible ? (
                <Visibility
                  className={style.passwordIcon}
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                />
              ) : (
                <VisibilityOff
                  className={style.passwordIcon}
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                />
              )}
            </InputAdornment>
          }
          label="password"
          required
        />
      </FormControl>
      <Box className={style.loginButton}>
        <LoginButton
          fullWidth
          variant="contained"
          startIcon={<Login />}
          onClick={login}
        >
          Login
        </LoginButton>
      </Box>
      <Box className={style.signupButton}>
        <Typography variant="subtitle1">
          Don't have an account?
          <span className={style.spacing}></span>
          <Link to="/signup">Signup Now</Link>
        </Typography>
      </Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key={`top + right`}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage.current}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default LoginPage;
