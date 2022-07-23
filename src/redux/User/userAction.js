import axios from 'axios';
import * as actionTypes from './userContants';

export const addUserAction = (request) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.ADD_USER_REQUEST,
    });
    const {data} = await axios.post()
    dispatch({
      type: actionTypes.ADD_USER_REQUEST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_USER_FAIL,
      payload: error,
    });
  }
};
