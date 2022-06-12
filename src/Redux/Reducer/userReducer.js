export const initialState = {
    userData: {},
    isUserAdded: "",
    isDeleted: "",
    isUserUpdated: "",
    isUpdated: "",
    userDetails: [],
    searchList: []
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GETUSERBYCOMPANY":
        return {
          ...state,
          userData: action.payload.data.data,
        };
     
      case "DELETEUSERS":
        return {
          ...state,
          isUserDeleted: action.payload.data.message,
        };
      case "UPDATEUSERDATA":
        return {
          ...state,
          isUserUpdated: action.payload.data.message,
        };
        case "ADDUSERS":
          return {
            ...state,
            isUserAdded: action.payload.data.message,
          };
        
        case "SEARCH_LIST":
          return {
              ...state,
              searchList: action.payload.data.data
          }
      default:
        return state;
    }
  };
  