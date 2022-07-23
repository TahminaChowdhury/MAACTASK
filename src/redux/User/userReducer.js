import * as actionTypes from './userContants';

const initialState = {
  loading: false,
  users: [],
  error: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case actionTypes.ADD_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
