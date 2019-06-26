import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
} from './_DATA.js'

export function getUsers() {
    return _getUsers().then((users) => ({
        users,
    }))
}

export function getQuestions() {
    return _getQuestions().then( (questions) => ({
        questions
    }))
}

export function saveQuestion (question) {
    return _saveQuestion(question)
}