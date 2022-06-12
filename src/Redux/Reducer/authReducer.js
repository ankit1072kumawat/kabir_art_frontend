export const initialState = {
    isRegistered: "",
    isEmailVerified: "",
    isLoggedIn: "",
    authData: {},
    isUpdated:"",
    profileData :{}
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP":
        return {
          ...state,
          isRegistered: action.payload.data.message,
          isEmailVerified: "",
        };
      case "EMAILVERIFICATION":
        return {
          ...state,
          isEmailVerified: action.payload.data.message,
          isRegistered: "",
        };
      case "LOGIN":
        return {
          ...state,
          isLoggedIn: action.payload.data.message,
          authData: action.payload.data.user,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: "",
          isRegistered: "",
          isEmailVerified: "",
          authData: {},
        };
      case "UPDATEPROFILEDATA":
        return {
          ...state,
          isUpdated: action.payload.data.message,
          authData: {
            ...state.authData,
            ...action.payload.data,
          },
        };
      default:
        return state;
    }
  };
  