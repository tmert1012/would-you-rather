import React, { Component } from 'react'
import { Button, Card, Form } from "react-bootstrap"
import { connect } from 'react-redux'

class NewQuestion extends Component {

    render() {
        const { users, authedUser } = this.props
        const user = users[authedUser]

        return (
            <Card bg="light" style={{ width: '18rem' }}>
                <Card.Header as="h5">{user.name} asks:</Card.Header>
                <Card.Body>
                    <img alt="avatar" src={user.avatarURL} />
                    <Card.Title>Would you rather...</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formGroupOption1">
                                <Form.Label>Option 1</Form.Label>
                                <Form.Control placeholder="Option 1" />
                            </Form.Group>
                            <Form.Group controlId="formGroupOption2">
                                <Form.Label>Option 2</Form.Label>
                                <Form.Control placeholder="Option 2" />
                            </Form.Group>
                        </Form>
                    </Card.Text>
                    <Button variant="primary">Submit</Button>
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