import React, { Component } from 'react'
import { Button, Card, Form } from "react-bootstrap"
import { connect } from 'react-redux'
import { handleAnswerQuestion } from "../actions/shared";
import { Redirect } from 'react-router-dom'

class UnansweredQuestion extends Component {
    state = {
        answer: 'optionOne',
        qid: '',
    }

    handleChange = (e) => {
        const answer = e.target.value

        this.setState(() => ({
            answer
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { answer } = this.state
        const { authedUser, id } = this.props

        this.props.dispatch(handleAnswerQuestion({ authedUser, qid: id, answer }))

        this.setState(() => ({
            qid: id
        }))
    }

    render() {

        if (this.state.qid) {
            return <Redirect to={`/questions/${this.state.qid}`} />
        }

        const { id, users, questions } = this.props
        const question = questions[id]
        const user = users[question.author]

        return (
            <Form onSubmit={this.handleSubmit}>
                <Card key={id} bg="light" style={{ width: '24rem' }}>
                    <Card.Header as="h5">{user.name} asks:</Card.Header>
                    <Card.Body>
                        <img alt="avatar" src={`../${user.avatarURL}`} />
                        <Card.Title>Would you rather...</Card.Title>
                            <Form.Check
                                type="radio"
                                name="question-radio"
                                id="question-radio1"
                                label={question.optionOne.text}
                                onChange={this.handleChange}
                                checked={this.state.answer === "optionOne" ? "checked" : ""}
                                value="optionOne"
                            />
                            <Form.Check
                                type="radio"
                                label={question.optionTwo.text}
                                id="question-radio2"
                                name="question-radio"
                                onChange={this.handleChange}
                                checked={this.state.answer === "optionTwo" ? "checked" : ""}
                                value="optionTwo"
                            />
                        <Button variant="primary" type="submit">Submit</Button>
                    </Card.Body>
                </Card>
            </Form>
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