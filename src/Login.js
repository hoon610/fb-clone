import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import logo from "./assets/logo.png";
import logo1 from "./assets/logo1.png";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  const signInGuest = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: {
        displayName: "Guest",
      },
    });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo1} alt="logo" className="logo" />
        <img src={logo} alt="" className="logotext" />

        <h2>
          by Hoon Kang{" "}
          <a
            href="https://github.com/hoon610"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h2>
      </div>
      <div className="buttons">
        <Button type="submit" onClick={signIn}>
          Sign in
        </Button>
        <Button type="submit" onClick={signInGuest}>
          Sign in as guest
        </Button>
      </div>
    </div>
  );
}

export default Login;
