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
  AccountCircle,
} from "@mui/icons-material";
import { initializeFirestore } from "../helperFunctions/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link, useHistory } from "react-router-dom";
import Alert from "../components/Alert";
import { userCollection, userJson } from "../Constants";
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

function SignupPage(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [db] = useState(() => initializeFirestore());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const snackbarMessage = useRef("");

  const signup = () => {
    if (!email || !password || !confirmPassword) {
      snackbarMessage.current = "Email / Password seems to be empty";
      setShowSnackbar(true);
      return;
    }
    if (password !== confirmPassword) {
      snackbarMessage.current = "Password & confirmed password does not match";
      setShowSnackbar(true);
      return;
    }
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredentials) => {
        let data = JSON.parse(JSON.stringify(userJson));
        data.userEmail = userCredentials?.user?.email || email;
        data.userId = userCredentials?.user?.uid;
        return setDoc(
          doc(db, userCollection, userCredentials?.user?.uid),
          data
        );
      })
      .then((documentRef) => {
        history.push("/");
      })
      .catch((error) => {
        setShowSnackbar(true);
        console.log(error);
        return;
      });
  };

  return (
    <Box className={style.box}>
      <Typography variant="h4">Signup</Typography>
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
      <FormControl className={style.formControl}>
        <Label htmlFor="outlined-adornment-confirm-password">
          Confirm Password
        </Label>
        <OutlinedTextInput
          id="outlined-adornment-confirm-password"
          value={confirmPassword}
          type={"password"}
          onChange={(event) => setConfirmPassword(event.target.value)}
          label="confirm password"
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          required
        />
      </FormControl>
      <Box className={style.loginButton}>
        <LoginButton
          fullWidth
          variant="contained"
          startIcon={<AccountCircle />}
          onClick={signup}
        >
          Signup
        </LoginButton>
      </Box>
      <Box className={style.signupButton}>
        <Typography variant="subtitle1">
          Already have an account?
          <span className={style.spacing}></span>
          <Link to="/login">Login Now</Link>
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

export default SignupPage;
