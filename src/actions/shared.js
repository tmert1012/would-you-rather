import { hideLoading, showLoading } from "react-redux-loading"
import { saveQuestionAnswer } from '../utils/api'
import { saveQuestion, getQuestions } from '../utils/api'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


export function handleLogin(user) {
    return (dispatch) => {
      dispatch(showLoading())
      return getQuestions()
          .then(({questions}) => {
            dispatch(setAuthedUser(user))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
          })
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