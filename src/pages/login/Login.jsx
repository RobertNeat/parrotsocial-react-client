import "./login.css";
import React, { useEffect } from "react";

import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material";

import { theme } from "./muiTheme";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const history = useNavigate();
  const custom_theme = theme;

  const { token, userId, isFetching, error, dispatch } =
    useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    history("/register");
  };

  useEffect(() => {
    if (error) {
      alert("Login unsuccessfull!");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  }, [error]);

  //console.log("token:", token, "\n userId:", userId);

  return (
    <>
      <div className="login">
        <div className="lgn-background-pane">
          <div className="lgn-flex-row">
            <div className="lgn-image-wrapper">
              <span className="lgn-parrot">Parrot</span>
              <span className="lgn-social">Social</span>
              <img
                src="/graphic_data/parrot.svg"
                className="lgn-parrot-image"
                alt=""
              ></img>
            </div>
            <div className="lgn-padding">
              <div className="lgn-form-wrapper">
                <span className="lgn-platform-logo">
                  Parrot <span className="lgn-social">Social</span>
                </span>
                <form onSubmit={handleClick}>
                  <input
                    type="text"
                    className="lgn-input"
                    placeholder="email"
                    required
                    ref={email}
                  ></input>
                  <br />
                  <input
                    type="password"
                    className="lgn-input"
                    placeholder="pass*word"
                    required
                    ref={password}
                  ></input>
                  <br />
                  <button
                    type="submit"
                    className="lgn-button"
                    disabled={isFetching}
                  >
                    {isFetching ? (
                      <CircularProgress
                        theme={custom_theme}
                        color="primary"
                        size="30px"
                      />
                    ) : (
                      //"loading"
                      "LOGIN"
                    )}
                  </button>
                  <br />
                </form>
                <p className="lgn-p">
                  Don't have an account?
                  <br />
                  <a href="/register" className="lgn-a">
                    Register{" "}
                  </a>
                  yourself now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
