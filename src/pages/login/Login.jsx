import "./login.css";
import React from "react";

export default function Login() {
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
                <form>
                  <input
                    type="text"
                    className="lgn-input"
                    placeholder="email or username"
                  ></input>
                  <br />
                  <input
                    type="password"
                    className="lgn-input"
                    placeholder="pass*word"
                  ></input>
                  <br />
                  <button type="submit" className="lgn-button">
                    LOGIN
                  </button>
                  <br />
                </form>
                <p className="lgn-p">
                  Don't have an account?
                  <br />
                  <a href="/" className="lgn-a">
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
