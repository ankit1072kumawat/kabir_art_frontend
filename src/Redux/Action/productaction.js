import axios from "axios";
import { handleError } from "./commonAction";


// const URL = process.env.REACT_APP_API_URL;
const URL = 'http://localhost:3001';


export const addProduct = (productObject) => async (dispatch) => {

//   const password = generatePassword();
  
  try {
   
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "post",
      url: `${URL}/api/v1/create-product`,
      data: productObject,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch({ type: "LOADING_COMPLETED" });
    // dispatch({
    //   type: "ADDADMINUSER",
    //   payload: { data: res.data },
    // });
    // dispatch({
    //   type: "ERROR",
    //   payload: {},
    // });
    return res;
  } catch (error) {

    // dispatch(handleError(error));
    return error.response
  }
};

export const getproductList = () => async (dispatch) => {
  
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/products`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    // dispatch({ type: "LOADING_COMPLETED" });
    // dispatch({ type: "GETADMINUSERLIST", payload: { data: res.data } });
    return res;
  } catch (error) {
    // dispatch(handleError(error));
    return error.reponse

  }
  
};

export const getproductListByCategory = (query) => async (dispatch) => {
  
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await axios({
      method: "get",
      url: `${URL}/api/v1/category-products?category=${query}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    // dispatch({ type: "LOADING_COMPLETED" });
    // dispatch({ type: "GETADMINUSERLIST", payload: { data: res.data } });
    return res;
  } catch (error) {
    // dispatch(handleError(error));
    return error.reponse

  }
  
};

export const getproductDetail = (productId) => async (dispatch) => {
  
    try {
      dispatch({ type: "LOADING_STARTED" });
      const res = await axios({
        method: "get",
        url: `${URL}/api/v1/product/${productId}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      // dispatch({ type: "LOADING_COMPLETED" });
      // dispatch({ type: "GETADMINUSERLIST", payload: { data: res.data } });
      return res;
    } catch (error) {
      // dispatch(handleError(error));
      return error.reponse
  
    }
    
  };