const SET_A = "SET_A";

const initialState = {
  A: 100,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_A:
      return {
        ...state,
        A: action.payload,
      };
    default:
      return state;
  }
};

// Action
export const setA = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_A,
      payload: data,
    });
  };
};
