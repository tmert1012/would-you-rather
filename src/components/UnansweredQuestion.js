import React, { Component } from 'react'
import { Button, Card, Form } from "react-bootstrap"
import { connect } from 'react-redux'

class UnansweredQuestion extends Component {

    render() {
        const { id, users, authedUser, questions } = this.props

        const question = questions[id]
        const user = users[question.author]

        return (
            <Card key={id} bg="light" style={{ width: '18rem' }}>
                <Card.Header as="h5">{user.name} asks:</Card.Header>
                <Card.Body>
                    <img alt="avatar" src={`../${user.avatarURL}`} />
                    <Card.Title>Would you rather...</Card.Title>

                        <div key="default-radio" className="mb-3">
                            <Form.Check
                                type="radio"
                                id="default-radio"
                                label={question.optionOne.text}
                            />

                            <Form.Check
                                type="radio"
                                label={question.optionTwo.text}
                                id="default-radio"
                            />
                        </div>
                    <Button variant="primary">Submit</Button>
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

export default connect(mapStateToProps)(UnansweredQuestion)