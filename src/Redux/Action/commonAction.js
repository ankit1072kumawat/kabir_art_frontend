//start loading action
export const startLoadig = () => async (dispatch) => {
    dispatch({ type: "LOADING_STARTED" });
  };
  

  //stop loading action
  export const stopLoadig = () => async (dispatch) => {
    dispatch({ type: "LOADING_COMPLETED" });
  };

  //handle error action
export const handleError = (error) => async (dispatch) => {
    
    dispatch({ type: "LOADING_FAILURE" });
    if (error.response) {
      if (error.response.status === 401) {
        dispatch({
          type: "UNAUTHORIZEDERROR",
          payload: { error: error.response },
        });
      } else if (error.response) {
        dispatch({
          type: "ERROR",
          payload: { error: error.response },
        });
      } else {
        dispatch({
          type: "ERROR",
          payload: { errorMsg: error.response },
        });
        errorMessagePopUp(error.response)
        // toast.error(error.response.data.error);
      }
    } else {
      errorMessagePopUp(error.message)
      // toast.error(error.message)
    };
  };

  
//error message action
  export const errorMessagePopUp=(message) =>async(dispatch)=>{
     dispatch({
      type: 'ERROR_MESSAGES_POPUP',
      payload:message
     })
     setTimeout(() => {
      dispatch({
        type: 'CLOSE_ERROR_MESSAGES_POPUP',
       })
    }, 3000);
     
  }