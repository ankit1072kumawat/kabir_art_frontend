export const initialState = {
  loading: false,
  errorData: {},
  errorMsg: "",
  modalClose: false,
  successMessage: null,
  errorMessage: null,
  modal1: false,
  modal2: false,
  modal3: false,
  statusMsg: null
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "LOADING_COMPLETED":
      return {
        ...state,
        loading: false,
      };
    case "LOADING_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "ERROR":

      return {
        ...state,
        errorData: action.payload?.error?.data,
        errorMsg: action.payload?.errorMsg?.error,
        statusMsg: action.payload?.error?.status
      };

    case 'MODAL_CLOSE':
      return {
        modalClose: false
      }
    case 'OPEN_MODAL':
      return {
        modalClose: true
      }

    case 'CHANGES_SAVE':
      return {
        ...state,
        successMessage: action.payload,
      }
    case 'CHANGES_SAVE_MESSAGE':
      return {
        ...state,
        successMessage: null
      }
    case "ERROR_MESSAGES_POPUP":
      return {
        ...state,
        errorMessage: action.payload
      }
    case 'CLOSE_ERROR_MESSAGES_POPUP':
      return {
        ...state,
        errorMessage: null
      }
    // case '':
    //   return {
    //     ...state,
    //     openModal2: false
    //   }
    // case '':
    //   return {
    //     ...state,
    //     openModal3: false
    //   }
    case 'OPEN_MODAL_ONE':
      return {
        ...state,
        modal1: true
      }
    case 'OPEN_MODAL_TWO':
      return {
        ...state,
        modal2: true
      }
    case 'OPEN_MODAL_THREE':
      return {
        ...state,
        modal3: true
      }
    case 'MODAL_CLOSE_ONE':
      return {
        ...state,
        modal1: false
      }
    case 'MODAL_CLOSE_TWO':
      return {
        ...state,
        modal2: false
      }
    case 'MODAL_CLOSE_THREE':
      return {
        ...state,
        modal3: false
      }
    case "UNAUTHORIZEDERROR":
      return {
        ...state,
        loading: false,
        errorData: action.payload?.error

      }
    case "REMOVECOMMONREDUCERDATA":
      return {
        ...state,
        loading: false,
        errorData: {}

      }

    default:
      return state;
  }
};
