export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccessStart = (token, userId) => ({
  type: "LOGIN_SUCCESS",
  token: token,
  userId: userId,
});

export const LoginFailureStart = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const Unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});
