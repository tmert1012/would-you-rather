import React, { Component } from 'react'
import { Button, Card, Form } from "react-bootstrap"
import { connect } from 'react-redux'

class Question extends Component {

    render() {
        const { id, users, authedUser, questions } = this.props

        console.log(id)

        const question = questions[id]
        const user = users[question.author]

        return (
            <Card key={id} bg="light" style={{ width: '18rem' }}>
                <Card.Header as="h5">{user.name} asks:</Card.Header>
                <Card.Body>
                    <img alt="avatar" src={user.avatarURL} />
                    <Card.Title>Would you rather...</Card.Title>
                    <Card.Text>
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
                    </Card.Text>
                    <Button variant="primary">Submit</Button>
                </Card.Body>
            </Card>
        )
    }

}

function mapStateToProps({ users, authedUser, questions }, props) {
    const { id } = props.match.params.id

    return {
        id,
        users,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Question)