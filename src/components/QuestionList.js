import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Avatar from "./Avatar";


class QuestionList extends Component {

    handleClick = (e, id) => {
        e.preventDefault()

        this.props.history.push(`/questions/${id}`)
    }

    render() {
        const { questions, users } = this.props

        return (
            <div className="question-list">
                {questions.map((question) => (
                    <div key={question.id}>
                        <Card bg="light" style={{ width: '18rem' }}>
                            <Card.Header as="h5">{users[question.author].name} asks:</Card.Header>
                            <Card.Body>
                                <Avatar userId={users[question.author].id} imageType={'html'} />
                                <Card.Title>Would you rather...</Card.Title>
                                <Card.Text>
                                    {question.optionOne.text} or ...
                                </Card.Text>
                                <Button variant="primary" onClick={(e) => this.handleClick(e, question.id)}>View Poll</Button>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default withRouter(connect(mapStateToProps)(QuestionList))