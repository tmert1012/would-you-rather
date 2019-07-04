import React, { Component } from 'react'
import { Card, Button, CardColumns } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class QuestionList extends Component {

    handleClick = (e, id) => {
        e.preventDefault()

        if (this.props.answered)
            this.props.history.push(`/questions/${id}`)
        else
            this.props.history.push(`/questions/${id}`)
    }

    render() {
        const { questions, users } = this.props

        return (
            <CardColumns>
            {questions.map((question) => (
                <Card key={question.id} bg="light" style={{ width: '18rem' }}>
                    <Card.Header as="h5">{users[question.author].name} asks:</Card.Header>
                    <Card.Body>
                        <img alt="avatar" src={users[question.author].avatarURL} />
                        <Card.Title>Would you rather...</Card.Title>
                        <Card.Text>
                            {question.optionOne.text} or ...
                        </Card.Text>
                        <Button variant="primary" onClick={(e) => this.handleClick(e, question.id)}>View Poll</Button>
                    </Card.Body>
                </Card>
            ))}
            </CardColumns>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default withRouter(connect(mapStateToProps)(QuestionList))