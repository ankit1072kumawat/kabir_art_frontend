export const initialState = {
    merchantData: {},  //merchantUserData
    isUserAdded: "", //isUserAdded
    isDeleted: "",
    isUserUpdated: "", //isUserUpdated
    isUpdated: "",
    userDetails: [], //userDetails
    userDetail: [],
    adminUserDetails:[],
    merchantsList:[]
  
  };
  
  export const adminUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GETMERCHANTDETAIL":
        return {
          ...state,
          merchantData: action.payload.data.data,
        };
      case "ADDADMINUSER":
        return {
          ...state,
          isUserAdded: action.payload.data.message,
        };
      case "DELETEADMINUSERDATA":
        return {
          ...state,
          isDeleted: action.payload.data.message,
        };
        case "GETADMINUSERDATA":
          return {
            ...state,
            userDetail : action.payload.data.data,
          };
      case "GETADMINUSERLIST":
        return {
          ...state,
          userDetails: action.payload.data.data,
        };
        case "GETALLMERCHANTFORDROPDOWN":
        return {
          ...state,
          merchantsList: action.payload.data.data,
        };
        case "GETONLYADMINUSERLIST":
          return {
            ...state,
            adminUserDetails: action.payload.data.data,
          };
      case "GETADMINUSERDATA":
        return {
          ...state,
          userDetail: action.payload.data.data,
        };
      case "UPDATEADMINUSERDATA":
        return {
          ...state,
          userDetail: action.payload.data.data,
        };
      default:
        return state;
    }
  };
  