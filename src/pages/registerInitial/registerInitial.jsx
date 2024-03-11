import "./registerInitial.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const API_URL = "http://localhost:8080/api";

export default function RegisterInitial() {
  const history = useNavigate();
  const email = useRef();
  const password = useRef();
  const rpt_password = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (rpt_password.current.value !== password.current.value) {
      rpt_password.current.setCustomValidity("Passwords don't match!");
      rpt_password.current.reportValidity();
    } else {
      rpt_password.current.setCustomValidity("");
      const user = {
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post(`${API_URL}/auth/register`, user);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        history(`/register_continue/${res.data.userId}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="reg-background-pane">
          <form className="reg-form">
            <input
              type="email"
              className="reg-input"
              placeholder="email"
              ref={email}
            ></input>
            <br />
            <input
              type="password"
              className="reg-input"
              placeholder="pass*word"
              ref={password}
            ></input>
            <br />
            <input
              type="password"
              className="reg-input"
              placeholder="retype pass*word"
              ref={rpt_password}
            ></input>
            <br />
            <button
              type="submit"
              data="REGISTER"
              className="reg-button"
              onClick={handleRegister}
            >
              {/* REGISTER */}
            </button>
            <br />
            <p className="reg-p">
              Or{" "}
              <a href="/login" className="reg-a">
                LOGIN
              </a>{" "}
              if you have account
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
