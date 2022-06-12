export const initialState = {
    profileData: {},  //userData
    
  };
  
  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
     
    
      
        case "UPDATEMERCHANTCOMPANYDETAIL":
        return {
          ...state,
          merchantCompanyDetails: action.payload.data.data,
        };
        case "VIEWPROFILE":
          return {
            ...state,
            profileData: action.payload.data.data,
          };
          
       
      default:
        return state;
    }
  };
  