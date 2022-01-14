export const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR": {
      return { ...state, error: action.data };
    }
    case "SET_FORM_DATA": {
      return { ...state, [action.data.name]: action.data.value };
    }
    case "CLEAR_FORM_DATA": {
      return { isUserRefreshed: state.isUserRefreshed };
    }
    default:
      return state;
  }
};
