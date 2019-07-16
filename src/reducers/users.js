import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/shared"

export default function users(state = {}, action) {

  switch (action.type) {

    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }

    case ADD_QUESTION: {
      const { question } = action
      const authedUser = question.author

      return {
        ...state,
        [authedUser]: {
            ...state[authedUser],
            questions: state[authedUser].questions.concat([question.id])
        }
      }
    }

    case ANSWER_QUESTION: {
        const { authedUser, qid, answer } = action

        return {
          ...state,
          [authedUser]: {
              ...state[authedUser],
              answers: {
                  ...state[authedUser].answers,
                  [qid]: answer
              }
          }
        }
    }

    default:
      return state
  }

}