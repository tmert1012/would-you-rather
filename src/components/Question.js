import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion"
import UnansweredQuestion from "./UnansweredQuestion"

class Question extends Component {

    render() {
        const { id, authedUser, questions } = this.props
        const question = questions[id]

        return (
            <div>
                { (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
                    ? <AnsweredQuestion id={id} />
                    : <UnansweredQuestion id={id} />
                }
            </div>
        )
    }

}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params

    return {
        id,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Question)