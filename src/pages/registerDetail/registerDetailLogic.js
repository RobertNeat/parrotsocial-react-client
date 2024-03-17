import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
const API_URL = "http://localhost:8080/api";

export default function RegisterDetailLogic() {
  const { token, userId } = useContext(AuthContext);

  //selected files to upload
  const [profileImgFile, setProfileImgFile] = useState(null);
  const [coverImgFile, setCoverImgFile] = useState(null);

  //to display images on image upload buttons
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [coverImgUrl, setCoverImgUrl] = useState("");

  //list of the defined cities
  const [cityList, setCityList] = useState([""]);

  //inhabitancy/provenance setted
  const [inhabitancy, setInhabitancy] = useState("inhabitancy");
  const [provenance, setProvenance] = useState("provenance");

  //elements of the form (besides provenance/inhabitancy/files)
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [description, setDescription] = useState("");
  const [relationship, setRelatonship] = useState(""); //select
  const [education, setEducation] = useState("");
  const [work, setWork] = useState("");

  //[debug] - check file storing in client
  // useEffect(() => {
  //   if (profileImgFile !== null && coverImgFile !== null) {
  //     console.log("Image name [profile]:" + profileImgFile.name);
  //     console.log("Image name [cover]:" + coverImgFile.name);
  //   }
  // });

  //getting the list of cities
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getCitiesList();
    }
  }, []);

  const getCitiesList = async () => {
    try {
      const res = await axios.get(`${API_URL}/city`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const namesList = res.data.map((city) => city.name);
      setCityList(namesList);
    } catch (err) {
      console.log(err);
    }
  };

  //[debug]
  // useEffect(() => {
  //   console.log("City list: " + cityList);
  // }, [cityList]);

  //[debug-inhabitancy value]
  // useEffect(() => {
  //   console.log(inhabitancy);
  // }, [inhabitancy]);

  //[debug] - checking relationship select field
  // useEffect(() => {
  //   console.log("Relationship:" + relationship);
  // }, [relationship]);

  //updating the user information
  /* 
    -sending profile image [if it is present],
    -sending cover image [if it is present],
    - sending form data,
    - sending the city to coty collection if the city is other than from the list (check if it is other than in the list cityList)
  */

  const imageUpload = async (endpoint, file) => {
    const fullUrl = `${API_URL}/user/picture/${endpoint}`;
    try {
      const data = new FormData();
      data.append("picture", file);
      data.append("user_id", userId);

      const response = await axios.post(fullUrl, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (endpoint === "profile") {
        const imageName = response.data.profilePicture;
        //console.log("profile" + imageName);
        return imageName;
      }
      if (endpoint === "cover") {
        const imageName = response.data.coverPicture;
        //console.log("cover" + imageName);
        return imageName;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addCityToDb = async (newCityName) => {
    try {
      if (newCityName !== "inhabitancy" && newCityName !== "provenance") {
        const city = {
          name: newCityName,
        };
        const response = await axios.post(`${API_URL}/city`, city, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("new_city:" + response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var profile_filename = "";
    var cover_filename = "";

    if (profileImgFile) {
      console.log("Sending profile image file");
      profile_filename = await imageUpload("profile", profileImgFile);
    }

    if (coverImgFile) {
      console.log("Sending cover image file");
      cover_filename = await imageUpload("cover", coverImgFile);
    }

    if (!cityList.includes(inhabitancy)) {
      await addCityToDb(inhabitancy);
    }

    if (!cityList.includes(provenance)) {
      await addCityToDb(provenance);
    }

    try {
      const user = {
        name: name,
        surname: surname,
        description: "",
        relationshipStatus: "",
        inhabitancy: "",
        provenance: "",
        education: "",
        work: "",
        profilePicture: "",
        coverPicture: "",
      };

      if (description !== "") {
        user.description = description;
      }
      if (relationship !== "relationship status") {
        user.relationshipStatus = relationship;
      }
      if (inhabitancy !== "inhabitancy" && inhabitancy !== "inhabitancy") {
        user.inhabitancy = inhabitancy;
      }
      if (provenance !== "provenance" && provenance !== "") {
        user.provenance = provenance;
      }
      if (education !== "") {
        user.education = education;
      }
      if (work !== "") {
        user.work = work;
      }
      if (profile_filename !== "") {
        user.profilePicture = profile_filename;
      }
      if (cover_filename !== "") {
        user.coverPicture = cover_filename;
      }

      console.log(JSON.stringify(user));

      try {
        const response = await axios.put(`${API_URL}/user/${userId}`, user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Form response:" + response);
      } catch (err) {
        console.log("Form submission error:" + err);
      }
    } catch (err) {
      console.log("Data setting error:" + err);
    }

    //setting the profile and cover images names to db for retreival

    /*
      Attention!!! The form submitting cant retreive the userid and token from context api at the first time so the reload is needed
    */
    console.log("Form submitted successfully!");
  };

  return {
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
  };
}
