import axios from 'axios';
import * as actionTypes from './userContants';

export const addUserAction = (request) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.ADD_USER_REQUEST,
    });
    const {data} = await axios.post('https://staging-api.erpxbd.com/api/v1/users/signup', request)
    dispatch({
      type: actionTypes.ADD_USER_REQUEST,
      payload: data
    });
  } catch (error) {
    dispatch({
        type: actionTypes.GET_BOOKINGS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
  }
};
