import React, { Component } from 'react'
import { Button, Card, Form } from "react-bootstrap"
import { connect } from 'react-redux'
import {handleAddQuestion} from "../actions/questions"
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }

    handleOptionChange = (e, inputName) => {
        const text = e.target.value

        this.setState(() => ({
            [inputName]: text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }))
    }

    render() {
        const { users, authedUser } = this.props
        const user = users[authedUser]

        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <Card bg="light" style={{ width: '24rem' }}>
                <Card.Header as="h5">{user.name} asks:</Card.Header>
                <Card.Body>
                    <img alt="avatar" src={user.avatarURL} />
                    <Card.Title>Would you rather...</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupOption1" onChange={(e) => this.handleOptionChange(e, 'optionOneText')}>
                            <Form.Label>Option 1</Form.Label>
                            <Form.Control placeholder="Option 1"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupOption2" onChange={(e) => this.handleOptionChange(e, 'optionTwoText')}>
                            <Form.Label>Option 2</Form.Label>
                            <Form.Control placeholder="Option 2"/>
                        </Form.Group>
                        <Button
                            variant="primary"
                            disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

}

function mapStateToProps({users, authedUser}) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)