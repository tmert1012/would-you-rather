import {hideLoading, showLoading} from "react-redux-loading";
import {getUsers} from "../utils/api";

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function handleInitialUsers() {
  return (dispatch) => {
    dispatch(showLoading())
    return getUsers()
        .then(({users}) => {
          dispatch(receiveUsers(users))
          dispatch(hideLoading())
        })
  }
}