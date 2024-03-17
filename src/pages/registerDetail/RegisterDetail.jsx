import React from "react";
import RegisterDetailLogic from "./registerDetailLogic.js";
import "./registerDetail.css";

export default function RegisterDetail() {
  const {
    profileImgUrl,
    coverImgUrl,
    setProfileImgFile,
    setCoverImgFile,
    setProfileImgUrl,
    setCoverImgUrl,
    cityList,
    inhabitancy,
    provenance,
    setInhabitancy,
    setProvenance,
    name,
    setName,
    surname,
    setSurname,
    description,
    setDescription,
    relationship,
    setRelatonship,
    education,
    setEducation,
    work,
    setWork,
    handleSubmit,
  } = RegisterDetailLogic();

  return (
    <>
      <div className="reg-detail">
        <div className="reg-det-background-pane">
          <div className="reg-det-header">
            <h1 className="reg-det-h1">Personal information</h1>
            <p className="reg-det-p">
              This form is optional and you can fill out personal information in
              your{" "}
              <a href="/#" className="reg-det-a">
                PROFILE
              </a>{" "}
              whenever you want.
            </p>
          </div>
          <form className="reg-det-form" onSubmit={handleSubmit}>
            <div className="reg-det-section-one">
              <div className="reg-det-subsection-one">
                <input
                  type="text"
                  className="reg-det-input"
                  placeholder="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  pattern="[A-Z][a-z]*"
                  title="Name should start with a capital letter and consist of small letters only."
                  required
                ></input>
                <br />
                <input
                  type="text"
                  className="reg-det-input"
                  placeholder="surname"
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  pattern="[A-Z][a-z]*"
                  title="Surname should start with a capital letter and consist of small letters only."
                  required
                ></input>
                <br />
                <textarea
                  className="reg-det-textarea"
                  placeholder="profile description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
                <br />
                <select
                  name="relationship"
                  className="reg-det-relationship"
                  defaultValue=""
                  onChange={(e) => {
                    setRelatonship(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    relationship status
                  </option>
                  <option value="single">single</option>
                  <option value="in relationship">in relationship</option>
                  <option value="engaged">engaged</option>
                  <option value="married">married</option>
                  <option value="divorced">divorced</option>
                  <option value="widowed">widowed</option>
                  <option value="complicated">complicated</option>
                </select>
              </div>
              <div className="reg-det-subsection-two">
                <label htmlFor="profile-img-label">
                  <div
                    className="reg-det-gray-div"
                    style={{ backgroundImage: `url(${profileImgUrl})` }}
                  >
                    <span className="material-symbols-outlined reg-det-white">
                      image
                    </span>
                    <p className="reg-det-p-btn">profile image</p>

                    <input
                      type="file"
                      id="profile-img-label"
                      accept=".png, .jpeg, .jpg"
                      onChange={(e) => {
                        setProfileImgFile(e.target.files[0]);
                        setProfileImgUrl(
                          URL.createObjectURL(e.target.files[0])
                        );
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                </label>
                <label htmlFor="cover-img-label">
                  <div
                    className="reg-det-gray-div"
                    style={{ backgroundImage: `url(${coverImgUrl})` }}
                  >
                    <span className="material-symbols-outlined reg-det-white">
                      image
                    </span>
                    <p className="reg-det-p-btn">cover image</p>
                    <input
                      type="file"
                      id="cover-img-label"
                      accept=".png, .jpeg, .jpg"
                      onChange={(e) => {
                        setCoverImgFile(e.target.files[0]);
                        setCoverImgUrl(URL.createObjectURL(e.target.files[0]));
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="reg-det-section-two">
              <div className="reg-det-column-one">
                <div className="reg-det-row">
                  <span className="material-symbols-outlined reg-det-icon">
                    location_on
                  </span>
                  <input
                    type="text"
                    list="city_list"
                    className="reg-det-input-inhabitancy"
                    value={inhabitancy}
                    onChange={(e) => {
                      setInhabitancy(e.target.value);
                      //console.log("inhabitancy:" + e.target.value);
                    }}
                    onClick={() => {
                      setInhabitancy("");
                    }}
                    onFocus={(e) => {
                      e.target.style.color = "black";
                    }}
                  />
                </div>
                <div className="reg-det-row">
                  <span className="material-symbols-outlined reg-det-icon">
                    home
                  </span>
                  <input
                    type="text"
                    list="city_list"
                    className="reg-det-input-provenance"
                    value={provenance}
                    onChange={(e) => {
                      setProvenance(e.target.value);
                      //console.log("provenance:" + e.target.value);
                    }}
                    onClick={() => {
                      setProvenance("");
                    }}
                    onFocus={(e) => {
                      e.target.style.color = "black";
                    }}
                  />
                </div>
                <datalist id="city_list">
                  {cityList.length > 0 &&
                    cityList.map((city) => {
                      return (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      );
                    })}
                </datalist>
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
                    onChange={(e) => {
                      setEducation(e.target.value);
                    }}
                    pattern="[A-Za-z]+(?:[ -][A-Za-z]+)*"
                    title="Education should consist of small letters. Words can start with a capital letter and can be separated by space or dash."
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
                    onChange={(e) => {
                      setWork(e.target.value);
                    }}
                    pattern="[A-Za-z]+(?:[ -][A-Za-z]+)*"
                    title="Work should consist of small letters. Words can start with a capital letter and can be separated by space or dash."
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
