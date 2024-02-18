import "./registerInitial.css";
import React from "react";

export default function RegisterInitial() {
  return (
    <>
      <div className="register">
        <div className="background-pane">
          <form>
            <input type="text" className="input" placeholder="username"></input>
            <br />
            <input type="email" className="input" placeholder="email"></input>
            <br />
            <input
              type="password"
              className="input"
              placeholder="pass*word"
            ></input>
            <br />
            <input
              type="password"
              className="input"
              placeholder="retype pass*word"
            ></input>
            <br />
            <button type="submit" data="REGISTER" className="button">
              {/* REGISTER */}
            </button>
            <br />
            <p className="p">
              Or{" "}
              <a href="/login" className="a">
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
