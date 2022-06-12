import axios from "axios";
import { handleError, errorMessagePopUp } from "./commonAction";
const URL = process.env.REACT_APP_API_URL;

//Signup action
export const signup = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,

}) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/users/signup`,
      data: {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,

      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "SIGNUP",
      payload: { data: res.data },
    });
    localStorage.setItem("userId", res.data.data.userId);
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.response
  }
};

//Reset-password action
export const resetPassword = (data, queryString) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/users/resetPassword${queryString}`,
      data: data
    });
    dispatch({ type: "LOADING_COMPLETED" });
    return res;

  } catch (error) {

    dispatch({ type: "LOADING_FAILURE" });
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        dispatch({
          type: "ERROR",
          payload: { error: error.response.data },
        });
      }
      errorMessagePopUp(error.response.data.error);
    } else errorMessagePopUp(error.message);
    return error.response
  }
}


//forget-password action
export const forgotPassword = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/users/forgotPassword`,
      data: data
    });
    dispatch({ type: "LOADING_COMPLETED" });
    return res;

  } catch (error) {

    dispatch({ type: "LOADING_FAILURE" });
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        dispatch({
          type: "ERROR",
          payload: { error: error.response.data },
        });
      }
      errorMessagePopUp(error.response.data.error);
    } else errorMessagePopUp(error.message);
    return error.response
  }
}


export const vemail = ({ code }) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "patch",
      url: ``,
      data: {
        code,
        userId: localStorage.getItem("userId"),
        companyId: localStorage.getItem("companyId"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "EMAILVERIFICATION",
      payload: { data: res.data },
    });
    localStorage.clear();
  } catch (error) {
    dispatch(handleError(error));
  }
};



//login action
export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/users/login`,
      data: {
        email,
        password,
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "LOGIN",
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch(handleError(error));
  }
};

// verify email code while signup
export const verifyEmailCode = ({ code, userId }) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "patch",
      url: `${URL}/api/v1/users/verifyCode`,
      data: {
        code,
        userId
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "VERIFYCODE",
      payload: { data: res.data },
    });
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.response
  }
};

//logout action
export const logout = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
};




export const updateProfileData = ({
      firstName,
      lastName,
      email,
      phone,
      role,
      storeName,
      profilePicture,
      logo
},userid ) => async (dispatch) => {
  try {
   storeName=""
   logo=""
  

    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "patch",
      url: `${URL}/api/v1/users/${userid}/profile`,
      data: {
        firstName,
        lastName,
        phone: phone ? phone : null,
        storeName,
        profilePicture,
        logo,        
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "UPDATEPROFILEDATA", payload: { data: res.data } });
    return res
  } catch (error) {
    dispatch(handleError(error));
    return error.response
  }
};



// Get guest token for customer
export const getGusetToken = ({ email, orderNumber }) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/users/token`,
      data: {
        email,
        orderNumber
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "GUESTTOKEN",
      payload: { data: res.data },
    });
    localStorage.setItem("guestToken", res.data.token);
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.response
  }
};


// ****new action****


// export const updateProfileData = ({
//   firstName,
//   lastName,
//   email,
//   phone,
//   role,
//   storeName,
//   profilePicture,
//   logo
// },userid ) => async (dispatch) => {
// try {
// storeName=""
// logo=""


// dispatch({ type: "LOADING_STARTED" });
// const res = await axios({
//   method: "patch",
//   url: `${URL}/api/v1/admin/users/${userid}/profile`,
//   data: {
//     firstName,
//     lastName,
//     phone: phone ? phone : null,
//     storeName,
//     profilePicture,
//     logo,        
//   },
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("token"),
//   },
// });
// dispatch({ type: "LOADING_COMPLETED" });
// dispatch({ type: "UPDATEPROFILEDATA", payload: { data: res.data } });
// return res
// } catch (error) {
// dispatch(handleError(error));
// return error.response
// }
// };

