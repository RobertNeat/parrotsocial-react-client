const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: null,
        userId: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        token: action.token,
        userId: action.userId,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        token: null,
        userId: null,
        isFetching: false,
        error: action.payload,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
