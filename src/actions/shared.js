import { hideLoading, showLoading } from "react-redux-loading"
import { getInitialData } from '../utils/api'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { receiveUsers } from "./users";

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

export function handleLogin(user) {
    return (dispatch) => {
        dispatch(setAuthedUser(user))
        dispatch(hideLoading())
    }
}
