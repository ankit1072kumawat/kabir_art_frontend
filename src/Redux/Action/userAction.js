import axios from "axios";
import { handleError } from "./commonAction";


const URL = process.env.REACT_APP_API_URL;


export const addMerchants = ({
  
  fName,
  lName,
  email,
  role,


  
  
}, merchantId) => async (dispatch) => {
 
  const password = generatePassword();
 
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/merchants/${merchantId}/users`,
      data: {
       
        fName,
        lName,
        email,
        role,
        
        password
      },
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "ADDUMERCHANTS",
      payload: { data: res.data },
    });
    dispatch({
      type: "ERROR",
      payload: {},
    });
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
};

export const addUsers = ({
  
  firstName,
  lastName,
  email,
  accessType,


  
  
}, merchantId) => async (dispatch) => {
 
  const password = generatePassword();
 
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/merchants/${merchantId}/users`,
      data: {
       
        firstName,
        lastName, 
        email,
        accessType,
        
        password
      },
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({
      type: "ADDUSERS",
      payload: { data: res.data },
    });
    dispatch({
      type: "ERROR",
      payload: {},
    });
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
};





export const delusers = ({ companyId, userIds }) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "delete",
      url: ``,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "DELETEUSERS", payload: { data: res.data } });
    return res
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
};



// export const updateusers = ({
//   companyId,
//   userId,
//   teams,
//   email,
//   fName,
//   lName,
//   role,
//   isTeamChanged,
//   addedTeams,
//   removedTeams,
//   sendEmail,
// }) => async (dispatch) => {
//   try {
//     dispatch({ type: "LOADING_STARTED" });
//     const res = await axios({
//       method: "patch",
//       url: `${URL}/api/v1/companies/${companyId}/users/${userId}`,
//       data: {
//         teams,
//         email,
//         fName,
//         lName,
//         role,
//         isTeamChanged,
//         addedTeams,
//         removedTeams,
//         sendEmail,
//       },
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     dispatch({ type: "LOADING_COMPLETED" });
//     dispatch({ type: "GETUSERDETAILS", payload: { data: res.data } });
//   } catch (error) {
//     dispatch(handleError(error));
//   }
// };


export const getMerchantDetail = (merchantId) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/merchants/${merchantId}`,
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "GETONEMERCHANTDETAIL", payload: { data: res.data } });
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
  
};

export const getMerchantDetails = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/merchants`,
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    dispatch({ type: "GETMERCHANTDETAILS", payload: { data: res.data } });
    return res;
  } catch (error) {
    dispatch(handleError(error));
    return error.reponse
  }
  
};

export const searchMerchant = (searchKeyword) => async (dispatch) => {
  try {
      dispatch({ type: "LOADING_STARTED" });
      const res = await axios({
          method: "get",
          url: `${URL}/api/v1/product/search?limit=5&start=0&search=${searchKeyword}`
      });

     
      dispatch({ type: "LOADING_COMPLETED" });
      dispatch({
          type: "SEARCH_LIST",
          payload: { data: res.data },
      });
      return res;
  }
  catch (error) {
      
      dispatch(handleError(error));
      return error.reponse
  }
}



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