import "./registerDetail.css";
import React from "react";

export default function RegisterDetail() {
  return (
    <>
      <div className="reg-detail">
        <div className="background-pane">
          <div className="header">
            <h1 className="h1">Personal information</h1>
            <p className="p">
              This form is optional and you can fill out personal information in
              your{" "}
              <a href="#" className="a">
                PROFILE
              </a>{" "}
              whenever you want.
            </p>
          </div>
          <form>
            <div className="section-one">
              <div className="subsection-one">
                <input type="text" className="input" placeholder="name"></input>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="surname"
                ></input>
                <br />
                <textarea
                  className="textarea"
                  placeholder="profile description"
                ></textarea>
                <br />
                <select name="relationship" className="relationship">
                  <option value="" disabled selected>
                    relationship
                  </option>
                  <option value="opition_1">option_1</option>
                  <option value="opition_2">option_2</option>
                  <option value="opition_3">option_3</option>
                </select>
              </div>
              <div className="subsection-two">
                <button className="gray-btn">
                  <span className="material-symbols-outlined white">image</span>
                  <p className="p-btn">profile image</p>
                </button>
                <button className="gray-btn">
                  <span className="material-symbols-outlined white">image</span>
                  <p className="p-btn">cover image</p>
                </button>
              </div>
            </div>
            <div className="section-two">
              <div className="column-one">
                <div className="row">
                  <span class="material-symbols-outlined icon">
                    location_on
                  </span>
                  <select name="inhabitancy" className="select">
                    <option value="" disabled selected>
                      inhabitancy
                    </option>
                    <option value="opition_1">option_1</option>
                    <option value="opition_2">option_2</option>
                    <option value="opition_3">option_3</option>
                  </select>
                </div>
                <div className="row">
                  <span className="material-symbols-outlined icon">home</span>

                  <select name="provenance" className="select">
                    <option value="" disabled selected>
                      provenance
                    </option>
                    <option value="opition_1">option_1</option>
                    <option value="opition_2">option_2</option>
                    <option value="opition_3">option_3</option>
                  </select>
                </div>
              </div>
              <div className="column-two">
                <div className="row">
                  <span className="material-symbols-outlined icon">school</span>
                  <input
                    type="text"
                    placeholder="education"
                    className="input-school"
                  ></input>
                </div>
                <div className="row">
                  <span className="material-symbols-outlined icon">work</span>
                  <input
                    type="text"
                    placeholder="work"
                    className="input-work"
                  ></input>
                </div>
              </div>
            </div>
            <div className="button-section">
              <button type="cancel" data="skip" className="cancel-btn"></button>
              <button type="submit" className="save-btn">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
