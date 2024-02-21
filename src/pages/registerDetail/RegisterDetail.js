import "./registerDetail.css";
import React from "react";

export default function RegisterDetail() {
  return (
    <>
      <div className="reg-detail">
        <div className="reg-det-background-pane">
          <div className="reg-det-header">
            <h1 className="reg-det-h1">Personal information</h1>
            <p className="reg-det-p">
              This form is optional and you can fill out personal information in
              your{" "}
              <a href="#" className="reg-det-a">
                PROFILE
              </a>{" "}
              whenever you want.
            </p>
          </div>
          <form className="reg-det-form">
            <div className="reg-det-section-one">
              <div className="reg-det-subsection-one">
                <input
                  type="text"
                  className="reg-det-input"
                  placeholder="name"
                ></input>
                <br />
                <input
                  type="text"
                  className="reg-det-input"
                  placeholder="surname"
                ></input>
                <br />
                <textarea
                  className="reg-det-textarea"
                  placeholder="profile description"
                ></textarea>
                <br />
                <select name="relationship" className="reg-det-relationship">
                  <option value="" disabled selected>
                    relationship
                  </option>
                  <option value="opition_1">option_1</option>
                  <option value="opition_2">option_2</option>
                  <option value="opition_3">option_3</option>
                </select>
              </div>
              <div className="reg-det-subsection-two">
                <button className="reg-det-gray-btn">
                  <span className="material-symbols-outlined reg-det-white">
                    image
                  </span>
                  <p className="reg-det-p-btn">profile image</p>
                </button>
                <button className="reg-det-gray-btn">
                  <span className="material-symbols-outlined reg-det-white">
                    image
                  </span>
                  <p className="reg-det-p-btn">cover image</p>
                </button>
              </div>
            </div>
            <div className="reg-det-section-two">
              <div className="reg-det-column-one">
                <div className="reg-det-row">
                  <span class="material-symbols-outlined reg-det-icon">
                    location_on
                  </span>
                  <select name="inhabitancy" className="reg-det-select">
                    <option value="" disabled selected>
                      inhabitancy
                    </option>
                    <option value="opition_1">option_1</option>
                    <option value="opition_2">option_2</option>
                    <option value="opition_3">option_3</option>
                  </select>
                </div>
                <div className="reg-det-row">
                  <span className="material-symbols-outlined reg-det-icon">
                    home
                  </span>

                  <select name="provenance" className="reg-det-select">
                    <option value="" disabled selected>
                      provenance
                    </option>
                    <option value="opition_1">option_1</option>
                    <option value="opition_2">option_2</option>
                    <option value="opition_3">option_3</option>
                  </select>
                </div>
              </div>
              <div className="reg-det-column-two">
                <div className="reg-det-row">
                  <span className="material-symbols-outlined reg-det-icon">
                    school
                  </span>
                  <input
                    type="text"
                    placeholder="education"
                    className="reg-det-input-school"
                  ></input>
                </div>
                <div className="reg-det-row">
                  <span className="material-symbols-outlined reg-det-icon">
                    work
                  </span>
                  <input
                    type="text"
                    placeholder="work"
                    className="reg-det-input-work"
                  ></input>
                </div>
              </div>
            </div>
            <div className="reg-det-button-section">
              <button
                type="cancel"
                data="skip"
                className="reg-det-cancel-btn"
              ></button>
              <button type="submit" className="reg-det-save-btn">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
