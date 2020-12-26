export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQA3pI3LmFJW8auFHKT7V1fsSTY4qVwGdgp5vV6yPtSqzLY4Lu…x_RYeJPBWFE-bfyw_QZ9lGSenDzuSps_ILm8neavsB3NaoRL6", //null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
