import React, { Component } from 'react'
import { Card, ProgressBar, Badge } from "react-bootstrap"
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {

    getWholePercent(forPerc, ofPerc) {
        return (ofPerc === 0) ? 0 : Math.floor(forPerc / ofPerc * 100)
    }

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
                        <Card.Body>
                            {question.optionOne.text}
                            {question.optionOne.votes.includes(authedUser) && <Badge variant="success">Your Vote</Badge>}
                        </Card.Body>
                        <ProgressBar now={this.getWholePercent(question.optionOne.votes.length, totalVotes)} label={`${this.getWholePercent(question.optionOne.votes.length, totalVotes)}%`} />
                        {`${question.optionOne.votes.length} of ${totalVotes} votes`}
                    </Card>

                    <Card>
                        <Card.Body>
                            {question.optionTwo.text}
                            {question.optionTwo.votes.includes(authedUser) && <Badge variant="success">Your Vote</Badge>}
                        </Card.Body>
                        <ProgressBar now={this.getWholePercent(question.optionTwo.votes.length, totalVotes)} label={`${this.getWholePercent(question.optionTwo.votes.length, totalVotes)}%`} />
                        {`${question.optionTwo.votes.length} of ${totalVotes} votes`}
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