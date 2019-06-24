import { getInitialData, getUsers } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
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