import {getQuestions, saveQuestion, saveQuestionAnswer} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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
      author: authedUser.id,
    }

    dispatch(showLoading())

    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }

}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }

}

export function handleInitialQuestions() {
  return (dispatch) => {
    dispatch(showLoading())
    return getQuestions()
        .then(({questions}) => {
          dispatch(receiveQuestions(questions))
          dispatch(hideLoading())
        })
  }
}

export function answerQuestion(question) {
  return {
    type: ANSWER_QUESTION,
    question
  }
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({ authedUser, qid, answer })
    .then(() => {
      dispatch(answerQuestion())
      dispatch(hideLoading())
    })
  }
}

