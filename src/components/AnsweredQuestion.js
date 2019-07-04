import React, { Component } from 'react'
import { Card, ProgressBar } from "react-bootstrap"
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {

    render() {
        const { id, users, authedUser, questions } = this.props

        const question = questions[id]
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
        const user = users[question.author]

        return (
        <Card key={id} bg="light" style={{ width: '18rem' }}>
            <Card.Header as="h5">Asked by {user.name}</Card.Header>
            <Card.Body>
                <img alt="avatar" src={`../${user.avatarURL}`} />
                <Card.Title>Would you rather...</Card.Title>

                <Card>
                    <Card.Body>{question.optionOne.text}</Card.Body>
                    <ProgressBar now={totalVotes/question.optionOne.votes.length} label={`${totalVotes/question.optionOne.votes.length}%`} />
                </Card>

                <Card>
                    <Card.Body>{question.optionTwo.text}</Card.Body>
                    <ProgressBar now={totalVotes/question.optionTwo.votes.length} label={`${totalVotes/question.optionTwo.votes.length}%`} />
                </Card>

            </Card.Body>
        </Card>
        )
    }

}

function mapStateToProps({ users, authedUser, questions }) {
    return {
        users,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)