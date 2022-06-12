import axios from "axios";
import { handleError } from "./commonAction";


const URL = process.env.REACT_APP_API_URL;


export const addAdminUser = ({
  
  firstName,
  lastName,
  email,
  role,
  
  
  
}, merchantId) => async (dispatch) => {

  const password = generatePassword();
  
  try {
   
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/admin/merchants/${merchantId}/users`,
      data: {
       
        firstName,
        lastName,
        email,
        role,
           
        password
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "ADDADMINUSER",
      payload: { data: res.data },
    });
    dispatch({
      type: "ERROR",
      payload: {},
    });
    return res;
  } catch (error) {

    dispatch(handleError(error));
    return error.response
  }
};



export const deleteAdminUser = (deleteMerchantId, deleteItemById) => async (dispatch) => {
  try {
    
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "delete",
      url: `${URL}/api/v1/admin/merchants/${deleteMerchantId}/users/${deleteItemById}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "DELETEADMINUSERDATA", payload: { data: res.data } });
    return res
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
};

// export const deleteAdminUser = (deleteMerchantId, deleteItemById) => async (dispatch) => {
//   try {
//     dispatch({ type: "LOADING_STARTED" });
//     const res = await axios({
//       method: "delete",
//       url: `${URL}/api/v1/merchants/${deleteMerchantId}/users/${deleteItemById}`,
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     dispatch({ type: "LOADING_COMPLETED" });
//     dispatch({ type: "DELETEADMINUSERDATA", payload: { data: res.data } });
//     return res
//   } catch (error) {
//     dispatch(handleError(error));
//   }
// };




export const updateAdminUserData = ({
  
  firstName,
  lastName,
  email,
  role,
  
},merchantId,userId ) => async (dispatch) => {
 
  try {
 
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "patch",
      url: `${URL}/api/v1/admin/merchants/${merchantId}/users/${userId}`,
      data: {
        firstName,
        lastName,
        email,
        role,
        
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "UPDATEADMINUSERDATA", payload: { data: res.data } });
  } catch (error) {
    dispatch(handleError(error));
    return error.response
  }
};


// export const getAdminUsersList = ( {
//   LastEvaluatedKey,
//   Limit}) => async (dispatch) => {
  
//   try {
//     dispatch({ type: "LOADING_STARTED" });
//     const res = await axios({
//       method: "get",
//       url: `${URL}/api/v1/users?merchant=intransit-admin`,
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     dispatch({ type: "LOADING_COMPLETED" });
//     dispatch({ type: "GETADMINUSERLIST", payload: { data: res.data } });
//     return res;
//   } catch (error) {
//     dispatch(handleError(error));
    
//   }
  
// };

export const getOnlyAdminUsersList = () => async (dispatch) => {
  
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/admin/adminusers?merchant=intransit-admin`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "GETONLYADMINUSERLIST", payload: { data: res.data } });
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
  
};

// export const getOnlyAdminUsersList = () => async (dispatch) => {
  
//   try {
//     dispatch({ type: "LOADING_STARTED" });
//     const res = await axios({
//       method: "get",
//       url: `${URL}/api/v1/adminusers?merchant=intransit-admin`,
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     dispatch({ type: "LOADING_COMPLETED" });
//     dispatch({ type: "GETONLYADMINUSERLIST", payload: { data: res.data } });
//     return res;
//   } catch (error) {
//     dispatch(handleError(error));
    
//   }
  
// };





export const getAdminUserData = (merchantId, userId) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/admin/merchants/${merchantId}/users/${userId}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "GETADMINUSERDATA", payload: { data: res.data } });
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
  
};
function generatePassword() {
  var length = 8,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// *********new actions*****


// export const getOnlyAdminUsersList = () => async (dispatch) => {
  
//   try {
//     dispatch({ type: "LOADING_STARTED" });
//     const res = await axios({
//       method: "get",
//       url: `${URL}/api/v1/admin/adminusers?merchant=intransit-admin`,
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     dispatch({ type: "LOADING_COMPLETED" });
//     dispatch({ type: "GETONLYADMINUSERLIST", payload: { data: res.data } });
//     return res;
//   } catch (error) {
//     dispatch(handleError(error));
    
//   }
  
// };


export const getAdminUsersList = ( {
  LastEvaluatedKey,
  Limit}) => async (dispatch) => {
  
  try {
   
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/admin/users?merchant=intransit-admin`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "GETADMINUSERLIST", payload: { data: res.data } });
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
  
};

export const getAllMerchanntForDropDown = ( ) => async (dispatch) => {
  
  try { 
   
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/autocompleteMerchants`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "GETALLMERCHANTFORDROPDOWN", payload: { data: res.data } });
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
  
};
