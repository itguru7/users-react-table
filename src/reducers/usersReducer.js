import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {

  switch (action.type) {

    case actionTypes.FETCH_USERS:
      return action.users.map(
        (user) => ({...user, selected: false})
      )

    case actionTypes.UPDATE_USER:
      return state.map(
        (user) => 
          user.id === action.user.id ? {...action.user, selected: user.selected} : user
      )

    case actionTypes.TOGGLE_USER_SELECT:
      return state.map(
        (user) => 
          user.id === action.user_id ? {...user, selected: !user.selected} : user
      )

    case actionTypes.SELECT_ALL_USERS:
      return state.map(
        (user) => ({...user, selected: true})
      )

    case actionTypes.DESELECT_ALL_USERS:
      return state.map(
        (user) => ({...user, selected: false})
      )

    default:
      return state
  }
}
