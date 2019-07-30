import axios from 'axios';
import * as actionTypes from './actionTypes';
import { SERVER_URL } from '../constants/urls';

export const fetchUsers = () => dispatch => {
  axios.get(`${SERVER_URL}/users`)
  .then(res => {
    dispatch({
      type: actionTypes.FETCH_USERS,
      users: res.data
    })  
  })
  .catch(err => {
    console.log(err);
    alert('Sorry! Server is not able to process this request at the moment.')
  })
}

export const toggleUserStatus = (user) => dispatch => {
  axios.put(`${SERVER_URL}/users/${user.id}`, {
    active: !user.active
  })
  .then(res => {
    dispatch({
      type: actionTypes.UPDATE_USER,
      user: res.data
    })  
  })
  .catch(err => {
    console.log(err);
    alert('Sorry! Server is not able to process this request at the moment.')
  })
}

export const toggleUserSelect = (id) => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_USER_SELECT,
    user_id: id
  })  
}

export const selectAllUsers = () => dispatch => {
  dispatch({
    type: actionTypes.SELECT_ALL_USERS,
  })  
}

export const deselectAllUsers = () => dispatch => {
  dispatch({
    type: actionTypes.DESELECT_ALL_USERS,
  })  
}
