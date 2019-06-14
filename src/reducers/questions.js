import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

export default function tweets(state = {}, action) {

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.tweets
      }

    case ADD_QUESTION :
      const { question } = action

      return {
        ...state,
        [action.question.id]: action.question,
      }

    default:
      return state
  }
}