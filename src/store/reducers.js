export const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM_DATA": {
      return { ...state, [action.data.name]: action.data.value };
    }
    default:
      return state;
  }
};
