import { hideLoading, showLoading } from "react-redux-loading"
import { saveQuestionAnswer, getInitialData } from '../utils/api'
import { saveQuestion } from '../utils/api'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { receiveUsers } from "./users";

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {

    return (dispatch, getState) => {
        const { authedUser } = getState()
        const question = {
            optionOneText,
            optionTwoText,
            author: authedUser,
        }

        dispatch(showLoading())

        return saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }

}

export function answerQuestion({ authedUser, qid, answer }) {
    return {
      type: ANSWER_QUESTION,
      authedUser,
      qid,
      answer
    }
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
    return (dispatch) => {
      dispatch(showLoading())
      return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(answerQuestion({ authedUser, qid, answer }))
        dispatch(hideLoading())
      })
    }
}