import "./registerInitial.css";
import React from "react";

export default function RegisterInitial() {
  return (
    <>
      <div className="register">
        <div className="reg-background-pane">
          <form className="reg-form">
            <input
              type="text"
              className="reg-input"
              placeholder="username"
            ></input>
            <br />
            <input
              type="email"
              className="reg-input"
              placeholder="email"
            ></input>
            <br />
            <input
              type="password"
              className="reg-input"
              placeholder="pass*word"
            ></input>
            <br />
            <input
              type="password"
              className="reg-input"
              placeholder="retype pass*word"
            ></input>
            <br />
            <button type="submit" data="REGISTER" className="reg-button">
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
