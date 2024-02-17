import axios from "axios";
const API_URL = "http://localhost:8080/api";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      `${API_URL}/auth/authenticate`,
      userCredential
    );

    dispatch({
      type: "LOGIN_SUCCESS",
      token: res.data.token,
      userId: res.data.userId,
    });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
